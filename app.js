import Vue from 'vue';
import robobar from './src/components/RoboBar.vue';
import placeorder from './src/components/PlaceOrder.vue';
import revieworder from './src/components/ReviewOrder.vue';
import successorder from './src/components/SuccessOrder.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: placeorder },
        { path: '/PlaceOrder', component: placeorder },
        { path: '/ReviewOrder', component: revieworder },
        { path: '/SuccessOrder', component: successorder }
    ]
})

new Vue({
    router,
    el: '#app',
    components: {
        robobar
    }
});