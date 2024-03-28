<template>
  <NuxtLayout  :class="[language === 'fa-IR' ? 'rtlDirection' : 'ltrDirection']">
    <NuxtPage
      :class="[language === 'fa-IR' ? 'rtlDirection' : 'ltrDirection']"
    ></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
// تغییر زبان

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const language = computed({
  get: () => locale.value,
});
</script>
