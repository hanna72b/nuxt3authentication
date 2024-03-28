<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      class="indexStyle-form h-3/4 w-5/12 flex flex-col items-center justify-between rounded-md p-5 overflow-scroll scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg dark:bg-[#000000b0]"
    >
      <div class="flex items-center justify-between">
        <a
          :class="[
            language === 'fa-IR' ? 'rotate-180' : '',
            language === 'fa-IR' ? 'text-end' : '',
          ]"
          class="w-11/12"
          href="/"
        >
          <i class="icon-arrow-left2 dark:text-white"></i>
        </a>

        <!-- <ChangeLang /> -->
        <lightDark />
      </div>
      <h4 class="">{{ $t("login") }}</h4>

      <div class="mt-10 flex items-center border-b">
        <label class="" for="mobile">{{ $t("mobile") }}:</label>
        <input
          v-model.lazy.trim="formData.mobile"
          class="dark:text-white border-none outline-none bg-transparent focus:ring-0"
          type="tel"
          id="mobile"
        />
      </div>

      <small v-if="v$.mobile.$error" class="text-xs mt-2">{{
        v$.mobile.$errors[0].$message
      }}</small>

      <div class="mt-3 flex justify-between items-center border-b">
        <label class="text-nowrap" for="password">{{ $t("password") }}:</label>
        <input
          v-model.lazy.trim="formData.password"
          class="border-none outline-none dark:text-white bg-transparent focus:ring-0"
          :type="inputType"
          id="password"
        />
        <i
          class="dark:text-white"
          @click="toggleHide = !toggleHide"
          :class="[toggleHide ? 'icon-eye' : 'icon-eye-blocked']"
        ></i>
      </div>

      <small v-if="v$.password.$error" class="text-xs mt-2">{{
        v$.password.$errors[0].$message
      }}</small>

      <button
        @click.prevent="login()"
        :class="{ 'cursor-not-allowed': loading }"
        class="py-2 rounded-md mt-10"
        type="button"
        :disabled="isDisabled"
      >
        <span v-if="!loading">{{ $t("send") }}</span>
        <span v-else>Loading . . . </span>
      </button>

      <GoogleSignInButton
        class="google-button"
        @success="handleLoginSuccess"
        @error="handleLoginError"
      ></GoogleSignInButton>

      <span class="flex items-center justify-between mt-10">
        <NuxtLink class="dark:text-white" to="/auth/forgetPassword">
          {{ $t("forgetPass") }}</NuxtLink
        >
        <NuxtLink class="dark:text-white" to="/auth/register">
          {{ $t("signup") }}
        </NuxtLink>
      </span>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, integer, helpers } from "@vuelidate/validators";
import axios from "axios";
import { GoogleSignInButton } from "vue3-google-signin";
// import axios from "axios";
import api from "@/plugins/axios";
import { useStorPinia } from "~/store/index";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const language = computed({
  get: () => locale.value,
});

const usePinia = useStorPinia();
definePageMeta({
  layout: false,
});

const handleLoginSuccess = async (response) => {
  const { credential } = response;
  let user;

  if (credential) {
    user = await axios.post("/api/google-login-post", {
      token: credential,
    });
  }

  console.log("user:", user);
  // اجازه ورود به داشبورد صادر می شود
  usePinia.permissionToDashboard = true;
  navigateTo("/dashboard");
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

const toggleHide = ref(false);
const inputType = computed(() => (toggleHide.value ? "text" : "password"));

const loading = ref(false);
const isDisabled = ref(false);

watch(loading, (newValue) => {
  isDisabled.value = newValue;
});

const formData = reactive({
  mobile: "",
  password: "",
});

const validations = computed(() => {
  return {
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

async function login() {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    console.log("formData :", formData);

    //FIXME with real data and api
    //   try {
    //   const response = await api.post(
    //     "login" , formData
    //   );
    //   const data = response.data;

    //   console.log("داده دریافت شد", data);
    // } catch (error) {
    //   console.error("داده دریافت نشد", error);
    // }

    loading.value = false;
    // اجازه ورود به داشبورد صادر می شود
    usePinia.permissionToDashboard = true;
    navigateTo("/dashboard");
  }
}
</script>

<style></style>
