import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultText = "Vue.js is cool.";
const textStorageKey = "stored-text";
const storedText = localStorage.getItem(textStorageKey);

export default new Vuex.Store({
  state: {
    text: storedText || defaultText
  },
  mutations: {
    setText(state, text: string) {
      state.text = text;
      localStorage.setItem(textStorageKey, text);
    }
  }
});
