<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
});
</script>
<template>
  <div class="relative mb-8 w-full">
    <div
      class="flex h-36 flex-col bg-cover bg-center bg-no-repeat md:h-44"
      :class="image"
    >
      <!-- <div class="absolute inset-0 bg-black bg-opacity-30"></div> -->
      <div class="mb-auto mt-4 text-center md:mt-8">
        <h1
          class="mb-2 text-2xl font-bold text-white md:text-5xl md:font-extrabold"
        >
          <span
            class="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          ></span>
          {{ title }}
        </h1>

        <h2
          v-if="subtitle"
          class="bg-white bg-clip-text text-xl text-transparent"
        >
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
