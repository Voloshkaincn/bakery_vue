// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './../node_modules/vue-select/dist/vue-select.css';
import './css/bootstrap.min.css'


import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.component(VueCarousel.name, VueCarousel);

import VueRouter from 'vue-router'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'



import './css/style.css'
import Navigation from './components/Navigation'
import PageHeader from './components/PageHeader'
import Services from './pages/services'
import Product from './pages/Product'
import Cart from './pages/Cart'

import vSelect from 'vue-select';


import Login from "./pages/Login";
Vue.component('Login', Login)
Vue.component('v-select', vSelect);

Vue.component('AboutUs', AboutUs);
Vue.component('Shop', Shop);
Vue.component('Navigation', Navigation)
Vue.component('Services', Services)
Vue.component('Product', Product)
Vue.use(VueRouter)
Vue.component('PageHeader', PageHeader)
Vue.component('Cart', PageHeader)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/shop', component: Shop,
    },
    {
      path: '/shop/:id', component: Product,
    },
    {
      path: '/aboutus', component: AboutUs,

    },
    {
      path: '/login', component: Login
    },
    {
      path: '/services', component: Services
    },
    {
      path: '/cart', component: Cart,
    },
  ]
})






Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
  data: {
    products: [
      {
        id: 123,
        title: "Pepperoni Pizza",
        price: 24.99,
        discount: 5,
        image: "image1.jpg",
      },
      {
        id: 234,
        title: "Baked Pancakes",
        price: 44.89,
        discount: 3,
        image: "image1.jpg",
      },
      {
        id: 345,
        title: "Avocado",
        price: 20.0,
        image: "image1.jpg",
      },
      {
        id: 456,
        title: "Bunch of Orange",
        price: 29.99,
        image: "image1.jpg",
      },
    ],
    cart: []
  },
  mounted() {
    if (localStorage.cart) {
      this.cart = JSON.parse(localStorage.cart);
    }
  },
  watch: {
    cart(addCart) {
      localStorage.cart = JSON.stringify(addCart);
    }
  }
})