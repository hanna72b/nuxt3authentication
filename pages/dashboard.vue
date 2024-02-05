<template>
  <div class="w-full h-full flex items-center justify-center">
    <h3>dashboard page</h3>
  </div>
</template>

<script setup>
  definePageMeta({
      middleware: ["auth"]
    });
    
    </script>