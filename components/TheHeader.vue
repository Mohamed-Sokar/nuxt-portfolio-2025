<script setup lang="ts">
import ColorModeSelector from "./ColorModeSelector.vue";
</script>

<template>
  <header class="flex justify-between items-start md:items-center mt-3">
    <div class="flex items-center md:space-x-8">
      <!-- Start Logo -->
      <div>
        <NuxtLink
          to="/"
          class="hidden md:block text-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 rounded border border-dashed link p-3"
          >Mohammad Sokar</NuxtLink
        >
      </div>
      <!-- End Logo -->

      <!-- Start Menu -->
      <nav class="font-mono">
        <!-- This component will impoted automatically with NUXT.JS -->
        <Menu />
      </nav>
      <!-- End Menu -->
    </div>

    <!-- Start color mode selector -->

    <ColorModeSelector />

    <!-- End color mode selector -->

    <!-- <select
        v-model="$colorMode.preference"
        class="border border-black rounded p-1 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
        @mouseenter="showModeLabel = true"
        @mouseleave="showModeLabel = false"
      >
        <option value="system">🌓</option>
        <option value="light">🌕</option>
        <option value="dark">🌑</option>
      </select> -->
  </header>
</template>

<style scoped></style>
