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
    class="group flex h-auto max-w-xs items-center justify-between space-x-3 place-self-stretch rounded-xl bg-white/85 px-4 py-4 shadow ring ring-diagcity-blue duration-200 hover:bg-white hover:ring-diagcity-violet"
  >
    <NuxtImg :src="logo" :alt="title" class="h-7 w-auto" />
    <NuxtLink :to="url" class="flex items-center justify-between space-x-3">
      <span
        class="text-sm font-semibold text-gray-900 duration-200 group-hover:translate-x-1 group-hover:text-diagcity-blue group-hover:underline"
        >{{ title }}</span
      >
      <ArrowRightIcon
        class="h-4 w-4 fill-slate-500 duration-200 group-hover:translate-x-1 group-hover:fill-slate-600"
      />
    </NuxtLink>
  </div>
</template>
