import { defineStore } from "pinia";

export const useStorPinia = defineStore({
  id: "changeLang",
  state: () => ({
    // Data for show sidebar
    showSidebar: false,
    // Data to go to the dashboard page 
    permissionToDashboard : false
  }),
  getters: {},
  actions: {
    closeSidebar() {
      this.showSidebar = false;
    },
  },
});
