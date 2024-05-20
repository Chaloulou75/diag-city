<script setup>
const props = defineProps({
  title: String,
  background: String,
  colorText: String,
  url: String,
});
</script>
<template>
  <div class="hs-carousel-slide relative">
    <div
      class="flex h-[30rem] flex-col bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)]"
      :class="background"
    >
      <div class="absolute inset-0 bg-white bg-opacity-30"></div>
      <div class="mt-auto w-2/3 pb-5 ps-5 md:max-w-2xl md:pb-10 md:ps-10">
        <span class="block text-white">Diagnostics</span>
        <span class="block text-2xl md:text-7xl md:font-extrabold">
          <span class="bg-clip-text text-transparent" :class="colorText">{{
            title
          }}</span>
        </span>
        <div class="mt-5">
          <NuxtLink
            :to="url"
            class="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100"
          >
            En savoir plus
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
