import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


// Styles
import '@/assets/scss/main.scss'


gsap.registerPlugin(ScrollTrigger);


const myGsapMixin = {
  created: function () {
    this.gsap = gsap;
  }
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

import Vuelidate from 'vuelidate'

createApp(App)
  .use(store)
  .use(Vuelidate)
  .mixin(myGsapMixin)
  .mount('#app')
