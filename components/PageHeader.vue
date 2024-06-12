<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
});
</script>
<template>
  <div class="relative mb-8 w-full shadow-xl">
    <div
      class="flex h-auto flex-col bg-cover bg-center bg-no-repeat pb-6"
      :class="image"
    >
      <div class="mb-auto mt-4 px-4 text-center md:mt-8">
        <h1
          class="mb-2 text-2xl font-bold tracking-wider text-white md:text-5xl md:font-extrabold"
        >
          <span
            class="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            >{{ title }}</span
          >
        </h1>

        <h2
          v-if="subtitle"
          class="bg-white bg-clip-text text-base font-semibold tracking-wider text-transparent md:text-xl"
        >
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
