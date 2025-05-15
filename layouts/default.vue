<script setup lang="ts">
useSeoMeta({
  charset: "utf-8",
});
useHead({
  titleTemplate: "%s - Mohammad Sokar",
  link: [
    {
      rel: "preconnect",
      // href: "https:fonts.googlepis.com",
    },
    {
      rel: "stylesheet",
      // href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<template>
  <div class="container mx-auto max-w-4xl p-2">
    <TheHeader class="mb-10" />
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  @apply bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100;
}

/*.link {
  @apply p-1 hover:bg-gray-200 hover:cursor-pointer rounded dark:hover:bg-gray-800;
}*/

/*
.router-link-exact-active {
  @apply bg-gray-300;
}

.dark-mode .router-link-exact-active {
  @apply bg-gray-500;
}
*/
</style>
