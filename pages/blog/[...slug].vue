<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

// console.log("page:", page.value);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
const activeSection = ref("");

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const callback = (entries: IntersectionObserverEntry[]) => {
    // console.log(entries);
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        // console.log("activeSection:", activeSection.value);
        break;
      }
    }
  };

  const observer = new IntersectionObserver(callback, options);

  const elements = document.querySelectorAll("h2, h3");
  elements.forEach((el) => {
    observer.observe(el);
  });

  onBeforeUnmount(() => {
    // console.log("onbeforeUnmount");
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  });
});
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <template v-if="page">
      <div class="grid grid-cols-8 gap-16">
        <div
          :class="{
            'col-span-8': !page.body.toc,
            'col-span-8 md:col-span-6': page.body.toc,
          }"
        >
          <ContentRenderer :value="page" />
        </div>
        <div
          class="hidden md:block md:col-span-2 not-prose"
          v-if="page.body?.toc?.links.length"
        >
          <aside class="sticky top-10">
            <div class="font-semibold mb-2">Table of Contents</div>
            <nav>
              <TopLinks
                :links="page.body.toc.links"
                :active-id="activeSection"
              />
            </nav>
          </aside>
        </div>
      </div>
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

<style scoped></style>
