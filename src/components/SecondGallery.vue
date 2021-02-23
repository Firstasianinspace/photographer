<template>
  <section class="tiles tiles-second">
    <div class="tiles-wrap">
      <div class="tiles-line second-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image1.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image2.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image3.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image4.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image5.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line second-gallery__even">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image6.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image7.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image8.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image9.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image10.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line second-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image11.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image12.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image13.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image14.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image15.jpg') + ')'}"></div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'SecondGallery',
    mounted () {
      let gl2 = this.gsap.timeline({
        scrollTrigger: {
          trigger: ".tiles-second",
          start: "top bottom",
          end: "bottom",
          scrub: 1,
        }
      })
      gl2.to(".second-gallery__odd", {
          xPercent: -3,
      }, 0)
      gl2.to(".second-gallery__even", {
          xPercent: -6,
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>