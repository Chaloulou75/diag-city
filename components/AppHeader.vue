<script setup></script>
<template>
  <header
    class="fixed z-50 flex w-full flex-wrap bg-white/95 py-4 text-sm sm:flex-nowrap sm:justify-start sm:py-2"
  >
    <nav
      class="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="relative sm:flex sm:items-center">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex-none" aria-label="Diag city">
            <NuxtImg src="/logo-carre-small.png" height="60"
          /></NuxtLink>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              data-hs-collapse="#navbar-hover-event"
              aria-controls="navbar-hover-event"
              aria-label="Toggle navigation"
            >
              <svg
                class="size-4 flex-shrink-0 hs-collapse-open:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hidden size-4 flex-shrink-0 hs-collapse-open:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-hover-event"
          class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div
            class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
          >
            <a class="font-medium text-blue-500" href="#" aria-current="page"
              >Copropriété</a
            >

            <div
              class="hs-dropdown [--adaptive:none] [--strategy:static] sm:[--strategy:absolute] sm:[--trigger:hover]"
            >
              <button
                type="button"
                class="flex w-full items-center font-medium text-gray-600 hover:text-gray-400 sm:py-4"
              >
                Diagnostics
                <svg
                  class="ms-2 size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                class="hs-dropdown-menu top-full z-10 hidden w-full min-w-60 rounded-lg bg-white py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute hs-dropdown-open:opacity-100 sm:start-0 sm:border sm:px-2 sm:shadow-md sm:duration-[150ms]"
              >
                <div class="sm:grid sm:grid-cols-3">
                  <div class="flex flex-col">
                    <h3 class="px-3 py-2 font-bold">Pour la vente:</h3>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-amiante"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante
                    </NuxtLink>

                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-loi-carrez"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Loi Carrez
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-termites"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Termites
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-dpe"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic DPE
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-electrique"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Electrique
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-gaz"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Gaz
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-plomb"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Plomb (CREP)
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-erp"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic E.R.P
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <h3 class="px-3 py-2 font-bold">Pour la location:</h3>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-amiante"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante (DAPP)
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-boutin"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Boutin
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-dpe"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic DPE
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-electrique"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Electrique
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-gaz"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Gaz
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-plomb"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Plomb (CREP)
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-erp"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic E.R.P
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <h3 class="px-3 py-2 font-bold">Pour vos travaux:</h3>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-amiante-avant-travaux"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le DPE avant Travaux
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-amiante-avant-travaux"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante avant Travaux/Démolition
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-amiante-avant-travaux"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      CREPP avant Travaux/Démolition
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-etat-parasitaire"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Termites ou Etat Parasitaire
                    </NuxtLink>
                    <h3 class="px-3 py-2 font-bold">Autres:</h3>
                    <NuxtLink
                      to="/diagnostic/diagnostic-dtg"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic D.T.G
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pppt"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      P.P.P.T
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/obligatoires"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Les Diagnostics Obligatoires
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/historique"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Historique du diagnostic
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/temoignages"
              class="font-medium text-gray-600 hover:text-gray-400"
              >Ils nous font confiance</NuxtLink
            >

            <NuxtLink
              to="/presentation"
              class="font-medium text-gray-600 hover:text-gray-400"
              >Qui sommes-nous?</NuxtLink
            >

            <NuxtLink
              to="/contact"
              class="font-medium text-gray-600 hover:text-gray-400"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
