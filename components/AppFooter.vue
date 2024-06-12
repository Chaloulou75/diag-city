<script setup>
const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer class="mx-auto mt-auto w-full max-w-full px-4 py-10 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center justify-between md:flex-row">
      <div class="">
        <NuxtLink to="/" class="flex-none" aria-label="Diag city">
          <NuxtImg src="/logo-carre-small.png" alt="Diag city" height="60"
        /></NuxtLink>
      </div>
      <!-- End Col -->

      <ul class="text-center">
        <li
          class="relative inline-block pe-8 before:absolute before:end-3 before:top-1/2 before:-translate-y-1/2 before:text-gray-300 before:content-['/'] last:pe-0 last-of-type:before:hidden"
        >
          <NuxtLink
            to="/contact"
            class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800"
          >
            Contact
          </NuxtLink>
        </li>

        <li
          class="relative inline-block pe-8 before:absolute before:end-3 before:top-1/2 before:-translate-y-1/2 before:text-gray-300 before:content-['/'] last:pe-0 last-of-type:before:hidden"
        >
          <NuxtLink
            to="/mentions-legales"
            class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800"
          >
            Mentions légales
          </NuxtLink>
        </li>
      </ul>
      <!-- End Col -->

      <p class="text-xs">
        @{{ currentYear }} www.diag-city.fr Tous droits réservés.
      </p>
    </div>
    <!-- End Grid -->
  </footer>
</template>
