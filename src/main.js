import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ProjectData from './project-data';
require('./css/style.css');


Vue.config.productionTip = false;
Vue.prototype.ProjectData = ProjectData;

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app');




