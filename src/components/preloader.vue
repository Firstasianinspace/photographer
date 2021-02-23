<template>
  <div class="preloader" ref="preloader">
    <div v-if="loadingPercent < 100">
      <div class="progress-bar">
        <div class="fill" :style="{width:loaded}"> {{loaded}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap"

  export default {
    created() {
        let perfData = window.performance.timing;
        let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
        this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
        this.doProgress();
        this.removeScrolling();
      },
      methods: {
        doProgress() {
          let step = this.loadTime / 100;
          this.interval = setInterval(() => {
            this.loadingPercent++
          }, step);
        },
        removeScrolling() {
          let body = document.body
          body.classList.add("loading")
        },
      },
      computed: {
        loaded() {
          return this.loadingPercent + '%'
        }
      },
      watch: {
        loadingPercent(val) {
          if (val >= 100) {
          let body = document.body
          body.classList.remove("loading")
          gsap.to(".preloader", {
            yPercent: -100,
            duration: 1, 
          })
            clearInterval(this.interval)
          }
        }
      },
      data() {
        return {
          loadingPercent: 0,
          loadTime: 0,
          interval: null
        }
      }
  }
</script>

<style lang="scss">
.preloader {
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8vw;
}

</style>