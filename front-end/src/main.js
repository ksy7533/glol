import 'reset-css';
import Vue from 'vue';
import VueMq from 'vue-mq';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1450,
    desktop: Infinity,
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
