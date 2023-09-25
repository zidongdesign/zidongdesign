<template>
    <div id="cursor-mask">
    </div>
</template>

<script>
    import P5 from 'p5';
    import {gsap} from 'gsap'

    export default {
        name: "MyCursor",
        data(){
            return{
                isHover : false,
                isLargeTarget : false,
                hoveringObject: null,
                p5:null,
            }
        },
        computed:{
            isMobile : function () {
                return window.matchMedia('(max-width: 767px)').matches
            }
        },
        mounted(){
            window.addEventListener('resize',()=>{
                if(!this.isMobile) {
                    this.initMouse();
                }
            });
            if(!this.isMobile) {
                this.initMouse();
            }
        },
        methods:{
            blindListener:function () {
                window.addEventListener("mouseover", (e)=>{
                    e = e || window.event;
                    if(e.target.classList.contains('interactive-l')){
                        this.hoveringObject = e.target;
                        this.isHover = true;
                        this.isLargeTarget = true;
                    } else if(e.target.classList.contains('interactive-s')){
                        this.hoveringObject = e.target;
                        this.isHover = true;
                        this.isLargeTarget = false;
                    }
                });
                window.addEventListener("mouseout", (e)=>{
                    e = e || window.event;
                    if(e.target.classList.contains('interactive-l')){
                        this.hoveringObject = null;
                        this.isHover = false;
                        this.isLargeTarget = false;
                    } else if(e.target.classList.contains('interactive-s')){
                        this.hoveringObject = null;
                        this.isHover = false;
                        this.isLargeTarget = false;
                    }
                });
                window.addEventListener("click", (e)=>{
                    e = e || window.event;
                    if(e.target.classList.contains('interactive-l')){
                        this.isHover = false;
                        this.isLargeTarget = false;
                    } else if(e.target.classList.contains('interactive-s')){
                        this.isHover = false;
                        this.isLargeTarget = false;
                    }
                })
            },
            initMouse:function () {
                if(this.p5) return;
                // eslint-disable-next-line no-prototype-builtins
                const sketch = s =>{
                    let largeCursorSize = 16*2;
                    let smallCursorSize = 16;
                    let mouse = {
                        x:0,
                        y:0,
                        tSize:16,
                    };
                    let radius = 16;
                    let rotAngle = -90;
                    let accelX = 0.0;
                    let accelY = 0.0;
                    let deltaX = 0.0;
                    let deltaY = 0.0;
                    let springing = 0.01;
                    let damping = 0.8;

                    //corner nodes
                    let nodes = 64;

                    //zero fill arrays
                    let nodeStartX = [];
                    let nodeStartY = [];
                    let nodeX = [];
                    let nodeY = [];
                    let angle = [];
                    let frequency = [];
                    // soft-body dynamics
                    let organicConstant = 1.0;
                    for (let i = 0; i < nodes; i++) {
                        //initialize arrays to 0
                        nodeStartX[i] = 0;
                        nodeStartY[i] = 0;
                        nodeX[i] = 0;
                        nodeY[i] = 0;
                        angle[i] = 0;
                    }
                    // initialize frequencies for corner nodes
                    for (let i = 0; i < nodes; i++) {
                        frequency[i] = s.random(2, 5);
                    }

                    s.setup=()=> {
                        s.createCanvas(s.windowWidth,s.windowHeight);
                        s.rectMode(s.CENTER);
                        s.noStroke();
                        mouse.x = s.mouseX;
                        mouse.y = s.mouseY;
                    };
                    s.draw=()=> {
                        s.clear();

                        if(this.isHover){
                            if(!this.isLargeTarget){
                                gsap.to(mouse,0.8,{
                                    x: this.hoveringObject.getBoundingClientRect().x + this.hoveringObject.offsetWidth / 2
                                });
                                gsap.to(mouse,0.8,{
                                    y: this.hoveringObject.getBoundingClientRect().y + this.hoveringObject.offsetHeight / 2
                                });
                            }else{
                                gsap.to(mouse,0.8,{
                                    x: s.mouseX
                                });
                                gsap.to(mouse,0.8,{
                                    y: s.mouseY
                                });
                            }
                            gsap.to(mouse,0.8,{
                                tSize: largeCursorSize
                            })
                            s.stroke(255);
                            s.noFill();
                            deltaX = s.mouseX - mouse.x;
                            deltaY = s.mouseY - mouse.y;

                        }else {
                            gsap.to(mouse,0.8,{
                                tSize: smallCursorSize
                            });
                            gsap.to(mouse,0.8,{
                                x: s.mouseX
                            });
                            gsap.to(mouse,0.8,{
                                y: s.mouseY
                            });
                            s.fill(255);
                            s.noStroke();
                            deltaX = s.mouseX - mouse.x;
                            deltaY = s.mouseY - mouse.y;
                        }
                        radius += (mouse.tSize - radius) * damping;

                        for (let i = 0; i < nodes; i++) {
                            nodeStartX[i] = mouse.x + s.cos(s.radians(rotAngle)) * radius;
                            nodeStartY[i] = mouse.y + s.sin(s.radians(rotAngle)) * radius;
                            rotAngle += 360.0 / nodes;
                        }
                        // draw polygon
                        s.curveTightness(organicConstant);

                        s.beginShape();
                        for (let i = 0; i < nodes; i++) {
                            s.curveVertex(nodeX[i], nodeY[i]);
                        }
                        for (let i = 0; i < nodes - 1; i++) {
                            s.curveVertex(nodeX[i], nodeY[i]);
                        }
                        s.endShape(s.CLOSE);



                        // create springing effect
                        deltaX *= springing;
                        deltaY *= springing;
                        accelX += deltaX;
                        accelY += deltaY;

                        // // move predator's center
                        // mouse.x += accelX;
                        // mouse.y += accelY;

                        // slow down springing
                        accelX *= damping;
                        accelY *= damping;

                        // change curve tightness
                        organicConstant = 1 - ((s.abs(accelX) + s.abs(accelY)) * 0.1);

                        //move nodes
                        for (let i = 0; i < nodes; i++) {
                            nodeX[i] = nodeStartX[i] + s.sin(s.radians(angle[i])) * (accelX * 2);
                            nodeY[i] = nodeStartY[i] + s.sin(s.radians(angle[i])) * (accelY * 2);
                            angle[i] += frequency[i];
                        }
                    };
                    s.windowResized=()=>{
                        s.resizeCanvas(s.windowWidth, s.windowHeight);
                    }
                };
                this.p5 = new P5(sketch, 'cursor-mask');
                this.blindListener();
            }
        }
    }
</script>

<style scoped>
    #cursor-mask {
        width: 100vw;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 98;
        mix-blend-mode:difference
    }
    #cursor-mask #cursor {
        will-change: transform, width, height;
        width: 0;
        height: 0;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        background-color: rgba(255,255,255,0.2);
    }
    #cursor-mask #cursor img {
        width: 0;
        height: 0;
        position: relative;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
        opacity: 0;
        transition: 0.3s;
    }

    #cursor.hover {
        opacity: 1;
    }

    #cursor.hover-large img{
        width: 4rem;
        height: 4rem;
        opacity: 0.9;
    }
</style>