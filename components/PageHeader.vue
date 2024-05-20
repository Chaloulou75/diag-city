<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
});
</script>
<template>
  <div class="relative w-full">
    <div
      class="flex h-36 flex-col bg-black bg-opacity-80 bg-cover bg-center bg-no-repeat md:h-56"
      :class="image"
    >
      <!-- <div class="absolute inset-0 bg-black "></div> -->
      <div class="mb-auto mt-4 text-center md:mt-8">
        <h1
          class="mb-2 bg-white bg-clip-text text-4xl font-bold text-transparent md:font-extrabold"
        >
          {{ title }}
        </h1>

        <p v-if="subtitle" class="bg-white bg-clip-text text-transparent">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
