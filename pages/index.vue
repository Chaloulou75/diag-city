<script setup></script>
<template>
  <div>
    <HeroImage />
    <section class="w-full py-4 my-8 bg-diagcity-blue/70 md:my-16">
      <div class="my-6">
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
    </section>
    <!-- <PresentationForIndex /> -->
    <section
      class="flex flex-col items-center justify-center w-full my-6 md:my-20"
    >
      <h2
        class="w-full my-4 text-2xl font-bold tracking-widest text-center text-diagcity-violet md:my-12 md:text-4xl"
      >
        Nos diagnostics:
      </h2>
      <DiagnosticsItems />
    </section>
  </div>
</template>
