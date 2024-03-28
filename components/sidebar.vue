<template>
  <div
    v-motion-slide-visible-bottom
    v-if="usePinia.showSidebar"
    class="defaultStyle__sidebar text-white absolute right-0 z-[1000] flex flex-col items-start p-5 gap-4 shadow w-9/12 h-full md:hidden"
  >
    <button
      class="w-full text-end text-white"
      @click="usePinia.showSidebar = false"
    >
      <i class="icon-cross"></i>
    </button>

    <ul class="flex flex-col gap-5 mt-4">
      <li @click="usePinia.closeSidebar()">
        <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
      </li>
      <li @click="usePinia.closeSidebar()">
        <nuxt-link to="/dashboard">{{ $t("dashboard") }}</nuxt-link>
      </li>
      <li @click="usePinia.closeSidebar()"> 
        <nuxt-link to="/auth/login">{{ $t("login") }}</nuxt-link>
      </li>
      <li @click="usePinia.closeSidebar()">
        <nuxt-link to="/auth/register">{{ $t("register") }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStorPinia } from "~/store/index";
const usePinia = useStorPinia();
</script>
