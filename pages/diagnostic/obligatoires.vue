<template>
  <div>
    <PageHeader
      :title="'Le diagnostic obligatoires'"
      :subtitle="'Obligations du propriétaire en cas de vente, location ou création de copropriété'"
      :image="'bg-diagcity-blue bg-opacity-70'"
    />
    <div class="container px-4 mx-auto tracking-wider md:px-12">
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          En cas de vente
        </h2>
        <p class="mb-2 text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le vendeur a une obligation de fournir au futur acquéreur une
          expertise de diagnostic immobilier dès la signature du compromis de
          vente. Ces diagnostics obligatoires sont destinés à la protection de
          l’acquéreur et du vendeur :
        </p>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            Diagnostic immobilier amiante, pour un permis de construire délivré
            avant le 1 juillet 1997
          </li>
          <li>
            Diagnostic immobilier plomb, pour les immeubles datant d’avant le
            1er janvier 1949
          </li>
          <li>
            Diagnostic immobilier termite, dans le cas où vous êtes dans une
            zone déclarée infestée (consulter la préfecture de votre
            département)
          </li>
          <li>
            Diagnostic immobilier gaz, dans le cas d’une installation de gaz
            individuelle et à plus de 15 ans
          </li>
          <li>
            Diagnostic immobilier électrique, si votre installation a plus de 15
            ans (En vigueur du Décret d’application en 2008)
          </li>
          <li>
            Diagnostic performance énergétique (DPE), il est obligatoire en
            France métropolitaine
          </li>
          <li>
            Diagnostic État des Risques et Pollution des sols (E.R.P),
            simplement si vous êtes dans une zone déclarée à risque (Consulter
            la préfecture de votre département ou la mairie)
          </li>
          <li>
            Mesurage « Loi Carrez », dans le cas où vous êtes dans une
            copropriété
          </li>
        </ul>
      </div>

      <NuxtImg
        src="/img/vente.jpg"
        alt="vente copro"
        class="w-full h-auto mx-auto mb-8 shadow-xl md:w-full"
      />

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          En cas de location
        </h2>
        <p class="mb-2 text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le loueur a une obligation de fournir au futur locataire une expertise
          de diagnostic immobilier dès la signature du bail de location. Ces
          diagnostics obligatoires sont destinés à la protection du loueur et du
          locataire :
        </p>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            Diagnostic plomb, pour les immeubles datant d’avant le 1er janvier
            1949, il est obligatoire depuis d’août 2008
          </li>
          <li>
            Diagnostic performance énergétique ou (DPE), il est obligatoire en
            France métropolitaine
          </li>
          <li>
            Diagnostic État des Risques et Pollution des sols (E.R.P),
            simplement si vous êtes dans une zone déclarée à risque (Consulter
            la préfecture de votre département ou la mairie)
          </li>
          <li>
            Mesurage « Loi Boutin », dans le cas où vous êtes dans une
            copropriété
          </li>
          <li>
            Diagnostic Amiante des Parties Privatives (D.A.P.P), pour un permis
            de construire délivré avant le 1 juillet 1997
          </li>
          <li>
            Diagnostic immobilier gaz, dans le cas d’une installation de gaz
            individuelle et à plus de 15 ans
          </li>
          <li>
            Diagnostic immobilier électrique, si votre installation a plus de 15
            ans (En vigueur du Décret d’application en 2008)
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          En cas de création de copropriété
        </h2>
        <p class="mb-2 text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Le vendeur a une obligation de fournir au futur acquéreur une
          expertise de diagnostic immobilier des parties communes dès la
          signature du compromis de vente. Ces diagnostics obligatoires sont
          destinés à la protection de l’acquéreur et du vendeur :
        </p>
        <ul
          class="pl-8 text-lg leading-relaxed list-disc list-inside text-diagcity-gray md:text-xl"
        >
          <li>
            Dossier Technique Amiante (DTA), pour un permis de construire
            délivré avant le 1 juillet 1997
          </li>
          <li>
            Diagnostic plomb parties communes, pour les immeubles datant d’avant
            le 1er janvier 1949, il est obligatoire depuis d’août 2008
          </li>
          <li>
            Diagnostic immobilier termite parties communes, dans le cas où vous
            êtes dans une zone déclarée infestée (consulter la préfecture de
            votre département)
          </li>
          <li>
            Diagnostic État des Risques et Pollution des sols (E.R.P),
            simplement si vous êtes dans une zone déclarée à risque (Consulter
            la préfecture de votre département ou la mairie)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
