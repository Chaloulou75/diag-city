<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="group fixed bottom-16 right-4 z-20 flex items-center space-x-2 md:bottom-20 md:space-x-4"
  >
    <div
      class="flex items-center justify-center rounded-full bg-diagcity-violet/85 p-4 group-hover:bg-diagcity-violet"
    >
      <a href="tel:+33698203451"
        ><span class="sr-only">Téléphone</span
        ><PhoneIcon class="h-5 w-5 text-white"
      /></a>
    </div>
  </div>
</template>
