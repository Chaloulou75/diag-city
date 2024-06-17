<script setup>
definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <HeroImage />
    <section class="w-full py-4 my-8 bg-diagcity-blue md:my-16">
      <div class="px-2 my-6">
        <h2
          class="mb-6 text-2xl font-bold tracking-widest text-center text-white uppercase md:mb-10 md:text-4xl"
        >
          + de 15 ans d'expérience à votre service
        </h2>
        <h2
          class="w-full my-4 text-2xl font-bold tracking-widest text-center text-white md:my-8 md:text-4xl"
        >
          Ils nous font confiance:
        </h2>

        <ReferencesCarousel />
      </div>
      <div class="px-2 mb-6">
        <GoogleReviews />
      </div>
    </section>
    <!-- <PresentationForIndex /> -->
    <section
      class="flex flex-col items-center justify-center w-full my-6 md:mb-12"
    >
      <h2
        class="w-full mb-4 text-2xl font-bold tracking-widest text-center text-diagcity-violet md:mb-10 md:text-4xl"
      >
        Nos diagnostics:
      </h2>
      <DiagnosticsItems />
    </section>
  </div>
</template>
