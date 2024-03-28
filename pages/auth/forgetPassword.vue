<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
    <form
      class="indexStyle-form h-3/4 w-5/12 flex flex-col items-center justify-between dark:bg-[#000000b0] rounded-md p-5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-lg"
    >
      <div class="flex items-center justify-between">
        <nuxt-link
          :class="[
            language === 'fa-IR' ? 'rotate-180' : '',
            language === 'fa-IR' ? 'text-end' : '',
          ]"
          class="w-11/12"
          to="/auth/login"
        >
          <i class="icon-arrow-left2 dark:text-white"></i>
        </nuxt-link>

        <!-- <ChangeLang /> -->
        <lightDark />
      </div>
      <h4 class="">{{ $t("forgetPass") }}</h4>

      <div class="mt-10 flex items-center border-b">
        <label class="">{{ $t("mobile") }}:</label>
        <input
          v-model.lazy.trim="formData.mobile"
          class="border-none outline-none bg-transparent focus:ring-0 dark:text-white"
          type="tel"
          id="mobile"
        />
      </div>

      <small v-if="v$.mobile.$error" class="text-xs">{{
        v$.mobile.$errors[0].$message
      }}</small>

      <button
        @click.prevent="sendLink()"
        :class="{ 'cursor-not-allowed': loading }"
        class="py-2 rounded-md mt-10 mb-5"
        type="button"
        :disabled="isDisabled"
      >
        <span v-if="!loading"> {{ $t("sendLink") }}</span>
        <span v-else>Loading . . . </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, integer, helpers } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const language = computed({
  get: () => locale.value,
});

definePageMeta({
  layout: false,
});

const formData = reactive({
  mobile: "",
});

const loading = ref(false);
const isDisabled = ref(false);

watch(loading, (newValue) => {
  isDisabled.value = newValue;
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
  };
});
const v$ = useVuelidate(validations, formData);

function sendLink() {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    console.log("link sent !");

    //FIXME with real data and api
    //   try {
    //   const response = await api.post(
    //     "forgetPassword" , mobile.value
    //   );
    //   const data = response.data;

    //   console.log("داده دریافت شد", data);
    // } catch (error) {
    //   console.error("داده دریافت نشد", error);
    // }

    loading.value = false;
    setTimeout(() => {
      navigateTo("/auth/restorePassword");
    }, 500);
  }
}
</script>
