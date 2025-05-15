<script setup>
const route = useRoute();
defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
</script>

<template>
  <BlogPosts v-slot="slotProps" :limit="limit">
    <div v-for="post in slotProps.posts" :key="post.id">
      <NuxtLink :to="post.path"> {{ post.title }} </NuxtLink>
    </div>
  </BlogPosts>
</template>

<style></style>
