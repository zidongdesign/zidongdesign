import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ProjectData from './project-data';
require('./css/style.css');

//components register
import PageInfo from "./components/PageInfo.vue";
import PageContentContainer from "./components/PageContentContainer.vue";
import PageSection from "./components/PageSection.vue";
import RelatedProject from "./components/RelatedProject.vue";

Vue.component('PageInfo', PageInfo);
Vue.component('PageContentContainer', PageContentContainer);
Vue.component('PageSection', PageSection);
Vue.component('RelatedProject', RelatedProject);




Vue.config.productionTip = false;
Vue.prototype.ProjectData = ProjectData;

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app');




