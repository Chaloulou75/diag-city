<template>
  <div>
    <PageHeader
      :title="'Le diagnostic plomb (CREP)'"
      :subtitle="'Utilité, obligations, déroulement et validité du Constat de Risque d’Exposition au Plomb (CREP)'"
      :image="'bg-diagcity-blue'"
    />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic plomb
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Ce Constat de Risque d’Exposition au Plomb (CREP) a pour objectif de
          protéger les occupants des logements contre le risque d’intoxication
          au plomb. Cette intoxication, appelée saturnisme, est particulièrement
          grave chez les jeunes enfants et peut provoquer des effets graves et
          irréversibles.
        </p>
      </div>

      <NuxtImg
        src="/img/band-plomb.jpg"
        alt="plomb"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-2/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          En cas de vente ou location de tout ou partie d’un immeuble
          d’habitation construit avant le 1er janvier 1949, un constat de risque
          d’exposition au plomb fourni par le vendeur (ou le bailleur lorsqu’il
          s’agit d’une location), est obligatoirement annexé à la promesse de
          vente (ou au contrat de bail pour une location). A défaut de CREP dans
          le contrat de location La responsabilité pénale du bailleur peut être
          engagée en cas de non-respect de ses obligations.
          <br /><br />
          En cas de présence de plomb à une concentration supérieure au seuil
          règlementaire dans un revêtement dégradé (1 mg/cm²), le propriétaire a
          des obligations de travaux. Il doit procéder sans attendre aux travaux
          appropriés pour supprimer le risque d’exposition au plomb. Il doit en
          informer les occupants et les personnes amenées à faire des travaux
          dans l’immeuble ou la partie d’immeuble concernée.
          <br /><br />
          Les travaux consistent à supprimer le risque d’exposition au plomb. En
          recouvrant la surface à traiter ou à supprimer définitivement le
          revêtement contenant du plomb. Ces travaux doivent être réalisés par
          une entreprise spécialisée, celle-ci devra prendre toutes les
          dispositions pour éviter la dispersion de poussières contenant du
          plomb.
        </p>
      </div>

      <!-- Déroulement de la mission -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Déroulement de la mission
        </h2>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            La recherche de plomb est effectuée au moyen d’un appareil à
            fluorescence X, qui permet de « radiographier » les éléments sur
            lesquels on l’applique et détermine avec précision la présence ou
            l’absence de plomb.
          </li>
          <li>
            Ce diagnostic porte aussi sur les revêtements intérieurs (plinthes,
            murs, plafonds, portes), qu’extérieurs au logement (volets,
            portails,...).
          </li>
          <li>
            Il a pour objet d’identifier les supports comportant une présence de
            plomb et d’en évaluer l’état de conservation. Son élaboration
            comprend un repérage des éléments de construction présentant des
            peintures à base de plomb et une évaluation de l’état de
            conservation de ces peintures. Le résultat du diagnostic est positif
            lorsqu’il existe une accessibilité au plomb résultant de la présence
            de surfaces dégradées avec une concentration de plomb supérieure à 1
            mg/cm2ou à 5 mg/g ou à 1,5 mg/g.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>1 an pour une vente</li>
          <li>6 ans pour une location</li>
        </ul>
      </div>
    </div>
  </div>
</template>
