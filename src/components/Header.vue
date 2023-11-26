<template>
    <div class="header" id="header">
        <div class="intro-locator" style="position: relative;width: 100%;height: 100%;">
            <div class="intro">
                <p v-if="language=='ZH'" style="color: var(--foreground-dark-1);">我打造体验连接 <strong> 产品和人类，品牌和人群</strong></p>
                <p v-else-if="language=='EN'" style="color: var(--foreground-dark-1);">I craft experience connecting <strong> product and human, brand and people</strong></p>
                <div class="switchImg">
                    <img :src="require('@/assets/brand/scroll-down.svg')" alt="" id="scroll-down-icon" style="position:absolute;width: 1.5rem;height: 3rem;right: -25%;bottom: 2rem;">
                </div>
        </div>
        </div>
        <canvas id="header-canvas"></canvas>
    </div>

</template>

<script>
    import {gsap,Power2} from 'gsap'
    import * as THREE from 'three'
    import {getRatio} from "@/utils/utils";
    import vertexShader from '../glsl/vertexShader.glsl'
    import fragmentShader from '../glsl/waveShader.glsl'

    export default {
        name: "Header",
        data(){
            return{
                camera: null,
                scene: null,
                renderer: null,
                canvas:null,
                geometry:null,
                clock:null,
                mesh:null,
                perspective : 800,
                loader: new THREE.TextureLoader(),
                u_time:0,

                sizes: new THREE.Vector2(0,0),
                offset: new THREE.Vector2(0,0),
                mouse: new THREE.Vector2(1000,0),

                isFold : true,
                isFramesNeedUpdate: false,
                currentIndex:0,

                imagesData:[],
                preloadImages:[],
                lazyLoadImages:[],
                images:[],
                imagesCount:4,

            }
        },
        mounted(){
            for(let i=0;i<this.imagesCount;i++){
                this.imagesData.push(require('../assets/brand/img=img'+(i+1)+'.png'));
            }
            for(let i=0;i<3;i++){
                this.preloadImages.push(this.imagesData[i]);
            }

            this.preload(this.preloadImages,()=>{
                for(let i=3;i<this.imagesCount;i++){
                    if(this.images[i+3] == null){
                        const image = this.loader.load(this.imagesData[i],()=> {
                            this.images[i] = image;
                        });
                    }
                }
                this.init();
            })
        },
        components: {
        },
        props:['language'],
        methods:{
            init(){
                this.canvas = document.getElementById('header-canvas');
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

                this.switchNextImg();
                setInterval(this.switchNextImg,6400);

                this.bindListener();
            },
            setLights() {
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
                this.getBounds(document.querySelector('.switchImg'));
                this.createMesh(this.images[this.currentIndex],this.images[this.currentIndex+1]);
            },
            getBounds(target){

                const { width, height, left, top } = target.getBoundingClientRect();

                if (!this.sizes.equals(new THREE.Vector2(width, height))) {
                    this.sizes.set(width, height)
                }
                if (!this.offset.equals(new THREE.Vector2(left -  window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2))) {
                    this.offset.set(left -  window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2 - document.querySelector("#app").scrollTop)
                }
            },
            createMesh(image,hoverImage) {
                const uniforms = {
                    u_map: { type: 't', value: image },
                    u_hovermap:{ type: 't', value: hoverImage},
                    u_alpha:{value:1},
                    u_ratio:{value: getRatio(this.sizes,image.image)},
                    u_hoverratio:{value: getRatio(this.sizes,image.image)},
                    u_time: { value: this.u_time},
                    u_mouse: { value: this.mouse},
                    u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
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
                this.mesh = new THREE.Mesh(this.geometry, material);
                this.mesh.position.set(this.offset.x, this.offset.y, 0);
                this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
                this.scene.add(this.mesh);
            },
            switchNextImg(){
                if(document.querySelector('.showcase').getBoundingClientRect().y > 0){
                    this.isFramesNeedUpdate = true;
                    this.update();
                    this.mesh.material.uniforms.u_hovermap.value = this.images[this.currentIndex];
                    gsap.to(this.mesh.material.uniforms.u_progressHover,{
                        duration:1.6,
                        value:1,
                        ease:Power2.easeInOut,
                        onComplete:()=>{
                            if(this.currentIndex < this.images.length - 1){
                                this.currentIndex +=1;
                            }else{
                                this.currentIndex =0;
                            }
                            this.mesh.material.uniforms.u_map.value = this.images[this.currentIndex];
                            gsap.to(this.mesh.material.uniforms.u_progressHover,{
                                duration:1.6,
                                value:0,
                                ease:Power2.easeInOut,
                                onComplete:()=>{
                                    setTimeout(()=>{
                                        this.isFramesNeedUpdate = false
                                    },100);
                                }
                            })
                        }
                    });
                }
            },
            update(){
                if(!this.isFramesNeedUpdate){
                    return;
                }
                requestAnimationFrame(this.update);
                this.renderer.render(this.scene,this.camera);
                if(this.mesh){
                    if(this.mesh.material.uniforms.u_time.value>100){
                        this.mesh.material.uniforms.u_time.value = 0;
                    }
                    this.mesh.material.uniforms.u_time.value += 0.03;
                }
            },
            preload(imgs, allImagesLoadedCallback) {
                let loadedCounter = 0;
                const toBeLoadedNumber = imgs.length;
                const preloadImage = (t, anImageLoadedCallback) => {
                    const image = this.loader.load(t, anImageLoadedCallback);
                    this.images.push(image);
                };
                imgs.forEach((img) => {
                    preloadImage(img, () => {
                        loadedCounter += 1;
                        this.loadingPercent = loadedCounter / toBeLoadedNumber * 100;
                        this.$emit('updateLoadingPercent',this.loadingPercent);
                        if (loadedCounter === toBeLoadedNumber) {
                            allImagesLoadedCallback()
                        }
                    })
                })
            },
            onResize() {
                this.setCamera();
                this.renderer.setSize(window.innerWidth,window.innerHeight);
                this.getBounds(document.querySelector('.switchImg'));
                this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
                this.mesh.position.set(this.offset.x, this.offset.y, 0);
                this.mesh.material.uniforms.u_res.value.set(window.innerWidth, window.innerHeight);
                this.mesh.material.uniforms.u_ratio.value = getRatio(this.sizes,this.images[this.currentIndex].image);
                this.mesh.material.uniforms.u_hoverratio.value = getRatio(this.sizes,this.images[this.currentIndex].image);
                this.renderer.render(this.scene,this.camera);
            },
            onMouseMove(event) {
                if(this.isMobile) return;
                const tX = event.clientX;
                const tY = event.clientY;
                gsap.to(document.querySelector('.intro-locator'), {
                    x: tX * 0.03,
                    y: tY * 0.02,
                    duration:0.8,
                    ease:Power2.easeOut
                });
                gsap.to(document.querySelector('#header-canvas'), {
                    x: - tX * 0.03,
                    y: - tY * 0.02,
                    duration:0.8,
                    ease:Power2.easeOut
                });
            },

            bindListener(){
                window.addEventListener('mousemove', (ev) => {
                    this.onMouseMove(ev);
                });
                window.addEventListener('resize',()=>{
                    this.onResize();
                });
            },
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        width: 100%;
        height: 100%;
        margin:0 auto;
        box-sizing: border-box;
        z-index: 1;
        background-color: var(--background-light);
        overflow: hidden;
        padding: 0;
        margin: 0;
    }

    .switchImg {
        position: relative;
        width: 60vw;
        height: 60vw;
        max-width: 480px;
        max-height: 480px;
        left: -20%;
        top: 3rem;
        z-index: 1;
        pointer-events: none;
    }

    .intro{
        width: 60vw;
        height: 60vw;
        max-width: 480px;
        max-height: 480px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        border: 1px solid rgba(0,0,0,0.5);
        padding: 2rem;
    }
    .intro p{
        font-size: 2rem;
        line-height: 1.2;
    }
    .intro p strong{
        color: var(--foreground-dark-1);
    }

/* @media only screen and (max-width: 480px) {
    .intro h1{
        font-size: 1.5rem;
    }
} */

    #header-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }

    @keyframes rotation {
       0%{
           transform: rotate(0deg) translate(50%,-50%);
           transform-origin: 100% 0%;
       }
        100%{
            transform: rotate(360deg) translate(50%,-50%);
            transform-origin: 100% 0%;
        }
    }
    @keyframes scroll-down {
        0%{
            transform: translate(0,0);
            opacity: 0.25;
        }
        20%{
            transform: translate(0,2rem);
            opacity: 1;
        }
        80%{
            transform: translate(0,2rem);
            opacity: 1;
        }
        100%{
            transform: translate(0,0);
            opacity: 0.25;
        }
    }

    .circular path { fill: none;}
    .circular {
        animation: rotation infinite 6.4s reverse;
        width: 50vw;
        height: 50vw;
        max-width: 384px;
        max-height: 384px;
        /*margin: 3em auto 0;*/
        position: absolute;
        right: 0;
        top:  0;
    }
    .circular svg { display: block; overflow: visible; }

    #scroll-down-icon{
        animation: scroll-down infinite 4s;
    }
</style>