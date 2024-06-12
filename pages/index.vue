<script setup></script>
<template>
  <div>
    <HeroImage />
    <section
      class="my-8 w-full bg-gradient-to-br from-diagcity-violet to-diagcity-blue py-4 md:my-16"
    >
      <div class="my-6">
        <h2
          class="mb-6 text-center font-blackops text-2xl font-bold uppercase tracking-widest text-white md:mb-10 md:text-4xl"
        >
          + de 15 ans d'expérience à votre service
        </h2>
        <h2
          class="my-4 w-full text-center text-2xl font-bold tracking-widest text-white md:my-8 md:text-4xl"
        >
          Ils nous font confiance:
        </h2>

        <ReferencesCarousel />
      </div>
    </section>
    <!-- <PresentationForIndex /> -->
    <section
      class="my-6 flex w-full flex-col items-center justify-center md:my-20"
    >
      <h2
        class="my-4 w-full text-center text-2xl font-bold tracking-widest text-diagcity-violet md:my-12 md:text-4xl"
      >
        Nos diagnostics:
      </h2>
      <DiagnosticsItems />
    </section>
  </div>
</template>
