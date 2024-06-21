<template>
  <div>
    <PageHeader
      :title="'Le diagnostic Loi Carrez'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic Loi Carrez'"
      :image="'bg-diagcity-blue'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic Loi Carrez
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Ce diagnostic a été mis en place suite à la parution de la Loi Carrez
          dans le but de protéger l’acquéreur par l’obligation de mentionner la
          superficie privative du bien immobilier. L’attestation de superficie
          selon la Loi Carrez doit obligatoirement être jointe en annexe à tout
          compromis et actes authentiques de vente. Vous devez faire réaliser un
          mesurage de la superficie privative de votre bien selon la Loi Carrez
          dès lors que vous souhaitez le mettre en vente et qu’il s’agit d’un
          lot en copropriété horizontale ou verticale.
        </p>
      </div>

      <NuxtImg
        src="/img/carrez.jpeg"
        alt="loi carrez"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-2/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Obligations
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le mesurage Loi Carrez est une obligation du vendeur à effectuer lors
          de la vente d’un bien immobilier situé dans une copropriété. Le but du
          mesurage Loi Carrez est de préciser la surface réelle des parties
          privatives acquises par le futur copropriétaire. Les parties
          privatives étant les parties du lot uniquement réservées à l’usage
          exclusif du copropriétaire. Elle ne s’applique pas aux acheteurs d’une
          maison individuelle.
          <br />
          En cas d’absence de la mention de superficie, l’acheteur a le droit de
          réclamer la nullité du contrat de vente dans un délai de 12 mois. Si
          l’estimation de la superficie est erronée, (écart supérieur à 5%)
          l’acquéreur a le droit de réclamer une réévaluation du prix (1% de
          réduction pour un mètre carré de différence).
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
            À l’aide d'un laser mètre, le diagnostiqueur mesure très précisément
            la superficie Carrez. La superficie concernée est celle des
            planchers, des locaux clos et couverts hors ceux dont la hauteur
            sous plafond est inférieure à 1,80 mètre, en déduisant les surfaces
            inoccupées par les murs, cloisons, marches, cages d’escalier,
            gaines, embrasures de portes et fenêtres.
          </li>
          <li>
            Cependant, les placards, s’ils partent du sol et ont une hauteur de
            plafond supérieure à 1,80 mètre, peuvent être inclus dans cette
            surface. Sont également à inclure les loggias et les vérandas.
          </li>
          <li>
            L’objectif du diagnostic Loi Carrez est de garantir au futur
            propriétaire la superficie du logement. En contrepartie, il protège
            le vendeur contre tout recours éventuel de l'acquéreur en cas de
            superficie erronée. Une erreur de mesure de plus de 5% peut
            permettre à l’acquéreur de faire baisser le prix du bien.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Sans limite de temps. Toutefois, si des travaux ont été réalisés
            depuis le premier diagnostic Loi Carrez, une nouvelle expertise est
            obligatoire. Puisque dans ce cas il y a une modification de surface.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
