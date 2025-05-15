<template>
  <!-- <div>
    <p class="text-2xl font-semibold mb-10">Projects</p>
    <ProjectList />
  </div> -->
  <article class="prose dark:prose-invert prose-h1:text-3xl max-w-none">
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink class="link text-2xl" to="/">Go back home</NuxtLink>
      </div>
    </template>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

// useHead({
//   title: "Projects",
// });
</script>

<style scoped></style>
