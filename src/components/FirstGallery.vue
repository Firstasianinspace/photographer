<template>
  <section class="tiles tiles-rotated">
    <div class="tiles-wrap">
      <div class="tiles-line first-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image1.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image2.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image3.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image4.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image5.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line first-gallery__even">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image6.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image7.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image8.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image9.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image10.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line first-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image11.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image12.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image13.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image14.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image15.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line first-gallery__even">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image16.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image17.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image18.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image19.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image20.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line first-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image1.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image2.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image3.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image4.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image5.jpg') + ')'}"></div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'FirstGallery',
    mounted () {
      // First Gallery
      let gl1 = this.gsap.timeline({
        scrollTrigger: {
          trigger: ".tiles",
          start: "top bottom",
          end: "bottom",
          scrub: 1, 
          // markers: true, 
        }
      })
      gl1.to(".first-gallery__odd", {
        xPercent: 10,
      }, 0)
      gl1.to(".first-gallery__even", {
        xPercent: -10,
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>