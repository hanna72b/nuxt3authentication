<template>
  <div
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
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/auth/login">Login</nuxt-link></li>
      <li><nuxt-link to="/auth/register">Register</nuxt-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useStorPinia } from "~/store/index";
const usePinia = useStorPinia();
</script>
