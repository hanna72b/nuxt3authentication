import { defineStore } from "pinia";

export const useStorPinia = defineStore({
  id: "changeLang",
  state: () => ({
    showSidebar: false,
  }),
  getters: {},
  actions: {
    closeSidebar() {
      this.showSidebar = false;
    },
  },
});
