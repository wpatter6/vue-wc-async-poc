<template>
  <div class="container">
    <img src="../assets/logo.png">
    <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import BaseComponent from "../BaseComponent.vue";

export default Vue.extend({
  props: {
    propText: String
  },
  mounted() {
    if (this.propText) {
      this.setText(this.propText);
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
