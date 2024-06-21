<template>
  <div>
    <PageHeader
      :title="'Le D.T.G.'"
      :subtitle="'Utilité, obligations, déroulement et validité du Diagnostic Technique Global (DTG) pour les copropriétés'"
      :image="'bg-diagcity-blue'"
    />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du Diagnostic Technique Global
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Depuis le 1er janvier 2017, la loi ALUR (loi relative au logement et à
          l'urbanisme rénové), publiée au Journal Officiel du 26 mars 2014,
          instaure la réalisation d’un Diagnostic Technique Global (DTG) pour
          les copropriétés. L’objectif de cette nouvelle disposition est
          d’assurer l'information des copropriétaires sur la situation générale
          de leur immeuble en réalisant un état des lieux technique et
          réglementaire du bâtiment.
        </p>
      </div>

      <NuxtImg
        src="/img/band-dtg.jpg"
        alt="dtg"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-2/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le DTG est obligatoire pour les immeubles :
        </p>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            De plus de 10 ans et qui font l'objet d'une mise en copropriété
            (création de la copropriété)
          </li>
          <li>
            Ou qui font l'objet d'une insalubrité et pour lesquelles
            l'administration demande au syndic de le lui produire.
          </li>
        </ul>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La loi prévoit malgré tout l'obligation pour toutes les copropriétés
          de mettre au vote de l'assemblée générale la réalisation d'un DTG,
          sans obligation de le voter.
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
          <li>Consultation des documents :</li>
          <ul
            class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
          >
            <li>Le règlement de la copropriété</li>
            <li>
              Un état de la situation du syndicat des copropriétaires au regard
              des obligations légales et règlementaires au titre de la
              construction et de l’habitation (fiche synthétique de la
              copropriété…)
            </li>
          </ul>
          <li>
            Avant de se déplacer nos experts auront besoin des informations
            complémentaires suivantes :
          </li>
          <ul
            class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
          >
            <li>
              L’accès à l’ensemble des parties et espaces communs (codes,
              badges, clés…)
            </li>
            <li>
              Tous documents recensant les travaux effectués dans la copropriété
            </li>
            <li>L’accès à au moins un logement (DPE, planchers, plafonds)</li>
          </ul>
          <li>Sur place :</li>
          <ul
            class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
          >
            <li>
              Un état apparent des parties communes et des équipements communs
            </li>
            <li>
              Une analyse des améliorations possibles concernant la gestion
              technique et patrimoniale de l'immeuble (état de l'immeuble)
            </li>
            <li>Un diag énergétique, avec recommandation d’améliorations</li>
            <li>
              Une évaluation sommaire du coût ainsi que la liste des travaux
              nécessaires à la conservation de l'immeuble (notamment sur les 10
              prochaines années)
            </li>
          </ul>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>10 ans</li>
        </ul>
      </div>
    </div>
  </div>
</template>
