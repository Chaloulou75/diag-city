<script setup></script>
<template>
  <header
    class="z-50 flex flex-wrap w-full py-4 text-sm bg-white/90 sm:flex-nowrap sm:justify-start sm:py-2 md:fixed"
  >
    <nav
      class="w-full max-w-full px-4 mx-auto md:px-6 lg:px-8"
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
              class="inline-flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hs-collapse-toggle gap-x-2 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              data-hs-collapse="#navbar-hover-event"
              aria-controls="navbar-hover-event"
              aria-label="Toggle navigation"
            >
              <svg
                class="flex-shrink-0 size-4 hs-collapse-open:hidden"
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
                class="flex-shrink-0 hidden size-4 hs-collapse-open:block"
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
          class="hidden overflow-hidden transition-all duration-300 hs-collapse grow basis-full sm:block"
        >
          <div
            class="flex flex-col gap-5 mt-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
          >
            <NuxtLink
              to="/diagnostic/diagnostic-dtg"
              class="flex items-center space-x-2 font-medium text-blue-500 hover:text-blue-700"
              aria-current="page"
            >
              <NuxtImg
                src="/dtg.png"
                alt="dtg"
                height="40"
              />Copropriété</NuxtLink
            >

            <div
              class="hs-dropdown [--adaptive:none] [--strategy:static] sm:[--strategy:absolute] sm:[--trigger:hover]"
            >
              <button
                type="button"
                class="flex items-center w-full font-medium text-gray-600 hover:text-gray-400 sm:py-4"
              >
                Nos Diagnostics
                <svg
                  class="flex-shrink-0 ms-2 size-4"
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
                    <h3 class="px-3 py-2 text-lg font-bold">Pour la vente:</h3>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-amiante"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante
                      <NuxtImg src="/amiante.png" alt="amiante" class="h-5" />
                    </NuxtLink>

                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-loi-carrez"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Loi Carrez
                      <NuxtImg src="/boutin.png" alt="boutin" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-termites"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Termites
                      <NuxtImg src="/termite.png" alt="termite" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-dpe"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic DPE
                      <NuxtImg src="/dpe.png" alt="dpe" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-electrique"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Electrique
                      <NuxtImg
                        src="/electricite.png"
                        alt="electricite"
                        class="h-5"
                      />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-gaz"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Gaz
                      <NuxtImg src="/gaz.png" alt="gaz" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-plomb"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Plomb (CREP)
                      <NuxtImg src="/plomb.png" alt="plomb" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-vente/diagnostic-erp"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic E.R.P
                      <NuxtImg
                        src="/assainissement.png"
                        alt="assainissement"
                        class="h-5"
                      />
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <h3 class="px-3 py-2 text-lg font-bold">
                      Pour la location:
                    </h3>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-amiante"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante (DAPP)
                      <NuxtImg src="/amiante.png" alt="amiante" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/loi-boutin"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Loi Boutin
                      <NuxtImg src="/boutin.png" alt="boutin" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-dpe"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic DPE
                      <NuxtImg src="/dpe.png" alt="dpe" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-electrique"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Electrique
                      <NuxtImg
                        src="/electricite.png"
                        alt="electricite"
                        class="h-5"
                      />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-gaz"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Gaz
                      <NuxtImg src="/gaz.png" alt="gaz" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-plomb"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Plomb (CREP)
                      <NuxtImg src="/plomb.png" alt="plomb" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-la-location/diagnostic-erp"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic E.R.P
                      <NuxtImg
                        src="/assainissement.png"
                        alt="assainissement"
                        class="h-5"
                      />
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <h3 class="px-3 py-2 text-lg font-bold">
                      Pour vos travaux:
                    </h3>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-amiante-avant-travaux"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le DPE avant Travaux
                      <NuxtImg src="/dpe.png" alt="dpe" class="h-5" />
                    </NuxtLink>
                    <NuxtLink
                      to="/diagnostic/pour-vos-travaux/diagnostic-amiante-avant-travaux"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic Amiante avant Travaux/Démolition
                      <NuxtImg src="/amiante.png" alt="amiante" class="h-5" />
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
                      <NuxtImg src="/termite.png" alt="termite" class="h-5" />
                    </NuxtLink>
                    <h3 class="px-3 py-2 text-lg font-bold">Autres:</h3>
                    <NuxtLink
                      to="/diagnostic/diagnostic-dtg"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Le Diagnostic D.T.G
                      <NuxtImg src="/dtg.png" alt="dtg" class="h-7" />
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
