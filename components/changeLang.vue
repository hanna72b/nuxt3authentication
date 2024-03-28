<template>
  <form v-motion-pop-visible class="ms-3">
    <select
      style="
        width: 27px;
        height: 27px;
        padding-top: 5px;
        font-weight: 500;
        font-weight: 500;
        font-size: 0.6rem;
      "
      class="border-0 px-0 cursor-pointer leading-4 2xl:leading-[3rem] text-xs text-black rounded-full text-center flex items-center justify-center focus:ring-0 focus:border-0"
      v-model="language"
    >
      <option
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        :value="typeof item === 'object' ? item.code : item"
        class="cursor-pointer text-black"
      >
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
  </form>
</template>

<script setup>
// تغییر زبان
import { useI18n } from "vue-i18n";
const { locale, locales, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style scoped>
select {
  background-image: none;
  padding-right: 0rem !important;
}
</style>
