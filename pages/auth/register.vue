<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      @submit.prevent="register()"
      class="indexStyle-form h-3/4 w-5/12 flex flex-col items-center justify-between rounded-md p-5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg"
    >
      <nuxtLink class="w-11/12 text-start" to="/">
        <i class="icon-arrow-left2"></i>
      </nuxtLink>
      <h4 class="">register</h4>

      <div class="mt-10 flex border-b">
        <label class="text-nowrap" for="firstName">first name:</label>
        <input
          v-model.lazy.trim="formData.firstName"
          class="border-none outline-none bg-transparent focus:ring-0"
          type="text"
          id="firstName"
        />
      </div>

      <small v-if="v$.firstName.$error" class="text-xs mt-2">{{
        v$.firstName.$errors[0].$message
      }}</small>

      <div class="mt-10 flex border-b">
        <label class="text-nowrap" for="lastName">last name:</label>
        <input
          v-model.lazy.trim="formData.lastName"
          class="border-none outline-none bg-transparent focus:ring-0"
          type="text"
          id="lastName"
        />
      </div>

      <small v-if="v$.lastName.$error" class="text-xs mt-2">{{
        v$.lastName.$errors[0].$message
      }}</small>

      <div class="mt-6 flex border-b">
        <label class="" for="mobile">mobile:</label>
        <input
          v-model.lazy.trim="formData.mobile"
          class="border-none outline-none bg-transparent focus:ring-0"
          type="tel"
          id="mobile"
        />
      </div>

      <small v-if="v$.mobile.$error" class="text-xs mt-2">{{
        v$.mobile.$errors[0].$message
      }}</small>

      <div class="mt-6 flex justify-between items-center border-b">
        <label class="" for="password">password:</label>
        <input
          v-model.lazy.trim="formData.password"
          class="border-none outline-none bg-transparent focus:ring-0"
          :type="inputType"
          id="password"
        />
        <i
          @click="toggleHide = !toggleHide"
          :class="[toggleHide ? 'icon-eye' : 'icon-eye-blocked']"
        ></i>
      </div>

      <small v-if="v$.password.$error" class="text-xs mt-2">{{
        v$.password.$errors[0].$message
      }}</small>

      <button
        :class="{ 'cursor-not-allowed': loading }"
        class="py-2 rounded-md mt-10"
        type="submit"
        :disabled="isDisabled"
      >
        <span v-if="!loading">send</span>
        <span v-else>Loading . . . </span>
      </button>

      <span class="flex items-center justify-between mt-10">
        <NuxtLink to="/auth/login">login </NuxtLink>
      </span>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, integer, helpers } from "@vuelidate/validators";
// import axios from "axios";

definePageMeta({
  layout: false,
});

const toggleHide = ref(false);
const inputType = computed(() => (toggleHide.value ? "text" : "password"));

const loading = ref(false);
const isDisabled = ref(false);

watch(loading, (newValue) => {
  isDisabled.value = newValue;
});

const formData = reactive({
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
});

const validations = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage("first name is required", required),
      validCharacters: helpers.withMessage(
        "enter English characters",
        (value) => /^[a-zA-Z]+$/.test(value)
      ),
    },
    lastName: {
      required: helpers.withMessage("last name is required", required),
      validCharacters: helpers.withMessage(
        "enter English characters",
        (value) => /^[a-zA-Z]+$/.test(value)
      ),
    },
    mobile: {
      required: helpers.withMessage("mobile number is required", required),
      integer: helpers.withMessage("please enter a numbervb", integer),
      validMobile: helpers.withMessage("enter the correct format", (value) =>
        /^09\d{9}$/.test(value)
      ),
      minLength: helpers.withMessage(
        "the number of character is less than 11",
        minLength(11)
      ),
    },
    password: {
      required: helpers.withMessage("password is required", required),
      minLength: helpers.withMessage(
        "the number of character is less than 6",
        minLength(6)
      ),
      validCharechters: helpers.withMessage(
        "enter English characters",
        (value) => /^[a-zA-Z0-9!@#$%^&*()]+$/.test(value)
      ),
    },
  };
});
const v$ = useVuelidate(validations, formData);

function register() {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    console.log("formData :", formData);
    loading.value = false;
    //FIXME
    // useData.isShowLoginOtp = true;
    // console.log("pinia:", useData.isShowLoginOtp);
    // navigateTo("/auth/loginOtp");
  }
}
</script>

<style></style>
