<script setup>
import {
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div>
    <PageHeader :title="'Contact'" :image="'bg-diagcity-blue bg-opacity-70'" />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <div class="my-8 md:my-16">
        <h3
          class="my-6 text-2xl font-semibold text-center text-diagcity-violet md:mt-8 md:text-3xl"
        >
          Nous contacter
        </h3>
        <div
          class="flex flex-col items-center justify-center w-full h-full mx-auto space-y-2"
        >
          <h3 class="mb-2 text-xl font-semibold text-diagcity-gray md:text-2xl">
            Diag City - Diagnostics
          </h3>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block w-6 h-6"><AtSymbolIcon /></span>
            <a href="mailto:contact@diag-city.fr"> contact@diag-city.fr</a>
          </p>

          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block w-6 h-6"><PhoneIcon /></span
            ><a href="tel:+33183620607"> 01.83.62.06.07</a>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block w-6 h-6"><PhoneIcon /></span
            ><a href="tel:+33698203451"> 06.98.20.34.51</a>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block w-6 h-6"><ClockIcon /></span>
            <span>Lundi au Vendredi de 9h à 18h</span>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray md:text-xl"
          >
            <span class="inline-block w-6 h-6"><MapPinIcon /></span>
            <span>2 Rue Raphaël, 92170 Vanves.</span>
          </p>
        </div>
      </div>
      <div class="mt-8">
        <h3
          class="my-6 text-2xl font-semibold text-center text-diagcity-violet md:mt-8 md:text-3xl"
        >
          Nous trouver
        </h3>
        <div class="w-full max-w-screen-lg mx-auto my-4 aspect-w-16 aspect-h-9">
          <LazyGoogleMap />
        </div>
      </div>
      <div class="mt-8"><GoogleReviews /></div>
    </div>
  </div>
</template>
