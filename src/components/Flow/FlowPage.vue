<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    url(): string {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  mounted() {
    console.log("Flow page mounted:" + this.name, this);
  }
});
</script>

<style lang="scss" scoped>
</style>