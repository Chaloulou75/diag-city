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
    <PageHeader :title="'Contact'" :image="'bg-diagcity-blue'" />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <div class="my-8 md:my-16">
        <h3
          class="my-6 text-center text-2xl font-semibold text-diagcity-violet md:mt-8 md:text-3xl"
        >
          Nous contacter
        </h3>
        <div
          class="mx-auto flex h-full w-full flex-col items-center justify-center space-y-2"
        >
          <h3 class="mb-2 text-xl font-semibold text-diagcity-gray md:text-2xl">
            Diag City - Diagnostics
          </h3>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block h-6 w-6"><AtSymbolIcon /></span>
            <a href="mailto:secretariat@diagcity.fr">
              secretariat@diagcity.fr</a
            >
          </p>

          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block h-6 w-6"><PhoneIcon /></span
            ><a href="tel:+33183620607"> 01.83.62.06.07</a>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block h-6 w-6"><PhoneIcon /></span
            ><a href="tel:+33698203451"> 06.98.20.34.51</a>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray hover:text-diagcity-blue md:text-xl"
          >
            <span class="inline-block h-6 w-6"><ClockIcon /></span>
            <span>Lundi au Vendredi de 9h à 18h</span>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray md:text-xl"
          >
            <span class="inline-block h-6 w-6"><MapPinIcon /></span>
            <span>2 Rue Raphaël, 92170 Vanves.</span>
          </p>
        </div>
      </div>
      <div class="mt-8">
        <h3
          class="my-6 text-center text-2xl font-semibold text-diagcity-violet md:mt-8 md:text-3xl"
        >
          Nous trouver
        </h3>
        <div class="aspect-w-16 aspect-h-9 mx-auto my-4 w-full max-w-screen-lg">
          <LazyGoogleMap />
        </div>
      </div>
      <div class="mt-8 px-2"><GoogleReviews /></div>
    </div>
  </div>
</template>
