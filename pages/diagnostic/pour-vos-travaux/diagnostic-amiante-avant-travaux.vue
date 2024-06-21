<script setup></script>
<template>
  <div>
    <PageHeader
      :title="'Le diagnostic Amiante avant travaux/démolition'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic amiante avant travaux/démolition'"
      :image="'bg-diagcity-blue'"
    />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic amiante avant travaux/démolition
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La gestion du risque amiante est une priorité pour tous les
          propriétaires et gestionnaires immobiliers. Selon les autorités
          sanitaires, l’amiante c’est environ 3 000 décès par an en France et
          encore 50 000 à 100 000 décès d’ici 2025. C’est la 1ère cause de
          cancers professionnels et de maladies mortelles professionnelles dans
          le BTP. Pour prévenir ce risque et contenir la progression de ces
          pathologies graves, l’Inspection du Travail a augmenté ses exigences
          et multiplie ses contrôles sur chantiers pour s’assurer du respect des
          règles de prévention. Le propriétaire et le Maître d’ouvrage sont
          responsables de la protection des travailleurs et occupants. Ne pas
          prévenir le risque amiante constitue un délit de mise en danger
          délibéré de la vie d’autrui. La 1ère solution pour la prévention de ce
          risque, c’est un repérage exhaustif par un professionnel formé et
          certifié !
        </p>
      </div>

      <NuxtImg
        src="/img/band-amiante.jpg"
        alt="amiante"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Ce diagnostic doit être réalisé 1 mois avant chaque opération de
          travaux ou de démolition (totale et/ou partielle). C’est une phase
          préalable avant tout travail de réhabilitation, rénovation, découpage,
          percement, démolition au sein d’un bâtiment.
          <br />
          Ce diagnostic est obligatoire pour tout immeuble bâti y compris la
          maison individuelle appartenant à une personne privée ou publique,
          dont le permis de construire a été délivré avant le 1er juillet 1997.
          <br />
          C’est à cette date que l’amiante a été interdite dans la construction
          et dans de nombreux autres domaines industriels.
          <br />
          Il est obligatoire de réaliser un diagnostic avant travaux afin de
          protéger les personnes qui sont susceptibles d’être exposées à
          l’amiante lors des travaux.
        </p>
        <div class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          <ul
            class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
          >
            <li>
              1948: interdiction de l'utilisation de la céruse pour les
              professionnels.
            </li>
            <li>
              1988: interdiction du sulfate de plomb pour les professionnels.
            </li>
            <li>
              1993: interdiction de mise sur le marché de la céruse et du
              sulfate de plomb.
            </li>
            <li>
              1995: interdiction de l'usage du plomb sous sa forme métallique
              dans les canalisations.
            </li>
            <li>
              Mai 2015: interdiction définitive du minium de plomb (traitements
              antirouille).
            </li>
          </ul>
        </div>
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
            Le diagnostiqueur va rechercher TOUTE l’amiante présente dans le
            bâtiment (si démolition) ou dans la partie concernée par les
            travaux, et cela sous TOUTES ses formes. Le résultat doit être
            exhaustif pour permettre un désamiantage complet et des travaux
            sécurisés. En cas de doute, le diagnostiqueur procédera à un sondage
            et transmettra l’échantillon prélevé à un laboratoire agréé COFRAC.
            Seul le diagnostiqueur peut déterminer le nombre de prélèvements à
            analyser, et cela pendant sa mission de repérage.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
