<script setup></script>
<template>
  <div
    class="relative flex h-[30rem] flex-col items-center justify-between bg-gray-900 bg-opacity-90 bg-bagatelle bg-cover bg-center bg-no-repeat md:h-screen md:max-h-screen md:min-h-screen md:flex-row md:justify-evenly"
  >
    <div
      class="flex flex-col items-center justify-center px-4 mx-auto basis-full md:mt-auto md:basis-1/2 md:px-8 md:pb-16 md:pt-8"
    >
      <div
        class="block text-5xl font-black tracking-wide text-center text-white md:text-left md:text-7xl"
      >
        <span
          class="text-transparent bg-gradient-to-b from-black to-diagcity-blue bg-clip-text md:bg-gradient-to-r md:from-white/90 md:to-white"
          >Pour votre Copropriété</span
        >
      </div>
      <!-- <div class="mt-6 md:mt-8 md:self-start">
        <NuxtLink
          to="/diagnostic/diagnostic-dtg"
          class="px-4 py-3 text-xs font-semibold tracking-wide text-white rounded-md shadow-sm bg-diagcity-blue hover:bg-diagcity-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diagcity-blue md:text-sm"
        >
          En savoir plus
        </NuxtLink>
      </div> -->
    </div>
    <!-- mobile -->
    <div
      class="grid h-full grid-cols-2 gap-4 px-4 py-4 place-content-end place-items-stretch md:hidden"
    >
      <CardDiagComponent :title="'D.T.G'" :url="'/diagnostic/diagnostic-dtg'" />
      <!-- :logo="'/dtg.png'" -->
      <CardDiagComponent
        :title="'D.T.A'"
        :url="'/diagnostic/diagnostic-amiante'"
      />
      <CardDiagComponent
        :title="'D.P.E'"
        :url="'/diagnostic/pour-la-vente/diagnostic-dpe'"
      />
      <CardDiagComponent :title="'P.P.P.T'" :url="'/diagnostic/pppt'" />
    </div>
    <!-- desktop -->
    <div
      class="hidden h-full py-4 place-content-end place-items-stretch md:grid md:grid-cols-2 md:gap-8 md:px-8 md:py-8"
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
