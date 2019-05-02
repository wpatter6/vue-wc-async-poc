<template>
  <div class="flow-container">
    <div class="breadcrumbs">
      <ul>
        <li v-for="(page, index) in pages" :key="index">
          <a :href="page.url" :aria-label="page.name" @click="selectPage(page)">{{ page.name }}</a>
        </li>
      </ul>
    </div>
    <div class="flow-page">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlowPage from "./FlowPage.vue";

export default Vue.extend({
  data() {
    return {
      pages: [] as any[],
      currentTabHeight: "0px",
      currentTabOverflow: "visible",
      animationTimeout: null as number | undefined | null
    };
  },
  methods: {
    selectPage(pageToSelect: Vue | string | number) {
      const prevPage = this.pages.find(page => page.isActive);
      let selectedPage: any;
      if (typeof pageToSelect === "number") {
        selectedPage = this.pages[pageToSelect];
      } else if (typeof pageToSelect === "string") {
        selectedPage =
          this.pages.find(
            page => page.url === pageToSelect || page.name === pageToSelect
          ) || this.pages[0];
      } else {
        selectedPage = pageToSelect;
      }

      if (selectedPage) {
        this.pages.forEach(page => (page.isActive = false));
        selectedPage.isActive = true;

        /* this.$nextTick(() => {
          this.currentTabHeight = selectedPage.$el.offsetHeight + "px";
          this.currentTabOverflow = "hidden";

          if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
          }

          this.animationTimeout = setTimeout(() => {
            this.currentTabHeight = "auto";
            this.currentTabOverflow = "visible";
          }, 600);
        }); */
      }
    }
  },
  mounted() {
    this.pages = this.$slots.default || [];
    console.log("Flow router mounted", this);
    if (this.pages.length) {
      if (window.location.hash) {
        this.selectPage(window.location.hash);
      } else {
        const selectedPage = this.pages.find(page => page.selected);
        if (selectedPage) {
          this.selectPage(selectedPage);
        } else {
          this.selectPage(0);
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.flow-container {
  .breadcrumbs {
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;

      .li {
        flex: 1;

        a {
          text-decoration: none;
        }

        &.is-active {
          a {
            color: rgb(28, 179, 28);
            text-decoration: underline;
            cursor: default;
          }
        }
        &:not(.is-active) {
          &:hover {
            background-color: #627c86;
          }
        }
      }
    }
  }

  .flow-page {
    transition: height 0.5s;
    height: auto;
  }
}
</style>