<template>
  <section class="tiles tiles-third">
    <div class="tiles-wrap">
      <div class="tiles-line column-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image1.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image2.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image3.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image4.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image5.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line column-gallery__even">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image6.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image7.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image8.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image9.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image10.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line column-gallery__odd">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image11.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image12.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image13.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image14.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image15.jpg') + ')'}"></div>
      </div>
      <div class="tiles-line column-gallery__even">
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image16.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image17.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image18.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image19.jpg') + ')'}"></div>
        <div class="tiles-img" :style="{'background-image': 'url(' + require('../assets/img/image20.jpg') + ')'}"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ThirdGallery',
    mounted () {
      // Third Gallery
      let gl3 = this.gsap.timeline({
          scrollTrigger: {
            trigger: "#tiles-third",
            start: "top bottom",
            end: "bottom",
            scrub: 1,
          }
        })
      gl3.to(".column-gallery__odd", {
          yPercent: -85,
      }, 0)
      gl3.to(".column-gallery__even", {
          yPercent: -20,
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>