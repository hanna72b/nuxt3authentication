<template>
  <div
    class="defaultStyle bg-[url('@/assets/images/side-login.jpg')] w-full h-screen flex flex-col justify-between items-center gap-4"
  >
    <sidebar />
    <navbar />
    <div
      @click="usePinia.closeSidebar()"
      :class="[usePinia.showSidebar ? 'beBlur' : '']"
      class="defaultStyle__main bg-gradient-to-r from-[#dfdfdff0] to-[#1e293bba] dark:from-[#000000d1] dark:to-[#000000f2] w-full h-full rounded-xl mb-5"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useStorPinia } from "~/store/index";
const usePinia = useStorPinia();
</script>
