<template>
    <div class="showcase">
        <div class="showcase-wrapper" @scroll="onShowcaseWrapperScroll">
            <div class="showcase-container" id="showcase-container" @touchmove="onShowcaseContainerTouchMove">
                <div class="showcase-figure" v-for="item in projects" :key = "item.id">
                    <div
                            class="showcase-image interactive-l"
                            alt="My image"
                    >
                    </div>
                    <div class="title-content interactive-l"  
                            :data-src="item.dataSrc"
                            :data-hover="item.dataHover"
                            @mouseover="onShowcaseImageMouseOver"
                            @mouseout="onShowcaseImageMouseOut"
                            @click="openDetailPage"
                    >
                        
                        <h1 v-if="language == 'ZH'">{{item.title.ZH}}</h1>
                        <h1 v-else-if="language == 'EN'">{{item.title.EN}}</h1>
                        <p v-if="language == 'ZH'">{{item.category.ZH}}</p>
                        <p v-if="language == 'EN'">{{item.category.EN}}</p>
                        <div class="hover-box"></div>
                    </div>

                </div>
            </div>
        </div>
        <canvas id="showcase-canvas"></canvas>
    </div>
</template>

<script>
    import * as THREE from 'three'
    import {gsap,Power2} from 'gsap'
    import vertexShader from '../glsl/vertexShader.glsl'
    import fragmentShader from '../glsl/trippyShader.glsl'
    import {getRatio,map} from '@/utils/utils'
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


    export default {
        name: "Showcase",
        data() {
            return {
                camera: null,
                scene: null,
                renderer: null,
                canvas:null,
                geometry:null,
                clock:null,
                meshes:[],
                images:[],
                perspective : 800,
                loader: new THREE.TextureLoader(),
                u_time:0,

                u_offset:new THREE.Vector2(0,0),
                sizes: new THREE.Vector2(0,0),
                offset: new THREE.Vector2(0,0),
                mouse: new THREE.Vector2(0,0),
                delta: new THREE.Vector2(0,0),

                isHovering:false,
                isOpenDetailPage:false,
                isWheeling:false,
                isFramesNeedUpdate:false,
                isChangingFilter:false,

                hoveringTargetIndex:0,
                clickTargetIndex:0,
                openProjectId:0,
                inViewportTargetIndex:0,
                filterIndex:0,

                loadingPercent:0,

                scrollbar: null,

                projectCount:this.ProjectData.data().projectData.length,

                titleFilter:null,
                primitiveValues:{stdDeviation:0},
            }
        },
        components:{
        },
        mounted(){
            
            for (let i=0;i< this.projects.length;i++){
                this.getBounds(document.querySelector('.showcase-image'));
                gsap.set(document.querySelectorAll('.title-content')[i],{
                    x:-this.delta.x,
                    y:this.delta.y,
                });
            }
            this.preload(this.originalProjectData,()=> {
                setTimeout(()=> {
                    this.init();
                },800);
            });
        },
        computed:{
            isMobile: function () {
                return window.matchMedia('(max-width: 767px)').matches
            },
            originalProjectData: function () {
                return this.ProjectData.data().projectData.reverse().filter(function (item) {
                    return item.isShowcases;
                });
            }
        },
        props:[
            'language',
            'projects'
        ],
        methods:{
            /*Action
            --------------------------------*/
            init(){
                gsap.set('.showcase-figure',{
                    height:window.innerHeight,
                });
                this.canvas = document.getElementById('showcase-canvas');
                this.scene = new THREE.Scene({});
                //Renderer
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    canvas: this.canvas
                });
                this.renderer.setSize(window.innerWidth,window.innerHeight);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
                this.clock = new THREE.Clock();
                this.geometry = new THREE.PlaneBufferGeometry(1, 1, 16, 16);

                this.setLights();
                this.setCamera();

                this.figure();
                this.update();

                this.bindListener();
                this.$emit('loadingCoverHided');
            },
            setLights(){
                const ambientlight = new THREE.AmbientLight(0xffffff, 2)
                this.scene.add(ambientlight)
            },
            setCamera(){
                const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / this.perspective))) / Math.PI;
                this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000);
                this.camera.position.set(0, 0, this.perspective);
                this.camera.updateProjectionMatrix();
            },
            figure(){
                for (let i=0;i< this.projects.length;i++){
                    this.getBounds(document.querySelector('.showcase-image'));
                    let j = this.projects[i].id -1;
                    let reverseImages = [...this.images].reverse();
                    this.createMesh(reverseImages[j]);
                }
            },
            getBounds(target){
                const { width, height, left, top } = target.getBoundingClientRect();
                if (!this.sizes.equals(new THREE.Vector2(width, height))) {
                    this.sizes.set(width, height)
                }
                if (!this.offset.equals(new THREE.Vector2(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2))) {
                    this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2)
                }
            },
            createMesh(image) {
                const uniforms = {
                    u_map: { type: 't', value: image },
                    u_alpha:{value:1},
                    u_ratio:{value: getRatio(this.sizes,image.image)},
                    u_hoverratio:{value: getRatio(this.sizes,image.image)},
                    u_mouse: { value: this.mouse},
                    u_time: { value: this.u_time},
                    u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    u_offset:{value: this.u_offset},
                    u_progressHover:{value:0},
                    u_progressClick:{value:0},
                };
                const material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader,
                    defines: {
                        PR: window.devicePixelRatio.toFixed(1)
                    },

                });
                const mesh = new THREE.Mesh(this.geometry, material);
                mesh.position.set(this.offset.x, this.offset.y, 0);
                mesh.scale.set(this.sizes.x, this.sizes.y, 1);
                this.meshes.push(mesh);
                this.scene.add(mesh);
            },
            openDetailPagebyID(e){
                if(!this.isOpenDetailPage){
                    document.querySelector('.detail-wrapper').style.display = 'block';
                    document.querySelector('.detail-wrapper').style.scrollTop = 0;
                    this.isOpenDetailPage = true;
                    const targetID = e;
                    const index = this.projects.findIndex(item => item.id === targetID);
                    this.clickTargetIndex = index;
                    this.openProjectId = e;
                    this.hideTitle();
                    const newBound = {
                        x:window.innerWidth * 1.05,
                        y:window.innerHeight * 1.05
                    };
                    const newRatio = getRatio(newBound,this.images[this.clickTargetIndex].image);
                    gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_hoverratio.value,{
                        x:newRatio.x,
                        y:newRatio.y,
                        ease:Power2.easeInOut,
                        duration:0.8,
                    });
                    gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_ratio.value,{
                        x:newRatio.x,
                        y:newRatio.y,
                        ease:Power2.easeInOut,
                        duration:0.8,
                    });
                    gsap.to('.showcase-filter',{
                        yPercent:0,
                        duration:0.2,
                    })
                    gsap.to('#app',{
                        scrollTo:document.querySelectorAll('.showcase-figure')[this.clickTargetIndex],
                        duration:0.4,
                        ease:Power2.easeInOut,
                        onComplete:()=>{
                            document.querySelector('.showcase').classList.remove('show');
                        }
                    });
                    gsap.to(document.querySelectorAll('.showcase-image')[this.clickTargetIndex],{
                        width:window.innerWidth,
                        height:window.innerHeight,
                        left:0,
                        top:0,
                        duration:0,
                        onComplete:()=>{
                            this.getBounds(document.querySelectorAll('.showcase-image')[this.clickTargetIndex]);
                            gsap.to(this.meshes[this.clickTargetIndex].scale,{
                                x:this.sizes.x,
                                y:this.sizes.y,
                                duration:0.8,
                                ease:Power2.easeInOut,
                                onComplete:()=>{
                                    gsap.to('.changing-project-cover',{
                                        opacity:0,
                                        duration:0.4,
                                    });
                                    gsap.to(('.detail-wrapper'),{
                                        opacity: 1,
                                        scrollTo:0,
                                    });
                                    document.querySelector('.percent').style.opacity = 1;
                                    this.$emit('openDetailPage',this.openProjectId);
                                    gsap.to('.back-button',{
                                        y:0,
                                        duration:0.4,
                                        ease:Power2.easeInOut,
                                    });
                                }
                            });
                            gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_res.value,{
                                x:window.innerWidth,
                                y:window.innerHeight,
                                duration:0.8,
                            });

                        }
                    });
                    gsap.to(this.u_offset, {
                        x: 0,
                        y: 0,
                        duration:0.8,
                    });
                    gsap.to('.hover-box',{
                        opacity:0,
                        duration:0.4,
                    });
                }
            },
            openDetailPage(e){
                if(!this.isOpenDetailPage){
                    document.querySelector('.detail-wrapper').style.display = 'block';
                    document.querySelector('.detail-wrapper').style.scrollTop = 0;
                    this.isOpenDetailPage = true;
                    this.clickTargetIndex = Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement);
                    this.openProjectId = this.projects[this.clickTargetIndex].id;
                    this.hideTitle();
                    const newBound = {
                        x:window.innerWidth * 1.05,
                        y:window.innerHeight * 1.05
                    };
                    const newRatio = getRatio(newBound,this.images[this.clickTargetIndex].image);
                    gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_hoverratio.value,{
                        x:newRatio.x,
                        y:newRatio.y,
                        ease:Power2.easeInOut,
                        duration:0.8,
                    });
                    gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_ratio.value,{
                        x:newRatio.x,
                        y:newRatio.y,
                        ease:Power2.easeInOut,
                        duration:0.8,
                    });
                    gsap.to('#app',{
                        scrollTo:document.querySelectorAll('.showcase-figure')[this.clickTargetIndex],
                        duration:0.4,
                        ease:Power2.easeInOut,
                        onComplete:()=>{
                            gsap.to('.showcase-filter',{
                                yPercent:0,
                                duration:0.2,
                            });
                            document.querySelector('.showcase').classList.remove('show');
                        }
                    });
                    gsap.to(document.querySelectorAll('.showcase-image')[this.clickTargetIndex],{
                        width:window.innerWidth,
                        height:window.innerHeight,
                        left:0,
                        top:0,
                        duration:0,
                        onComplete:()=>{
                            this.getBounds(document.querySelectorAll('.showcase-image')[this.clickTargetIndex]);
                            gsap.to(this.meshes[this.clickTargetIndex].scale,{
                                x:this.sizes.x,
                                y:this.sizes.y,
                                duration:0.8,
                                ease:Power2.easeInOut,
                                onComplete:()=>{
                                    gsap.to(('.detail-wrapper'),{
                                        opacity: 1,
                                        scrollTo:0,
                                    });
                                    document.querySelector('.percent').style.opacity = 1;
                                    this.$emit('openDetailPage',this.openProjectId);
                                    gsap.to('.back-button',{
                                        y:0,
                                        duration:0.4,
                                        ease:Power2.easeInOut,
                                    });
                                }
                            });
                            gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_res.value,{
                                x:window.innerWidth,
                                y:window.innerHeight,
                                duration:0.8,
                            });

                        }
                    });
                    gsap.to(this.u_offset, {
                        x: 0,
                        y: 0,
                        duration:0.8,
                    });
                    gsap.to('.hover-box',{
                        opacity:0,
                        duration:0.4,
                    });
                }
            },
            closeDetailPage(){
                this.showTitle();
                const newBound = {
                    x: parseFloat(window.getComputedStyle(document. documentElement)["fontSize"])*24,
                    y: parseFloat(window.getComputedStyle(document. documentElement)["fontSize"])*24,
                };
                const newRatio = getRatio(newBound,this.images[this.clickTargetIndex].image);
                gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_hoverratio.value,{
                    x:newRatio.x,
                    y:newRatio.y,
                    ease:Power2.easeInOut,
                    duration:0.8,
                });
                gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_ratio.value,{
                    x:newRatio.x,
                    y:newRatio.y,
                    ease:Power2.easeInOut,
                    duration:0.8,
                });
                // this.isHovering = false;
                // this.isOpenDetailPage = false;
                gsap.to(document.querySelectorAll('.showcase-image')[this.clickTargetIndex],{
                    duration:0.8,
                    width:'24rem',
                    height:'24rem',
                    left:'calc(50% - 12rem)',
                    top:'calc(50% - 18rem)',
                    ease:Power2.easeOut,
                    onUpdate:()=>{
                        this.getBounds(document.querySelectorAll('.showcase-image')[this.clickTargetIndex]);
                        this.meshes[this.clickTargetIndex].scale.set(this.sizes.x, this.sizes.y, 1);
                        this.meshes[this.clickTargetIndex].material.uniforms.u_res.value.set(window.innerWidth, window.innerHeight);
                    },
                    onComplete:()=>{
                        gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_progressClick,{
                            duration:0.8,
                            value: 0,
                            ease:Power2.easeInOut
                        });
                        gsap.to(this.meshes[this.hoveringTargetIndex].material.uniforms.u_progressHover,{
                            duration:0.5,
                            value: 0
                        });
                        this.isHovering = false;
                        this.isOpenDetailPage = false;
                        this.clickTargetIndex=0;
                        this.openProjectId=0,
                        gsap.to('.showcase-filter',{
                            yPercent:-100,
                            duration:0.2
                        });
                        document.querySelector('.showcase').classList.add('show');
                    },
                });
            },
            showTitle(){
                gsap.to('.title-content', {
                    duration: 0.8,
                    ease: "none", // Power1.easeInOut
                    opacity: 1,
                });
                gsap.to(document.querySelectorAll('.hover-box')[this.inViewportTargetIndex],{
                    opacity:1,
                    duration:0.4,
                })
            },
            hideTitle(){
                gsap.to('.title-content', {
                    duration: 0.8,
                    ease: "none", // Power1.easeInOut
                    opacity: 0,
                })
                gsap.to('.hover-box',{
                    opacity:0,
                    duration:0.4,
                });
            },
            changeFilter(e){
                setTimeout(()=> {
                    this.isChangingFilter = true;
                    this.filterIndex = e;
                    for (let i = 0; i <this.meshes.length ; i++) {
                        this.scene.remove(this.meshes[i]);
                    }
                    this.meshes = [];
                    gsap.set('.showcase-figure',{
                        height:window.innerHeight,
                    });
                    this.isChangingFilter = false;
                    this.figure();
                    for (let i=0;i< this.projects.length;i++){
                        this.getBounds(document.querySelectorAll('.showcase-image')[i]);
                        gsap.to(this.meshes[i].position,{
                            x:this.offset.x +  this.delta.x + this.offset.y,
                            y:this.offset.y + this.delta.y,
                            duration:0.2,
                        });
                    }
                    gsap.fromTo('.showcase-wrapper',{
                        y:20,
                        opacity:0,
                    },{
                        opacity:1,
                        y:0,
                        duration:0.4,
                        delay:0.1,
                    });
                    gsap.to('#showcase-canvas',{
                        opacity:1,
                        duration:0.4,
                        delay:0.1,
                        onComplete:()=>{
                        }
                    });
                },100);
            },
            update(){
                requestAnimationFrame(this.update);
                this.renderer.render(this.scene,this.camera);
                if(this.isHovering) {
                    this.meshes[this.hoveringTargetIndex].material.uniforms.u_time.value += 0.03;
                }
                if(this.isChangingFilter){ 
                    return false
                }
                for (let i=0;i< this.projects.length;i++){
                    this.getBounds(document.querySelectorAll('.showcase-image')[i]);
                    gsap.to(this.meshes[i].position,{
                        x:this.offset.x +  this.delta.x + this.offset.y,
                        y:this.offset.y + this.delta.y,
                        duration:0.4,
                    });
                }

                // if(!this.isOpenDetailPage ){

                // }
                // else {
                //     for (let i=0;i< this.projects.length;i++){
                //         this.getBounds(document.querySelectorAll('.showcase-image')[i]);
                //         gsap.to(this.meshes[i].position,{
                //             x:this.offset.x,
                //             y:this.offset.y
                //         });
                //     }
                // }

            },
            preload(projects, allImagesLoadedCallback) {

                let loadedCounter = 0;
                const toBeLoadedNumber = projects.length;
                const preloadImage = (t, anImageLoadedCallback) => {
                    const image = this.loader.load(t, anImageLoadedCallback);
                    this.images.push(image);
                };
                projects.forEach((project) => {
                    preloadImage(project.dataSrc, () => {
                        loadedCounter += 1;
                        this.loadingPercent = loadedCounter / toBeLoadedNumber * 100;
                        this.$emit('updateLoadingPercent',this.loadingPercent);
                        if (loadedCounter === toBeLoadedNumber) {
                            allImagesLoadedCallback()
                        }
                    })
                })
            },

            /*Event
            --------------------------------*/
            bindListener(){
                window.addEventListener('mousemove', (ev) => {
                    this.onMouseMove(ev);
                });
                window.addEventListener('resize',()=>{
                    this.onResize();
                });
                document.querySelector('#app').addEventListener('scroll',(s)=>{
                    this.onScroll(s);
                });
                history.pushState(null,null,document.URL);
                window.addEventListener('popstate',function () {
                    history.pushState(null,null,document.URL);
                })
            },
            onResize() {
                this.setCamera();
                this.renderer.setSize(window.innerWidth,window.innerHeight);
                for(let i=0;i< this.projects.length;i++){
                    this.getBounds(document.querySelectorAll('.showcase-image')[i]);
                    this.meshes[i].scale.set(this.sizes.x, this.sizes.y, 1);
                    this.meshes[i].material.uniforms.u_res.value.set(window.innerWidth, window.innerHeight);
                    this.meshes[i].material.uniforms.u_ratio.value = getRatio(this.sizes,this.images[i].image);
                    this.meshes[i].material.uniforms.u_hoverratio.value = getRatio(this.sizes,this.images[i].image);
                }
            },
            onMouseMove(event) {
                if(this.isMobile) return;
                const tX = event.clientX;
                const tY = event.clientY;
                gsap.to(this.mouse, {
                    x: tX,
                    y: tY,
                    duration:0.8,
                    onUpdate: () =>{
                        if(!this.isOpenDetailPage){
                            this.u_offset.x = (tX - this.mouse.x) * 0.0001;
                            this.u_offset.y = -(tY - this.mouse.y)  * 0.0001;
                            this.delta.x = map(this.mouse.x,0,window.innerWidth,-1,1) * 16;
                            this.delta.y = map(this.mouse.y,0,window.innerHeight,1,-1) * 16;
                        }
                    },
                });
            },
            onScroll(){
                if(this.isOpenDetailPage){
                    return
                }
                const scrollValue = -document.querySelector('.showcase').getBoundingClientRect().top / document.querySelector('.showcase-figure').getBoundingClientRect().height;
                this.inViewportTargetIndex = parseInt(scrollValue + 0.5);

                if(this.inViewportTargetIndex > this.projects.length - 0.5){
                    return
                }

                const showcaseTop = document.querySelector('.showcase').getBoundingClientRect().top
                const showcaseHeight = document.querySelector('.showcase').getBoundingClientRect().height

                if(scrollValue % 1 > 0.75 || (scrollValue % 1 < 0.25 && scrollValue % 1 > -0.25)){
                    gsap.to(document.querySelectorAll('.hover-box')[this.inViewportTargetIndex],{
                        opacity:1,
                        duration:0.4,
                    })
                }else{
                    gsap.to(document.querySelectorAll('.hover-box')[this.inViewportTargetIndex],{
                        opacity:0.4,
                        duration:0.4,
                    })
                }

                if(showcaseTop < window.innerHeight - 100 && showcaseHeight + showcaseTop > window.innerHeight - 100){
                    if(!document.querySelector('.showcase').classList.contains('show')){
                        document.querySelector('.showcase').classList.add('show');
                        gsap.to('.showcase-filter',{
                            yPercent:-100,
                            duration:0.2,
                        })
                    }
                }else{
                    document.querySelector('.showcase').classList.remove('show');
                        gsap.to('.showcase-filter',{
                            yPercent:0,
                            duration:0.2,
                        })
                }

                if(!this.isMobile){ 
                    return
                }
                gsap.to(this.mouse,{
                    y: showcaseTop,
                    duration:0.8,
                    onUpdate: () =>{
                        this.u_offset.y = (this.mouse.y - showcaseTop)  * 0.0001;
                        this.u_offset.x = (this.mouse.y - showcaseTop)  * 0.0001;
                        this.delta.y = -(this.mouse.y - showcaseTop) * 0.1;
                        this.delta.x = -(this.mouse.y - showcaseTop) * 0.2;
                    },
                });
            },
            
            onShowcaseImageMouseOver(e){
                this.isHovering = true;
                this.hoveringTargetIndex = Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement);
                gsap.to(this.meshes[this.hoveringTargetIndex].material.uniforms.u_progressHover,{
                    duration:0.5,
                    value: 1
                });
            },
            onShowcaseImageMouseOut(){
                if(this.isOpenDetailPage){
                    return
                }
                this.isHovering = false;
                gsap.to(this.meshes[this.hoveringTargetIndex].material.uniforms.u_progressHover,{
                    duration:0.5,
                    value: 0
                });
            },
            onShowcaseContainerTouchMove(e){
                if(this.isOpenDetailPage){
                    e.preventDefault();
                }else{
                    return true;
                }
            },
            onShowcaseWrapperScroll(s){
                this.onScroll(s.target.scrollTop,s.target.children[0].clientHeight - s.target.children[0].children[0].clientHeight);
            },
            detailImagesLoaded(){
                gsap.to(this.meshes[this.clickTargetIndex].material.uniforms.u_progressClick,{
                    duration:0.8,
                    value: 1,
                    ease:Power2.easeInOut,
                });
            }
        }
    }
</script>

<style scoped>
    .showcase {
        width: 100vw;
        position: relative;
        background-color: var(--background-dark);
        z-index: 1;
    }
    .showcase-wrapper{
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 100vw;
        position: relative;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
    }
    .showcase-wrapper::-webkit-scrollbar{
        display: none; /* Chrome Safari */
    }
    .showcase-container {
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 100vw;
        position: relative;
        padding-bottom: calc(100vh - 48rem);
    }

    .showcase-figure{
        display: block;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        position: relative;

    }
    .showcase-image {
        display: block;
        width: 24rem;
        height: 24rem;
        object-fit: cover;
        object-position: center;
        left: calc(50% - 12rem);
        top: calc(50% - 18rem);
        position: relative;
    }
    .title-content {
        display:flex;
        width: 24rem;
        height: 34rem;
        padding: 2rem;
        left: calc(50% - 12rem);
        top: calc(50% - 16rem);
        position: absolute;
        box-sizing: border-box;
        line-height: 8rem;
        color: var(--foreground-dark-1);
        opacity: 1;

        text-align: left;
        align-items:left;
        justify-content:flex-end;
        flex-direction:column;
        z-index: 2;
        gap: 1rem;
    }
    .title-content h1{
        font-size: 2rem;
        margin-bottom: 0.5rem;
        width: 100%;
        display: block;
        word-wrap: break-word;
        pointer-events: none;
    }
    .title-content h2{
        font-size: 1rem;
        width: 100%;
        display: block;
        pointer-events: none;
    }
    .title-content p{
        pointer-events: none;
    }

    .hover-box{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
        border: 1px solid var(--foreground-light-1);
        opacity: 0.4;
        pointer-events: none;
        z-index: 1;
    }

    #showcase-canvas{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        pointer-events: none;
    }
</style>