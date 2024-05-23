<script setup lang="ts">
const items = [
  "/1001-vie-habitat.png",
  "/ANAXAGO.png",
  "/APICAP.png",
  "/ARCHIVESNAT.png",
  "/DOMAXIS.png",
  "/FONCIA.png",
  "/ICF.png",
  "/iugp.png",
  "/MOULIN-VERT.png",
  "/saint-simon.png",
  "/SSDH.png",
  "/ICF-SAB.png",
  "/loiselet-et-daigremont.png",
  "/pglance.png",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full md:basis-1/3 overflow-hidden items-center justify-center py-2 px-6',
      container: 'rounded-lg',
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-12',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-12',
    }"
    arrows
    class="mx-auto max-w-4xl rounded bg-white shadow-lg"
  >
    <NuxtImg :src="item" class="h-auto w-auto" draggable="false" />
  </UCarousel>
</template>
