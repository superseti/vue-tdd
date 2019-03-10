import Vue from 'vue';
import robobar from './src/components/RoboBar.vue';
import placeorder from './src/components/PlaceOrder.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: {
        robobar,
        placeorder
    }
});