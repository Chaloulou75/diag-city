<script setup></script>
<template>
  <div>
    <PageHeader
      :title="'Qui sommes nous?'"
      :image="'bg-gradient-to-r from-blue-500 to-diagcity-blue bg-opacity-20'"
    />
    <div class="hidden px-4">
      <div>
        <figure class="p-8 rounded-xl bg-slate-100 md:flex md:p-0">
          <NuxtImg
            class="object-cover w-24 h-24 mx-auto rounded-full md:h-auto md:w-48 md:rounded-none"
            src="/img/jesse.jpeg"
            alt="jesse salomas"
          />
          <div class="pt-6 mx-auto space-y-4 text-center md:p-8 md:text-left">
            <figcaption class="font-medium justify-self-start">
              <div class="text-2xl text-sky-500">Jesse Salomas</div>
              <div class="text-slate-700">Gérant, Diag City</div>
              <div class="text-slate-600">+33 6 06 64 38 68</div>
              <div class="text-slate-600">jsalomas@diagcity.fr</div>
            </figcaption>
            <ul class="list-disc list-inside">
              <li class="text-lg">
                <span class="font-semibold"
                  >5 années de gérance de DIAG CITY </span
                >: gestion commerciale et administrative, contrôle qualité et
                interlocuteur des clients. Analyse et contrôle documentaire -
                Gestion technique des projets - Gestion commerciale des projets.
              </li>
              <li class="text-lg">
                <span class="font-semibold"
                  >2 années d’expérience en qualité de co-gérant de la société
                  HESTIA DIAGNOSTIC à Toulouse.</span
                >
              </li>
              <li class="text-lg">
                <span class="font-semibold"
                  >10 années d’expérience en tant que diagnostiqueur chez SERVEX </span
                >: Diagnostics vente et location tout domaine, Repérage Amiante
                avant travaux / démolition.
              </li>
              <li class="text-lg">
                <span class="font-semibold"
                  >5 années de gérance de DIAG CITY </span
                >: gestion commerciale et administrative, contrôle qualité et
                interlocuteur des clients. Analyse et contrôle documentaire -
                Gestion technique des projets - Gestion commerciale des projets.
              </li>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>
