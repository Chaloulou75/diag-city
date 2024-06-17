<script setup lang="ts">
const items = [
  { src: "/1001-vie-habitat.png", alt: "1001 Vie Habitat" },
  { src: "/ANAXAGO.png", alt: "ANAXAGO" },
  { src: "/APICAP.png", alt: "APICAP" },
  { src: "/ARCHIVESNAT.png", alt: "Archives Nationales" },
  { src: "/DOMAXIS.png", alt: "DOMAXIS" },
  { src: "/FONCIA.png", alt: "FONCIA" },
  { src: "/ICF.png", alt: "ICF" },
  { src: "/iugp.png", alt: "IUGP" },
  { src: "/MOULIN-VERT.png", alt: "Moulin Vert" },
  { src: "/saint-simon.png", alt: "Saint Simon" },
  { src: "/SSDH.png", alt: "SSDH" },
  { src: "/ICF-SAB.png", alt: "ICF SAB" },
  { src: "/loiselet-et-daigremont.png", alt: "Loiselet et Daigremont" },
  { src: "/pglance.png", alt: "Pglance" },
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
      class: 'md:-left-12 left:0',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: 'md:-right-12 right:0',
    }"
    arrows
    class="max-w-full mx-auto bg-white rounded shadow-lg md:max-w-4xl"
  >
    <NuxtImg
      :src="item.src"
      :alt="item.alt"
      class="w-auto h-auto"
      draggable="false"
    />
  </UCarousel>
</template>
