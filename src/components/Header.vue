<template>
    <div class="header">
        <div class="switchImg">
            <div class="circular">
                <svg viewBox="0 0 100 100">
                    <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
                    <text>
                        <textPath xlink:href="#circle" style="font-size: 0.63rem" v-if="language=='ZH'">一 个 结 合 数 字 媒 体 技 术 打 造 品 牌、产 品 和 体 验 的 独 立 创 意 设 计 师</textPath>
                        <textPath xlink:href="#circle" style="font-size: 0.49rem" v-else-if="language=='EN'">A CREATIVE DESIGNER BUILDING BRANDING, PRODUCT AND EXPERIENCE IN DIGITAL WAY</textPath>
                    </text>
                </svg>
            </div>
        </div>
        <span class="headline" v-if="language=='ZH'">滚动浏览</span>
        <span class="headline" v-else-if="language=='EN'">Scroll to view</span>
        <canvas id="header-canvas"></canvas>
<!--        <h3 v-if="language=='ZH'" class="clickToViewWorks interactive-s" @click="toggle">查看作品</h3>-->
<!--        <h3 v-else-if="language=='EN'" class="clickToViewWorks interactive-s" @click="toggle">View My Works</h3>-->
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
                window.addEventListener('resize',()=>{
                    this.onResize();
                });
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
                if (!this.offset.equals(new THREE.Vector2(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2))) {
                    this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2)
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
                                    },10);
                                }
                            })
                        }
                    });
                }
            },
            update(){
                if(this.isFramesNeedUpdate){
                    requestAnimationFrame(this.update);
                    this.renderer.render(this.scene,this.camera);
                    if(this.mesh){
                        if(this.mesh.material.uniforms.u_time.value>10000){
                            this.mesh.material.uniforms.u_time.value = 0;
                        }
                        this.mesh.material.uniforms.u_time.value += 0.03;
                    }
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
            },
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        z-index: 1;
        background-color: var(--white);
        overflow: hidden;
    }

    .switchImg {
        position: absolute;
        width: 60vw;
        height:60vw;
        left: 10vw;
        bottom: 40vw;
        transform: translate(0%,0%);
        z-index: 1;
        pointer-events: none;
    }
    .headline {
        position: absolute;
        font-size: 1rem;
        left: 50%;
        bottom: 2rem;
        transform: translate(-50%,0%);
        max-width: 40rem;
        padding: 1rem;
        width: 80%;
        box-sizing: content-box;
        text-align: center;
        mix-blend-mode: difference;
        color: var(--white);
        pointer-events: none;
    }
    #header-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }
    @keyframes rotation {
       0%{
           transform: rotate(0deg);
       }
        100%{
            transform: rotate(360deg);
        }
    }
    .circular path { fill: none;}
    .circular {
        animation: rotation infinite 6.4s reverse;
        width: 40vw;
        height: 40vw;
        /*margin: 3em auto 0;*/
        position: absolute;
        right: -20vw;
        top: -20vw;
    }
    .circular svg { display: block; overflow: visible; }
</style>