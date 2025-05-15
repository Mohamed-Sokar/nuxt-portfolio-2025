<template>
  <div class="flex items-center space-x-2">
    <div
      v-if="showNextModeLabel"
      class="text-sm font-light text-gray-700 dark:text-gray-200"
    >
      change to {{ nextMode }}
    </div>
    <button
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
      @click="toggleMode"
      class="text-4xl md:text-xl px-2 py-1.5 rounded-sm hover:bg-gray-200 hover:dark:bg-gray-500"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const showNextModeLabel = ref(false);

const modes = ["system", "light", "dark"];
const nextModeIcons = {
  system: "🌓",
  light: "🌕",
  dark: "🌑",
};

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;

  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

const toggleMode = () => {
  colorMode.preference = nextMode.value;
};
</script>

<style scoped></style>
