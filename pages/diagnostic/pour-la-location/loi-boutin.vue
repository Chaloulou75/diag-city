<template>
  <div>
    <PageHeader
      :title="'Diagnostic Surface Habitable (Loi Boutin)'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic de surface habitable'"
      :image="'bg-diagcity-blue '"
    />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du Diagnostic Surface Habitable
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Ce diagnostic a été mis en place suite à la parution de la Loi Boutin
          2009 dans le but de protéger les locataires et de lutter contre
          l’exclusion. La superficie habitable doit obligatoirement apparaître
          sur tout nouveau bail de location pour une maison ou un appartement.
        </p>
      </div>

      <NuxtImg
        src="/img/carrez.jpeg"
        alt="loi carrez-boutin"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-2/3"
      />

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Surface Habitable et Loi Carrez : Les Différences
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La surface habitable définie par la Loi Boutin du 25 mars 2009 et la
          superficie privative selon la loi Carrez ne sont pas calculées de la
          même manière et ne peuvent être interchangeables. En votre qualité de
          propriétaire bailleur, si vous souhaitez vendre votre logement en
          copropriété, vous devrez faire réaliser un nouveau mesurage selon la
          Loi Carrez.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Un propriétaire a l’obligation de notifier la superficie habitable du
          bien loué à la signature du bail. Cette obligation concerne les
          locations vides et à usage de résidence principale. Ce diagnostic se
          résume au calcul de la surface habitable du bien qui doit être
          inscrite dans le bail. La Loi Boutin prévoit que les bailleurs en
          location vide auront l'obligation de préciser la surface habitable du
          bien immobilier loué dans le contrat de bail. Les locations meublées,
          secondaires et saisonnières ne sont donc pas concernées par cette
          obligation de mesurage Loi Boutin.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Déroulement de la Mission
        </h2>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            La loi Boutin n'oblige pas à avoir recours à un diagnostiqueur pour
            calculer votre superficie habitable. Néanmoins, cela est recommandé.
            En effet, afin d'éviter toute mise en cause par le futur locataire,
            il est préférable de s'adresser à un professionnel pour effectuer le
            mesurage de la surface habitable (dite Loi Boutin).
          </li>
          <li>
            À l’aide d'un laser mètre, le diagnostiqueur mesure très précisément
            la superficie habitable. La superficie habitable telle que décrite
            dans la Loi Boutin, est la surface de plancher construite après
            déduction des surfaces occupées par les murs, cloisons, marches et
            cages d'escaliers, gaines, embrasures de portes et fenêtres, en
            déduisant les parties de locaux d'une hauteur inférieure à 1,80
            mètre.
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            Sans limite de temps. Toutefois, si des travaux ont été réalisés
            depuis le premier diagnostic Loi Boutin, une nouvelle expertise est
            obligatoire puisque dans ce cas il y a une modification de surface.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
