import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let App = Vue.extend(App);
let router = new VueRouter();
router.map({
  '/goods':{
    component:'components/goods/goods'
  }

});
router.start(App,'#app');
router.go('/goods');