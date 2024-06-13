<template>
  <div>
    <PageHeader
      :title="'Le diagnostic DPE'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic énergétique'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic énergétique
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          L’Etat français a mis en place le Plan Climat qui a pour objectif de
          diviser par 4 nos émissions de CO2 à l’horizon 2050. Le Diagnostic de
          Performance Energétique est l’un des dispositifs de ce Plan Climat.
        </p>
        <p
          class="text-lg leading-relaxed text-diagcity-gray underline md:text-xl"
        >
          Vous trouverez dans le rapport:
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>Le classement du bien selon sa consommation énergétique</li>
          <li>
            La quantité d’énergie consommée ou estimée : le GES immobilier
            correspondant à la quantité d'émissions de gaz à effet de serre
          </li>
          <li>
            Des recommandations personnalisées pour diminuer la consommation
            énergétique et améliorer le classement énergétique du bien. En
            effet, une fois le diagnostic effectué, le technicien émet des
            préconisations d'amélioration permettant de repérer les travaux les
            plus efficaces pour économiser l'énergie. Ces recommandations sont à
            ce jour purement incitatives et les travaux ne sont jamais
            obligatoires.
          </li>
        </ul>
      </div>
      <NuxtImg
        src="/img/band-dpe-2.webp"
        alt="dpe"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le Diagnostic de Performance Energétique accompagne obligatoirement
          depuis le 1er novembre 2006 tout acte de vente. Depuis le 1er juillet
          2007, le DPE doit également être fourni par le propriétaire d’un
          logement mis en location. Le DPE est destiné à informer les potentiels
          acquéreurs ou locataires d’un bien immobilier sur sa consommation
          énergétique et son taux d’émission de gaz à effet de serre, le DPE est
          résumé sous forme de deux étiquettes hautes en couleur.
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
            Le diagnostiqueur certifié se déplace dans le bien à expertiser. Sur
            place, il contrôle et mesure les éléments nécessaires à l’évaluation
            de la consommation énergétiques et les émissions du bien immobilier.
            Sont pris en compte : le chauffage, l’eau chaude sanitaire, le
            refroidissement, l’enveloppe, la ventilation, l’altitude…
          </li>
          <li>
            Pour le tertiaire, les biens construits avant 1948, et les
            installations de chauffage collectif, les calculs de consommations
            réelles se font sur relevés de consommation.
          </li>
          <li>
            Le Diagnostic de Performance Energétique a pour but d’informer :
            l’acquéreur ou le locataire ne peut se prévaloir des informations
            contenues dans ce diagnostic à l’encontre du vendeur ou du
            propriétaire bailleur. De plus, le résultat du DPE n’entraine pas
            l’obligation de faire des travaux, il a pour but d’inciter le
            propriétaire à améliorer la performance énergétique du bien.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>10 ans pour une vente</li>
          <li>10 ans pour une location</li>
        </ul>
      </div>
    </div>
  </div>
</template>
