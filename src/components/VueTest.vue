<template>
  <div class="container">
    <img src="../assets/logo.png">
    <span>{{text}}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import BaseComponent from "../BaseComponent.vue";

export default Vue.extend({
  props: {
    startText: String
  },
  mounted() {
    if (this.startText) {
      this.setText(this.startText);
    }
  },
  computed: {
    ...mapState(["text"])
  },
  methods: {
    ...mapMutations(["setText"])
  },
  extends: BaseComponent
});
</script>

<style lang="scss" scoped>
.container {
  background-color: #86cc98;
  display: inline-block;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
}
</style>
