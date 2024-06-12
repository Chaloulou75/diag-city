<script setup></script>
<template>
  <div>
    <HeroImage />
    <section
      class="my-6 w-full bg-gradient-to-br from-diagcity-violet to-diagcity-blue py-4"
    >
      <div class="my-6">
        <h2
          class="my-4 w-full text-center text-xl font-bold tracking-widest text-white md:my-8 md:text-3xl"
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
        class="my-4 w-full text-center text-xl font-bold tracking-widest text-diagcity-violet md:my-12 md:text-3xl"
      >
        Nos diagnostics:
      </h2>
      <DiagnosticsItems />
    </section>
  </div>
</template>
