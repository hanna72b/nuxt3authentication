<template>
  <div
    :class="[usePinia.showSidebar ? 'beBlur' : '']"
    class="defaultStyle__navbar bg-gradient-to-r from-[#dfdfdff0] to-[#1e293bba] h-[3rem] rounded-xl p-2 flex items-center justify-between mt-5"
  >
    <div class="defaultStyle__navbar-logo">
      <nuxt-link to="/">Website</nuxt-link>
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li v-if="usePinia.permissionToDashboard"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
      </ul>
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li >
          <nuxt-link to="/auth/login">Login</nuxt-link>
        </li>
        <li><nuxt-link to="/auth/register">Register</nuxt-link></li>
      </ul>
    </div>

    <div
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
