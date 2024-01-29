<template>
  <div
    class="defaultStyle__main-indexStyle scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg w-full h-full flex flex-col items-center justify-center"
  >
    <p class="text-xs">welcome to my home page</p>

    <div
      class="defaultStyle__main-indexStyle-buttons mt-8 flex items-center justify-center gap-5"
    >
      <nuxt-link to="/auth/login"> login</nuxt-link>
      <nuxt-link to="/auth/register"> register</nuxt-link>
    </div>

    <div
      class="defaultStyle__main-indexStyle-card flex flex-col-reverse md:flex-row  items-center justify-between mt-16 p-1"
    >
      <div
        class="defaultStyle__main-indexStyle-card-text h-full flex flex-col justify-between"
      >
       
        <p>
          <h3 class="">Frontend Developer</h3>
          hanna barbad
        </p>

        <NuxtLink class="text-xs font-bold flex flex-col items-center md:flex-row" to="tel:+989923244836">
          <span><i class="icon-phone  "></i> Contact Me:</span> &nbsp; 09923244836
        </NuxtLink>
      </div>

      <div class="defaultStyle__main-indexStyle-card-img flex md:flex-row flex-col-reverse">
        <div class="flex flex-row md:flex-col items-center justify-center gap-1">
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

          <nuxt-link to="/https://wa.me/989179414713/?text="
            ><i class="icon-whatsapp text-[#25aa32]"></i
          ></nuxt-link>
        </div>
        <img class="rounded-full" src="@/assets/images/b.jpg" alt="developer" />
      </div>


    </div>

    <p class="text-sm mt-10">I love creating beautiful and awesome sites</p>


  </div>
</template>

<script setup></script>
