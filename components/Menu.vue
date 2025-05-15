<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 hover:cursor-pointer rounded dark:hover:bg-gray-800 text-2xl md:text-base;
}

.router-link-active {
  @apply bg-gray-300;
}

.dark-mode .router-link-active {
  @apply bg-gray-500;
}
</style>
