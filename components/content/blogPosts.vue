<template>
  <slot :posts="posts">
    <section class="font-mono">
      <div class="column">
        <div>Date</div>
        <div>Title</div>
      </div>
      <ul class="not-prose">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink class="link column" :to="post.path">
            <div
              class="col-span-1"
              :class="{
                ' text-white dark:text-gray-900': !post.displayYear,
                'text-gray-400 dark:text-gray-500': post.displayYear,
              }"
            >
              {{ post.year }}
            </div>
            <div class="col-span-4">{{ post.title }}</div>
            <div class="col-span-2 justify-self-end text-sm">
              {{ post.meta.publishedAt }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const { data: pages } = await useAsyncData("blog-list", () => {
  const query = queryCollection("content").select(
    "path",
    "title",
    "description",
    "meta"
  );
  // .where("path", '', "/blog")
  if (props.limit) {
    query.limit(props.limit);
  }
  return query.all();
});

const posts = computed(() => {
  if (!pages.value) {
    return [];
  }

  const posts = pages.value?.filter(
    (post) => post.path.includes("/blog") && post.path !== "/blog"
  );

  const result = [];
  let lastYear = null;

  for (const post of posts) {
    let year = new Date(post.meta.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    post.displayYear = displayYear;
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  // console.log(result);

  return result;
});

// console.log(posts.value);
</script>

<style scoped>
.column {
  @apply grid grid-cols-7  py-3 px-0 items-center  border-b border-b-gray-200 dark:border-b-gray-800 text-gray-600 dark:text-gray-400 text-sm;
}
</style>
