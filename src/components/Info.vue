<template>
  <section class="info">
    <div class="text-sliding">
      <h2 class="info-title">endless acceleration toward infinity</h2>
      <h3 class="info-subtitle">the greatest barrier to your enlightenment</h3>
    </div>
    <div class="info-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem at pulvinar lobortis. Nullam dapibus porta erat volutpat varius. Etiam sed sem sed ipsum dignissim iaculis porta sit amet mauris. Maecenas posuere leo eu pharetra mattis. Mauris sodales vulputate ultricies. 
      Aliquam sollicitudin ex nec ex aliquam, 
      id vehicula risus.</p>
    </div>
    <div class="pagination">03</div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
  export default {
    name: 'Info',
    mounted () {
      // Text Sliding
      let ts = gsap.timeline({
          scrollTrigger: {
            trigger: ".text-sliding",
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "bottom", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          }
        })
      ts.to(".info-title", {
          xPercent: -3,
      }, 0)
      ts.to(".info-subtitle", {
          xPercent: 2,
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>