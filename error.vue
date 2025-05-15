<!-- This page to customize the error Page, if you delete it, will display the default error page-->
<template>
  <NuxtLayout>
    <section class="flex flex-col justify-center gap-5">
      <h1 class="text-2xl font-bold">Oops! {{ error.statusCode }}</h1>
      <h2 class="text-gray-500 dark:text-gray-300">
        {{ error.statusMessage }}
      </h2>
      <NuxtLink
        class="p-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 max-w-[20rem]"
        to="/"
        >Go to Home</NuxtLink
      >
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<style scoped></style>
