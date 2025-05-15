<script setup lang="ts">
import type { Repository } from "~/types";

// const { status, data, error } = await useFetch<Repository[]>(
const { status, data, error } = await useFetch<Repository[]>(
  "https://api.github.com/users/Mohamed-Sokar/repos"
  // "https://api.github.com/users/piotr-jura-udemy/repos"
);
const repos = computed(
  () => data.value ?? []
  // .filter((repo) => repo.description)
  // .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>

<template>
  <div class="not-prose">
    <section v-if="status !== 'success'">Loading...</section>
    <section v-else-if="error">Something went error.. Try again</section>
    <!-- <section v-else> -->
    <section v-else>
      <ul class="grid grid-cols-1 gap-4 font-mono">
        <!-- This is a dummy repo -->
        <!-- <li
          class="border border-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
        >
          <a href="#" class="text-sm" target="_blank">
            <div class="flex justify-between">
              <div class="font-semibold">Name</div>
              <div>*</div>
            </div>
            <p>Description</p>
          </a>
        </li> -->
        <li
          v-for="repository in repos"
          :key="repository.id"
          class="border border-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
        >
          <a :href="repository.html_url" target="_blank">
            <div class="flex justify-between">
              <div class="font-semibold">{{ repository.name }}</div>
              <!-- <div>{{ repository.stargazers_count }} *</div> -->
            </div>
            <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped></style>
