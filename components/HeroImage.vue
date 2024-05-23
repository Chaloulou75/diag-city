<script setup></script>
<template>
  <div
    class="relative flex h-[30rem] flex-col bg-gray-900 bg-opacity-90 bg-bagatelle bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)] md:flex-row"
  >
    <div
      class="flex h-full w-full flex-col pb-5 ps-5 text-center md:mt-auto md:w-2/3 md:max-w-2xl md:pb-10 md:ps-10 md:text-left"
    >
      <div
        class="mt-12 block text-4xl font-extrabold text-white md:mt-auto md:text-7xl"
      >
        <span
          class="bg-gradient-to-b from-black to-diagcity-blue bg-clip-text text-transparent md:bg-gradient-to-r md:from-white md:to-gray-50"
          >Diagnostics pour votre Copropriété</span
        >
      </div>
      <div class="mt-auto md:mt-6">
        <NuxtLink
          to="/diagnostic/diagnostic-dtg"
          class="rounded-md bg-diagcity-blue px-3.5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-diagcity-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diagcity-blue"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </div>
    <div
      class="hidden h-full grid-cols-1 place-content-center place-items-stretch gap-4 md:mt-10 md:grid md:grid-cols-2 md:gap-8"
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
