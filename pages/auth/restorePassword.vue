<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      @submit.prevent="reStore()"
      class="indexStyle-form h-3/4 w-6/12 flex flex-col items-center justify-between rounded-md p-5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg"
    >
      <nuxtLink class="w-11/12 text-start" to="/">
        <i class="icon-arrow-left2"></i>
      </nuxtLink>
      <h4 class="">restore password</h4>

      <div class="mt-6 flex justify-between items-center">
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

      <div class="mt-3 flex justify-between items-center">
        <label class="text-nowrap" for="repeatPassword">repeat password:</label>
        <input
          v-model.lazy.trim="formData.repeatPassword"
          class="w-2/12 border-none outline-none bg-transparent focus:ring-0"
          :type="inputType"
          id="repeatPassword"
        />
        <i
          @click="toggleHide = !toggleHide"
          :class="[toggleHide ? 'icon-eye' : 'icon-eye-blocked']"
        ></i>
      </div>

      <small v-if="v$.repeatPassword.$error" class="text-xs mt-2">{{
        v$.repeatPassword.$errors[0].$message
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
        <NuxtLink class="" to="/auth/forgetPassword">forget password</NuxtLink>
        <NuxtLink to="/auth/register">sign up </NuxtLink>
      </span>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  integer,
  helpers,
  sameAs,
} from "@vuelidate/validators";
// import axios from "axios";

const toggleHide = ref(false);
const inputType = computed(() => (toggleHide.value ? "text" : "password"));

const loading = ref(false);
const isDisabled = ref(false);

watch(loading, (newValue) => {
  isDisabled.value = newValue;
});

const formData = reactive({
  password: "",
  repeatPassword: "",
});

const validations = computed(() => {
  return {
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
    repeatPassword: {
      required: helpers.withMessage("password is required", required),
      sameAsPassword: helpers.withMessage(
        "The password is not the same",
        (value) => value === formData.password,
        sameAs("password")
      ),
      $lazy: true,
    },
  };
});
const v$ = useVuelidate(validations, formData);

function reStore() {
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
