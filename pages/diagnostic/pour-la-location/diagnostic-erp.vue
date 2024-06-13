<template>
  <div>
    <PageHeader
      :title="'Le diagnostic E.R.P'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic d’état des risques et pollution des sols'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic d’état des risques et pollution des sols
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Tout bien immobilier loué ou vendu répondant à au moins une des trois
          conditions suivantes doit faire l’objet d’un état des risques et
          pollution des sols :
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Le bien est situé dans une commune ayant un niveau de sismicité
            supérieur à 2.
          </li>
          <li>
            Le bien est situé dans le périmètre d’un Plan de Prévention des
            Risques Naturels (PPRn), miniers (PPRm) ou technologiques (PPRt)
            prescrit ou approuvé.
          </li>
          <li>
            Le bien est situé sur un terrain répertorié comme Secteur
            d’Information sur les Sols (SIS).
          </li>
        </ul>
      </div>

      <!-- <NuxtImg
        src="/img/band-erp.jpg"
        alt="erp"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-1/2"
      /> -->

      <!-- Déroulement de la mission -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Déroulement de la mission
        </h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Le diagnostiqueur recherche les risques identifiés par les autorités
            en étudiant les plans de prévention de risques naturels, miniers et
            technologiques.
          </li>
          <li>
            Une information sera amenée quant à la sismicité ainsi qu'aux
            sinistres indemnisés par l'assurance suite à une catastrophe
            naturelle, minière ou technologique, ou l'exposition au risque du
            gaz radon.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>6 mois pour la vente</li>
          <li>6 mois pour la location</li>
        </ul>
      </div>
    </div>
  </div>
</template>
