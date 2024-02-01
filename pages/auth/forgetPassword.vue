<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      @submit.prevent="sendLink()"
      class="indexStyle-form h-3/4 w-5/12 flex flex-col items-center justify-between rounded-md p-5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg"
    >
      <nuxtLink class="w-11/12 text-start" to="/">
        <i class="icon-arrow-left2"></i>
      </nuxtLink>
      <h4 class="">forget password</h4>

      <div class="mt-10 flex border-b">
        <label class="">mobile:</label>
        <span class="text-center">09923244836</span>
      </div>

      <button
        :class="{ 'cursor-not-allowed': loading }"
        class="py-2 rounded-md mt-10 mb-5"
        type="submit"
        :disabled="isDisabled"
      >
        <span v-if="!loading">send link</span>
        <span v-else>Loading . . . </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
// import axios from "axios";

definePageMeta({
  layout: false,
});

const loading = ref(false);
const isDisabled = ref(false);

watch(loading, (newValue) => {
  isDisabled.value = newValue;
});

function sendLink() {
  loading.value = true;
  console.log("link sent !");
  loading.value = false;
  setTimeout(() => {
    navigateTo("/auth/restorePassword");
  }, 500);
}
</script>
