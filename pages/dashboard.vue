<template>
  <div class="w-full h-full flex items-center justify-center">
    <h3 class="dark:text-white">dashboard page</h3>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
