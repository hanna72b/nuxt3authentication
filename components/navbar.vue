<template>
  <div
    :class="[usePinia.showSidebar ? 'beBlur' : '']"
    class="defaultStyle__navbar bg-gradient-to-r from-[#dfdfdff0] to-[#1e293bba] dark:from-[#000000d1] dark:to-[#000000f2] rounded-xl p-2 flex items-center justify-between mt-5"
  >
    <div class="defaultStyle__navbar-logo flex items-center">
      <nuxt-link v-motion-pop-visible class="text-black dark:text-white" to="/"
        >{{$t("website")}}</nuxt-link
      >
      <ChangeLang />
      <lightDark />
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li>
          <nuxt-link v-motion-pop-visible to="/">{{ $t("home") }}</nuxt-link>
        </li>
        <li v-if="usePinia.permissionToDashboard">
          <nuxt-link v-motion-pop-visible to="/dashboard">Dashboard</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="defaultStyle__navbar-menuList hidden md:flex">
      <ul class="flex gap-3">
        <li>
          <nuxt-link v-motion-pop-visible to="/auth/login">{{ $t("login") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link v-motion-pop-visible to="/auth/register"
            >{{ $t("register") }}</nuxt-link
          >
        </li>
      </ul>
    </div>

    <div
      v-motion-pop-visible
      @click="usePinia.showSidebar = !usePinia.showSidebar"
      class="flex md:hidden"
    >
      <i class="icon-menu dark:text-white"></i>
    </div>
  </div>
</template>

<script setup>
import { useStorPinia } from "~/store/index";
import { useI18n } from "vue-i18n";

const usePinia = useStorPinia();

const { t } = useI18n();
</script>
