<template>
  <div class="contact-socials">
    <div class="social-icon"
    v-for="(item, index) of socials" :key="'item_'+index"
    >
    <svg class="ic24">
      <use :xlink:href="getIcon('socials', item)"></use>
    </svg>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        socials: [
          'facebook',
          'twitter',
          'linkedin',
          'dribbble',
          'behance',
          'instagram'
        ],
      }
    },
    methods: {
      // I know it's not necessary in this case, i do it because i can
      getIcon (socials, icon) {
        return require(`@/assets/icons/${socials}.svg`)+'#'+icon
      },
    },
    mounted () {
      
    }
  }
</script>

<style lang="scss">

</style>