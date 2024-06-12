<template>
  <div>
    <PageHeader
      :title="'Le diagnostic État parasitaire'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic État parasitaire'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 text-justify tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic État parasitaire
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          L’objectif de notre mission est de repérer la présence ou des traces
          d’agents de dégradation biologique des bois mis en œuvre dans un
          immeuble bâti. Notre diagnostiqueur recherche par un examen visuel et
          non-destructif :
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            les insectes à larves xylophages (capricornes des maisons, petites
            et grosses vrillettes, lyctus...)
          </li>
          <li>les champignons lignivores (dont la mérule)</li>
          <li>les termites souterrains</li>
        </ul>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          En France, la mérule est le champignon lignivore le plus souvent
          rencontré. Elle est capable de dégrader rapidement et considérablement
          un immeuble en s’attaquant aux planchers ou à la charpente. S’en
          suivent des travaux lourds et coûteux d’assainissement du bâti... D’où
          l’importance de détecter sa présence en amont !
        </p>
      </div>

      <NuxtImg
        src="/img/band-termites.jpg"
        alt="termites"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Ce diagnostic n’est régi par aucune obligation législative ou
          réglementaire. Cependant, il est fréquent que votre étude notariale
          l’exige si vous souhaitez vendre votre bien et s’il est situé dans une
          zone géographique réputée à risque du fait d’un taux d’humidité
          important. Dans ce cas, nous vous conseillons d’annexer à votre acte
          de vente votre rapport « État parasitaire » afin de prouver que vous
          êtes de bonne foi et qu’il n’y a pas de vice caché.
        </p>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La présence de mérule est considérée comme un vice caché : il
          appartient au vendeur d’en informer l’acquéreur !
        </p>
      </div>

      <!-- Déroulement de la mission -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Déroulement de la mission
        </h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Ces parasites vivent le plus souvent cachés, dans les bois et murs
            humides ainsi que tous les espaces humides, sombres et non-ventilés
            (derrière les plinthes, sous les parquets...). Lors de sa venue,
            notre diagnostiqueur contrôlera visuellement tous les éléments
            accessibles et susceptibles d’être infestés : plinthes, planchers,
            bâtis de portes et de fenêtres, charpentes, etc...
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>6 mois</li>
        </ul>
      </div>
    </div>
  </div>
</template>
