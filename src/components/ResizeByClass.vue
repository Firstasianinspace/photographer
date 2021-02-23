<template>
  <div class="wrapper message">
    <textarea class="textarea js-autoresize" placeholder="Photoshoot details"
    v-model="message.text"
    :maxlength="message.maxlength"
    rows="1">
    
    </textarea>
    <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
  </div>
</template>

<script>
import { setResizeListeners } from "./auto-resize.js";

export default {
  name: "ResizeByClass",
  data () {
    return {
      message: {
        text: ``,
        maxlength: 255
      },
    }
  },
  mounted() {
    setResizeListeners(this.$el, ".js-autoresize");
  }
};
</script>
<style lang="scss">
.message {
  grid-column: 1 / 3;
  grid-row: 2 / 2;
  line-height: 100%;
  position: relative;
  padding-top: 3vh;
  & textarea {
    min-width: 100%;
    font-size: 23px;
    color: #fff;
    background: none;
    border: none;
    padding: 12px 0;
    border-bottom: 2px solid white;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      font-size: 23px;
      padding: 7px 0;
      padding-left: 10px;
      color: #A0A0A0;
    }
  }
}
.counter {
  position: absolute;
  right: 0;
  top: 25%;
}
textarea,
input[type] {
  padding: 12px 0;
}
</style>