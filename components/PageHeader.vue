<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
});
</script>
<template>
  <div class="relative w-full mb-8 shadow-xl">
    <div
      class="flex flex-col bg-center bg-no-repeat bg-cover h-36 md:h-44"
      :class="image"
    >
      <div class="px-4 mt-4 mb-auto text-center md:mt-8">
        <h1
          class="mb-2 text-2xl font-bold tracking-wider text-white md:text-5xl md:font-extrabold"
        >
          <span
            class="text-transparent bg-gradient-to-r from-white to-gray-200 bg-clip-text"
            >{{ title }}</span
          >
        </h1>

        <h2
          v-if="subtitle"
          class="text-base font-semibold tracking-wider text-transparent bg-white bg-clip-text md:text-xl"
        >
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
