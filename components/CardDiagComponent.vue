<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  title: String,
  url: String,
  logo: String,
});
</script>
<template>
  <div
    class="flex items-center justify-center h-auto max-w-xs px-4 py-3 space-x-3 duration-200 shadow group place-self-stretch rounded-xl bg-white/85 ring ring-diagcity-blue hover:bg-white hover:ring-diagcity-violet md:py-4"
  >
    <NuxtImg
      v-if="logo"
      :src="logo"
      :alt="title"
      class="w-auto h-5 ml-2 md:h-7"
    />
    <NuxtLink v-if="url" :to="url" class="flex items-center justify-center">
      <span
        class="text-sm font-semibold text-gray-900 duration-200 group-hover:translate-x-1 group-hover:text-diagcity-blue group-hover:underline"
        >{{ title }}</span
      >
      <!-- <ArrowRightIcon
        class="w-4 h-4 duration-200 fill-slate-500 group-hover:translate-x-1 group-hover:fill-slate-600"
      /> -->
    </NuxtLink>
  </div>
</template>
