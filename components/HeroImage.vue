<script setup></script>
<template>
  <div
    class="relative flex h-[30rem] flex-col items-center justify-between bg-gray-900 bg-opacity-90 bg-bagatelle bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)] md:flex-row md:justify-evenly"
  >
    <div
      class="mx-auto flex basis-full flex-col items-center justify-center px-4 md:basis-1/2 md:px-8 md:py-8"
    >
      <div
        class="block text-center text-5xl font-black tracking-wide text-white md:text-left md:text-7xl"
      >
        <span
          class="bg-gradient-to-b from-black to-diagcity-blue bg-clip-text text-transparent md:bg-gradient-to-r md:from-gray-50 md:to-white"
          >Pour votre Copropriété</span
        >
      </div>
      <div class="mt-6 md:mt-8 md:self-start">
        <NuxtLink
          to="/diagnostic/diagnostic-dtg"
          class="rounded-md bg-diagcity-blue px-3.5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm hover:bg-diagcity-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diagcity-blue md:text-sm"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid h-full grid-cols-1 place-content-center place-items-stretch gap-4 px-4 py-4 md:grid-cols-2 md:gap-8 md:px-8"
    >
      <CardDiagComponent
        :title="'Diagnostic Technique Global'"
        :url="'/diagnostic/diagnostic-dtg'"
        :logo="'/dtg.png'"
      />
      <CardDiagComponent
        :title="'Diagnostic Technique Amiante'"
        :url="'/diagnostic/diagnostic-amiante'"
        :logo="'/amiante.png'"
      />
      <CardDiagComponent
        :title="'D.P.E'"
        :url="'/diagnostic/pour-la-vente/diagnostic-dpe'"
        :logo="'/dpe.png'"
      />
      <CardDiagComponent
        :title="'Plan Pluriannuel de travaux'"
        :url="'/diagnostic/pppt'"
        :logo="'/pppt.png'"
      />
    </div>
  </div>
</template>
