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
import ValueProposition from "./components/ValueProposition.vue";
import Quote from "./components/Quote.vue";

Vue.component('PageInfo', PageInfo);
Vue.component('PageContentContainer', PageContentContainer);
Vue.component('PageSection', PageSection);
Vue.component('RelatedProject', RelatedProject);
Vue.component('ValueProposition', ValueProposition);
Vue.component('Quote', Quote);

Vue.config.productionTip = false;
Vue.prototype.ProjectData = ProjectData;

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app');




