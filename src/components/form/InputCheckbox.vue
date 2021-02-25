<template>
  <div class="single-checkbox">
    <!-- <input type="checkbox" :name="name" :value="val" v-model="modelInput">
    <label v-if="label"  class="custom-checkbox">
      {{ label }}
    </label> -->
    <input 
      @input="check()"
      type="checkbox"
      :checked="checked"
      :id="fieldId"
      class="mr-2 hidden"
      v-bind="$attrs"
    />
  <label :for="fieldId" class="custom-checkbox">
    {{ value }}
  </label>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  emits: ["update:names"],
  props: {
    value: {
      type: String,
      required: true,
    },
    fieldId: {
      type: String,
      required: true,
    },
    names: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const checked = computed(() => props.names.includes(props.value));

    function check() {
      let updatedNames = [...props.names];
      if (this.checked) {
        updatedNames.splice(updatedNames.indexOf(props.value), 1);
      } else {
        updatedNames.push(props.value);
      }
      context.emit("update:names", updatedNames);
    }

    return {
      check,
      checked,
    };
  },
};
</script>

<style lang="scss">

</style>