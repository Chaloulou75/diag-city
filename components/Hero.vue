<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
    class="relative"
  >
    <div
      class="hs-carousel relative h-[30rem] w-full overflow-hidden rounded bg-gray-100 md:h-[calc(100vh-106px)] md:rounded-sm"
    >
      <div
        class="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 hs-carousel-body start-0 flex-nowrap"
      >
        <!-- Item -->
        <CarouselItem
          :title="'Diagnostics pour votre Copropriété'"
          :background="'bg-bagatelle'"
          :url="'/diagnostic/diagnostic-dtg'"
          :color-text="'bg-gradient-to-r from-white to-gray-200'"
        />
        <CarouselItem
          :title="'Diagnostic DPE'"
          :background="'bg-archives'"
          :url="'/diagnostic/pour-la-vente/diagnostic-dpe'"
          :color-text="'bg-gradient-to-br from-black to-gray-900'"
        />
        <CarouselItem
          :title="'Diagnostic Amiante'"
          :background="'bg-conduit-amiante'"
          :url="'/diagnostic/pour-la-vente/diagnostic-amiante'"
          :color-text="'bg-gradient-to-br from-yellow-400 to-yellow-300'"
        />
        <!-- End Item -->
      </div>
    </div>

    <!-- Arrows -->
    <button
      type="button"
      class="absolute inset-y-0 inline-flex items-center justify-center w-12 h-full text-black hs-carousel-prev hs-carousel:disabled:opacity-50 start-0 rounded-s-2xl hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
    >
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="size-3.5 flex-shrink-0 md:size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
      </span>
      <span class="sr-only">Précédent</span>
    </button>

    <button
      type="button"
      class="absolute inset-y-0 inline-flex items-center justify-center w-12 h-full text-black hs-carousel-next hs-carousel:disabled:opacity-50 end-0 rounded-e-2xl hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
    >
      <span class="sr-only">Suivant</span>
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="size-3.5 flex-shrink-0 md:size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </span>
    </button>
    <!-- End Arrows -->
  </div>
</template>
