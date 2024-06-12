<template>
  <div>
    <PageHeader
      :title="'Le diagnostic électrique'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic électrique'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 text-justify tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic électrique
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Selon l’INPES, un incendie sur 4 est dû à une installation électrique
          défectueuse.
          <br />
          Cet Etat de l’Installation Intérieure d’Electricité a pour objectif
          d’identifier les risques pouvant porter atteinte à la sécurité des
          personnes. Le diagnostiqueur contrôlera notamment les éléments
          suivants :
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>Interrupteurs et sectionneurs</li>
          <li>Fusibles, disjoncteurs, dispositifs différentiels</li>
          <li>La prise de terre et les liaisons équipotentielles</li>
          <li>
            Les classes de matériels électriques et différents modes de pose
          </li>
        </ul>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Il vérifiera également dans les salles d’eau que les distances de
          protection minimales sont respectées entre les points d’eau et les
          prises électriques. 87 points de contrôle sont prévus dans ce
          diagnostic.
        </p>
      </div>

      <NuxtImg
        src="/img/band-elec.jpg"
        alt="electricite"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/2"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          L’état des installations intérieures d’électricité est obligatoire en
          cas de vente d’un bien immobilier à usage d’habitation. Il concerne
          l'ensemble des circuits de toutes tensions et natures de courant
          associés pour l'utilisation de l'énergie électrique. Les biens
          immobiliers possédant une installation électrique de plus de 15 ans
          sont tous concernés par la réalisation du diagnostic électrique.
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
            Ce diagnostic concerne l’installation en aval de l’appareil général
            de commande et de protection (généralement appelé disjoncteur de
            branchement), jusqu’aux bornes d’alimentation des matériels fixes
            (convecteurs, chauffe-eau…) et jusqu’aux socles de prise de courant.
          </li>
          <li>
            Il ne porte que sur les constituants visibles de l’installation. Il
            ne s’applique pas aux circuits internes des matériels reliés à
            l’installation électrique fixe, tels que le lave-linge, le
            lave-vaisselle ou les plaques de cuisson.
          </li>
          <li>
            Le diagnostic électrique s'effectue, sans déplacement de meubles ni
            démontage de l'installation électrique ni destruction des isolants
            des câbles.
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
