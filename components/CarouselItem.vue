<script setup>
const props = defineProps({
  title: String,
  background: String,
  colorText: String,
  url: String,
});
</script>
<template>
  <div class="relative hs-carousel-slide">
    <div
      class="flex h-[30rem] flex-col bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)]"
      :class="background"
    >
      <div class="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      <div class="w-2/3 pb-5 mt-auto ps-5 md:max-w-2xl md:pb-10 md:ps-10">
        <span class="block text-white">Diagnostics</span>
        <span class="block text-xl md:text-7xl md:font-extrabold">
          <span class="text-transparent bg-clip-text" :class="colorText">{{
            title
          }}</span>
        </span>
        <div class="mt-5">
          <NuxtLink
            :to="url"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-white border border-transparent gap-x-2 rounded-xl hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
          >
            En savoir plus
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
