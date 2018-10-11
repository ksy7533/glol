import 'reset-css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMq from 'vue-mq';
import App from './App.vue';
import { routes } from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

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
    router,
}).$mount('#summoner_app');