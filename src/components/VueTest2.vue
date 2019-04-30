<template>
  <div class="container">
    <div>Change text:</div>
    <input :value="text" @input="setText">
    BLAHBLAHBLAH
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
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 20px;
  background-color: lightblue;

  input {
    margin-left: 10px;
  }
}
</style>