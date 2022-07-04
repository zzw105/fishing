import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      title: "",
      money: 100,
      fish: [],
      nowGround: 0,
    };
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
  },
  actions: {
    setTitle(pal: string) {
      this.title = pal;
    },
  },
});
