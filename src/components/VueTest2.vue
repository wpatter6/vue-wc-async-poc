<template>
  <div class="container">
    <div>Change text:</div>
    <input :value="text" @input="setText">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import BaseComponent from "../BaseComponent.vue";

export default Vue.extend({
  computed: {
    ...mapState(["text"])
  },
  methods: {
    setText(e: { target: { value: string } }) {
      this.$store.commit("setText", e.target.value);
    }
  },
  extends: BaseComponent
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;

  input {
    margin-left: 10px;
  }
}
</style>