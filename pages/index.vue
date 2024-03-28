<template>
  <div
    class="defaultStyle__main-indexStyle scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg w-full h-full flex flex-col items-center justify-center"
  >
    <p v-motion-pop-visible class="text-xs">{{ $t("welcome") }}</p>

    <div
      class="defaultStyle__main-indexStyle-buttons mt-8 flex items-center justify-center gap-5"
    >
      <nuxt-link
        v-motion-pop-visible
        class="dark:bg-gray-400 dark:hover:bg-gray-700"
        to="/auth/login"
      >
        {{ $t("login") }}</nuxt-link
      >
      <nuxt-link
        v-motion-pop-visible
        class="dark:bg-gray-400 dark:hover:bg-gray-700"
        to="/auth/register"
      >
        {{ $t("register") }}</nuxt-link
      >
    </div>

    <div
      style="direction: ltr"
      v-motion-slide-visible-left
      class="defaultStyle__main-indexStyle-card flex flex-col-reverse md:flex-row items-center justify-between mt-16 p-1"
    >
      <div
        class="defaultStyle__main-indexStyle-card-text h-full flex flex-col justify-between"
      >
        <div>
          <h3 class="">{{ $t("frontDev") }}</h3>
          {{ $t("myName") }}
        </div>

        <NuxtLink
          class="text-xs font-bold flex flex-col items-center md:flex-row"
          to="tel:+989923244836"
        >
          <span><i class="icon-phone"></i> {{ $t("contactMe") }} :</span> &nbsp;
          09923244836
        </NuxtLink>
      </div>

      <div
        class="defaultStyle__main-indexStyle-card-img flex md:flex-row flex-col-reverse"
      >
        <div
          class="flex flex-row md:flex-col items-center justify-center gap-1"
        >
          <nuxt-link to="https://github.com/hanna72b/nuxt3authentication"
            ><i class="icon-github"></i
          ></nuxt-link>
          <nuxt-link to="/"
            ><i class="icon-linkedin text-[#1424c0]"></i
          ></nuxt-link>

          <nuxt-link to="mailto:hannah1993bb@gmail.com"
            ><i class="icon-gmail text-[#1889c7]"></i
          ></nuxt-link>

          <nuxt-link to="https://t.me/hannabarbod"
            ><i class="icon-telegram text-[#1889c7]"></i
          ></nuxt-link>

          <nuxt-link to="https://wa.me/989179414713/?text="
            ><i class="icon-whatsapp text-[#25aa32]"></i
          ></nuxt-link>
        </div>
        <img class="rounded-full" src="@/assets/images/b.jpg" alt="developer" />
      </div>
    </div>

    <p v-motion-slide-visible-right class="text-sm mt-10">
      {{ $t("bio") }}
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
