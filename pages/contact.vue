<script setup>
import { PhoneIcon, AtSymbolIcon, MapPinIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div>
    <PageHeader
      :title="'Contact'"
      :image="'bg-gradient-to-r from-blue-500 to-diagcity-blue bg-opacity-70'"
    />
    <div class="container mx-auto px-4 text-justify tracking-wider md:px-12">
      <div class="my-8 md:my-16">
        <h3
          class="my-6 text-center font-lugrasimo text-2xl font-semibold text-diagcity-violet md:mt-8 md:text-3xl"
        >
          Nous trouver
        </h3>
        <div class="aspect-w-16 aspect-h-9 mx-auto my-4 w-full max-w-screen-lg">
          <LazyGoogleMap />
        </div>
      </div>
      <div class="mt-8">
        <h3
          class="my-6 text-center font-lugrasimo text-2xl font-semibold text-diagcity-violet md:mt-8 md:text-3xl"
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
            <a href="mailto:contact@diag-city.fr"> contact@diag-city.fr</a>
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
            ><a href="tel:+33606643868"> 06.06.64.38.68</a>
          </p>
          <p
            class="flex items-center space-x-3 text-lg text-diagcity-gray md:text-xl"
          >
            <span class="inline-block h-6 w-6"><MapPinIcon /></span>
            <span>2 Rue Raphaël, 92170 Vanves.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
