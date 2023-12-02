<template>
  <div id="app">
    <LoadingCover ref="loadingcover" :percent="totalLoadingPercent" ></LoadingCover>
    <!-- <QRCodeCover :language="this.language"></QRCodeCover> -->
    <MyCursor></MyCursor>
    <Logo></Logo>
    <Language @switchLanguage="switchLanguage" :language="this.language"></Language>
    <DetailPage ref="detailpage" @allImagesLoaded = 'detailImagesLoaded' @closeDetailPage = 'closeDetailPage' :language='this.language' :projects = 'this.projects' @changeProject="changeProject"> </DetailPage>
    <Header ref="header" @updateLoadingPercent = "updateLogoLoadingPercent" :language="this.language"></Header>
    <Showcase ref="showcase" @loadingCoverHided="loadingCoverHided" @updateLoadingPercent = "updateShowcaseLoadingPercent"  @openDetailPage = "openDetailPage" @detailPageClosed = "detailPageClosed" :language='this.language' :projects = 'this.projects' ></Showcase>
    <!-- <QuotesAboutMe></QuotesAboutMe> -->
    <Footer :language="this.language"> </Footer>
    <ShowcaseFilter ref="showcasefilter" :language="this.language" @changeFilter="changeFilter"></ShowcaseFilter>

  </div>
</template>

<script>
  import MyCursor from "@/components/MyCursor";
  import Header from "@/components/Header";
  import Showcase from "@/components/Showcase";
  import LoadingCover from '@/components/LoadingCover';
  import Language from '@/components/Language';
  import Logo from '@/components/Logo';

  import DetailPage from '@/components/DetailPage';
  import Footer from '@/components/Footer';
  import ShowcaseFilter from '@/components/ShowcaseFilter';
  // import QuotesAboutMe from '@/components/QuotesAboutMe'

  
  // import QRCodeCover from '@/components/QRCodeCover';

  import {gsap} from 'gsap'
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  import {ScrollToPlugin} from "gsap/ScrollToPlugin";

  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

  export default {
    name: 'App',
    components: {
      Showcase,
      MyCursor,
      Header,
      LoadingCover,
      Language,
      Logo,
      DetailPage,
      Footer,
      ShowcaseFilter,
      // QRCodeCover,
      // QuotesAboutMe,
    },
    data(){
      return{
        showcaseLoadingPercent:0,
        logoLoadingPercent:0,
        filterIndex:1,
        isTitleHide: true,
        language:'EN',
      }
    },
    computed:{
      totalLoadingPercent:function(){
        return (this.showcaseLoadingPercent + this.logoLoadingPercent) / 2
      },
      projects:function(){
        let i = this.filterIndex;
        let projectTemp = this.ProjectData.data().projectData.reverse().filter(function (item) {
          return item.isShowcases && item.categoryIndex == i || i == 0;
        });
        let arrLength = projectTemp.length;
        for (let i = 0; i < arrLength - 1; i++) {
          for (let j = 0; j < arrLength - 1 - i; j++) {
            if(projectTemp[j].period < projectTemp[j+1].period){
              let temp = projectTemp[j];
              projectTemp[j] = projectTemp[j+1];
              projectTemp[j+1]=temp;
            }
          }
        }
        return projectTemp;
      },
    },
    mounted(){
    },
    methods:{
      changeProject(e){
        this.$refs.showcase.closeDetailPage();
          setTimeout(()=>{
            this.$refs.showcase.openDetailPagebyID(e);
          },1600)
      },
      loadingCoverHided(){
        this.$refs.loadingcover.hide();
      },
      updateShowcaseLoadingPercent(newValue){
        this.showcaseLoadingPercent = newValue
      },
      updateLogoLoadingPercent(newValue){
        this.logoLoadingPercent = newValue
      },
      switchLanguage(){
        if(this.language ==='ZH'){
          this.language ='EN'
        }
        else if(this.language==='EN'){
          this.language ='ZH'
        }
      },
      detailImagesLoaded(){
        this.$refs.showcase.detailImagesLoaded();
      },
      closeDetailPage(){
        this.$refs.showcase.closeDetailPage();
        document.querySelector('#app').style.overflowY = 'scroll';
      },
      detailPageClosed(){
        this.$refs.detailpage.close();
        this.$refs.showcasefilter.enableFilter();
      },
      openDetailPage(e){
        this.$refs.detailpage.open(e);
        document.querySelector('#app').style.overflowY = 'hidden';
      },
      changeFilter(e){
        gsap.to('#app',{
          scrollTo:'.showcase',
          duration:0.4,
        });
        gsap.to('#showcase-canvas',{
          opacity:0,
          duration:0.4,
        });
        gsap.to('.showcase-wrapper',{
          opacity:0,
          duration:0.4,
          onComplete:()=>{
            this.$refs.showcase.isChangingFilter = true;
            this.filterIndex = e;
            this.$refs.showcase.changeFilter(e);
          }
        });
      }
    },
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-y: scroll; /* has to be scroll, not auto */
    overflow-x: hidden;
    -webkit-overflow-scrolling: auto; /* 用来控制元素在移动设备上是否使用滚动回弹效果 */
    z-index: 1;
  }
  #app::-webkit-scrollbar{
    display: none; /* Chrome Safari */
   }

</style>
