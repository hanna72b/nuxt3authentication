<template>
  <button
    v-motion-pop-visible
    class="flex items-center justify-center"
    @click.prevent="toggleMode()"
  >
    <ClientOnly>
      <i
        :class="[
          colorMode.preference === 'dark' ? 'icon-sun' : 'icon-moon-fill',
        ]"
        class="ms-3"
        style="font-size: 1.4rem"
        :style="{
          color: colorMode.preference === 'dark' ? '#FFE394' : '#644acf ',
        }"
      >
      </i>
    </ClientOnly>
  </button>
</template>

<script setup>
const colorMode = useColorMode();

function toggleMode() {
  console.log(colorMode.preference);
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>

<style scoped>
button {
  background-color: transparent !important;
  box-shadow: none;
  width: auto;
}
button:hover {
  box-shadow: none;
}
</style>
