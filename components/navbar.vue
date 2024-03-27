<template>
  <div
    :class="[usePinia.showSidebar ? 'beBlur' : '']"
    class="defaultStyle__navbar bg-gradient-to-r from-[#dfdfdff0] to-[#1e293bba] dark:from-[#000000d1] dark:to-[#000000f2] rounded-xl p-2 flex items-center justify-between mt-5"
  >
    <div class="defaultStyle__navbar-logo flex items-center">
      <nuxt-link v-motion-pop-visible class="dark:text-white" to="/"
        >Website</nuxt-link
      >
      <lightDark />
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li>
          <nuxt-link   v-motion-pop-visible to="/">Home</nuxt-link>
        </li>
        <li v-if="usePinia.permissionToDashboard">
          <nuxt-link   v-motion-pop-visible to="/dashboard">Dashboard</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li>
          <nuxt-link   v-motion-pop-visible to="/auth/login">Login</nuxt-link>
        </li>
        <li><nuxt-link   v-motion-pop-visible to="/auth/register">Register</nuxt-link></li>
      </ul>
    </div>

    <div
    v-motion-pop-visible
      @click="usePinia.showSidebar = !usePinia.showSidebar"
      class="flex md:hidden"
    >
      <i class="icon-menu"></i>
    </div>
  </div>
</template>

<script setup>
import { useStorPinia } from "~/store/index";
const usePinia = useStorPinia();
</script>
