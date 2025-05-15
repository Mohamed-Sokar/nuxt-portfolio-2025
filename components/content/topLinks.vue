<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{
          'ml-4': level,
          'text-green-600 dark:text-green-400': activeId === link.id,
        }"
      >
        {{ link.text }}
      </NuxtLink>
      <TopLinks
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<!-- <script setup lang="ts"> -->
<script setup>
const route = useRoute();
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: "",
  },
});
// const activeSection = ref("");

// Set up IntersectionObserver
// onMounted(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           activeSection.value = entry.target.id;
//         }
//       });
//     },
//     { rootMargin: "0px 0px -70% 0px" } // Trigger earlier as the user scrolls
//   );

//   // Observe each heading
//   toc.value.forEach((link) => {
//     const el = document.getElementById(link.id);
//     if (el) observer.observe(el);
//   });
// });

// onBeforeUnmount(() => {
//   observer?.disconnect();
// });
</script>
