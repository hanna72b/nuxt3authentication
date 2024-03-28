<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      class="indexStyle-form h-3/4 w-6/12 flex flex-col items-center justify-between rounded-md p-5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg dark:bg-[#000000b0]"
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
      <h4 class=""> {{ $t("restorePass") }}</h4>

      <div class="mt-6 flex justify-between items-center border-b">
        <label class="text-nowrap" for="password">{{ $t("password") }}:</label>
        <input
          v-model.lazy.trim="formData.password"
          class="border-none outline-none bg-transparent focus:ring-0 dark:text-white"
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

      <div class="mt-3 flex justify-between items-center border-b">
        <label class="text-nowrap" for="repeatPassword"> {{ $t("rePass") }}:</label>
        <input
          v-model.lazy.trim="formData.repeatPassword"
          class="w-2/12 border-none outline-none bg-transparent focus:ring-0 dark:text-white"
          :type="inputType"
          id="repeatPassword"
        />
        <i
          class="dark:text-white"
          @click="toggleHide = !toggleHide"
          :class="[toggleHide ? 'icon-eye' : 'icon-eye-blocked']"
        ></i>
      </div>

      <small v-if="v$.repeatPassword.$error" class="text-xs mt-2">{{
        v$.repeatPassword.$errors[0].$message
      }}</small>

      <button
        @click.prevent="reStore()"
        :class="{ 'cursor-not-allowed': loading }"
        class="py-2 rounded-md mt-10"
        type="button"
        :disabled="isDisabled"
      >
        <span v-if="!loading">{{ $t("send") }}</span>
        <span v-else>Loading . . . </span>
      </button>

      <span class="flex items-center justify-between mt-10">
        <NuxtLink class="dark:text-white" to="/auth/forgetPassword"
          >{{ $t("forgetPass") }} </NuxtLink
        >
        <NuxtLink class="dark:text-white" to="/auth/register"
          > {{ $t("signup") }}
        </NuxtLink>
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

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const language = computed({
  get: () => locale.value,
});

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

    //FIXME with real data and api
    //   try {
    //   const response = await api.post(
    //     "restorePassword" , formData
    //   );
    //   const data = response.data;

    //   console.log("داده دریافت شد", data);
    // } catch (error) {
    //   console.error("داده دریافت نشد", error);
    // }

    loading.value = false;
    navigateTo("/auth/login");
  }
}
</script>

<style></style>
