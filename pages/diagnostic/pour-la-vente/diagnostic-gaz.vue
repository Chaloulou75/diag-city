<template>
  <div>
    <PageHeader
      :title="'Le diagnostic gaz'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic gaz'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic gaz
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Selon l’INPES, le monoxyde de carbone est responsable de 6 000
          intoxications par an et de 300 décès. Une installation aux normes peut
          vous sauver la vie.
          <br />
          Cet Etat de l’Installation Intérieure de Gaz a pour objectif
          d’identifier les risques pouvant porter atteinte à la sécurité des
          personnes. Toutes les installations de production individuelle de
          chaleur ou d’eau chaude sanitaire faisant partie de l’installation
          intérieure de gaz sont concernées, quelle que soit leur puissance. En
          outre, il inclut les installations d’appareils de cuisson s’ils sont
          desservis par une installation fixe. Les 4 domaines clés de
          l’installation intérieure de gaz sont les suivants:
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>la tuyauterie fixe</li>
          <li>le raccordement en gaz des appareils</li>
          <li>la ventilation des locaux</li>
          <li>la combustion</li>
        </ul>
      </div>

      <NuxtImg
        src="/img/band-gaz.jpg"
        alt="gaz"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Vous devez faire réaliser un Diagnostic Gaz sur les parties privatives
          de votre bien immobilier à usage d’habitation si vous souhaitez le
          vendre ou le louer et qu’il comporte une installation intérieure fixe
          de gaz de plus de 15 ans.
          <br />
          Si une anomalie est repérée lors du diagnostic, elle est détaillée
          dans le rapport et notée selon son degré de gravité. Si elle est
          classifiée en «Danger Immédiat Grave» (DGI), le diagnostiqueur
          condamne immédiatement tout ou partie de l’installation. Dans le 1er
          cas, le distributeur de gaz est également prévenu et ce dernier
          interrompra la fourniture de gaz s’il ne reçoit pas l’attestation de
          levée de DGI.
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
            Un diagnostiqueur se déplace pour contrôler toutes les installations
            qui se trouvent dans le bien. L’expertise consiste à contrôler
            visuellement et à vérifier par des essais et des mesures les défauts
            susceptibles de compromettre la sécurité des occupants.
          </li>
          <li>
            Il contrôle toutes les installations de production individuelle de
            chaleur ou d'eau chaude faisant partie de l'installation intérieure
            de votre logement.
          </li>
          <li>
            L’expertise concerne les chaudières et les chauffe-eaux, les
            appareils de cuisson desservis par une installation fixe, la
            tuyauterie fixe, les raccordements, la ventilation (les appareils de
            cuisson ou de chauffage mobiles alimentés par une bouteille de
            butane sont exclus du diagnostic).
          </li>
          <li>
            Il teste l'étanchéité du circuit de gaz et de débit des appareils,
            et à l'aide d'un analyseur la teneur en monoxyde de carbone générée
            par ces équipements.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>3 ans pour une vente</li>
          <li>6 ans pour une location</li>
        </ul>
      </div>
    </div>
  </div>
</template>
