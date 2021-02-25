<template>
<div data-scroll>
  <div data-scroll-content ref="mainContent">
    <preloader />
    <Hero />
    <FirstGallery />
    <About />
    <SecondGallery />
    <Info />
    <ThirdGallery />
    <ContactSection />
  </div>
</div>
</template>

<script>
import preloader from './components/preloader.vue'
import Hero from './components/Hero.vue'
import FirstGallery from './components/FirstGallery.vue'
import About from './components/About.vue'
import SecondGallery from './components/SecondGallery.vue'
import Info from './components/Info.vue'
import ThirdGallery from './components/ThirdGallery.vue'
import ContactSection from './components/ContactSection.vue'
import Smooth from "@/plugins/Smooth/SmoothScroll";

export default {
  name: 'App',
  components: {
    preloader,
    Hero,
    FirstGallery,
    About,
    SecondGallery,
    Info,
    ThirdGallery,
    ContactSection
  },
  methods: {
    // setHeight() {
    //   document.body.style.height = `${this.$refs.mainContent.scrollHeight}px`;
    // }
  },
  mounted () {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log('No smooth scroll for you!')
      }else{
        // false for not mobile device
        
        setTimeout(function(){
        new Smooth();
        }, 500);
        // console.log(this.$refs.mainContent.scrollHeight);
        // this.setHeight();
      }


    
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
