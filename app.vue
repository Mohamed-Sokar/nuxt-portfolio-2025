<script setup lang="ts"></script>

<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /*filter: blur(1rem);*/
  /*filter: grayscale(1);*/
}
</style>
