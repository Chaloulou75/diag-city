<template>
  <div>
    <PageHeader
      :title="'Le diagnostic Amiante'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic amiante'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container px-4 text-justify md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">L’utilité du Diagnostic amiante</h2>
        <p class="leading-relaxed text-gray-700">
          L’amiante est un problème sanitaire de 1er ordre. Longtemps utilisé
          dans le bâtiment pour ses excellentes propriétés d‘isolation, il est
          interdit en France depuis 1997 et en Europe depuis 2005.
          <br />
          L’amiante est responsable de cancers et de maladies respiratoires
          graves avec un temps de latence long : une seule fibre inhalée peut
          s’immiscer dans les poumons et provoquer une maladie mortelle 10 à 40
          ans plus tard.
          <br />
          Selon l’INRS, l’amiante c’est environ 3 000 décès par an en France et
          encore 50 000 à 100 000 décès d’ici 2025. La 1ère solution pour la
          prévention de ce risque, c’est un bon repérage !
        </p>
      </div>

      <NuxtImg
        src="/img/band-amiante.jpg"
        class="w-full h-auto mx-auto mb-8 shadow md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">Obligation</h2>
        <p class="leading-relaxed text-gray-700">
          Que ce soit dans le cadre d'une vente ou d'une location, les
          propriétaires ont l'obligation de réaliser le diagnostic amiante par
          un diagnostiqueur certifié. Le propriétaire qui ne respecte pas cette
          obligation de faire réaliser le diagnostic amiante peut se voir
          infliger une amende de 5ème classe (soit 1500C).
          <br />
          De plus, si le dossier amiante n'est pas annexé à la promesse de vente
          (ou au contrat de location s’il s'agit d'une mise en location) et que
          l'acquéreur (ou le futur locataire) découvre la présence d'amiante
          dans le logement, il peut engager la responsabilité du vendeur pour
          vices cachés, et saisir le tribunal d'instance pour diminution du prix
          de vente (Ou du montant du loyer), Ou même l'annulation de la vente
          (Ou du bail).
        </p>
      </div>

      <!-- Déroulement de la mission -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">Déroulement de la mission</h2>
        <ul class="pl-8 leading-relaxed text-gray-700 list-disc list-inside">
          <li>
            La recherche d'amiante s'effectue visuellement, elle est basée sur
            une liste de matériaux et de produits définis par la réglementation.
          </li>
          <li>
            Ce diagnostic immobilier consiste à rechercher et à identifier tout
            type de produit ou matériaux (plaques ondulées, cloisons, conduits
            et canalisations, bardages, dalles de sol, flocages, etc.) pouvant
            contenir de l'amiante.
          </li>
          <li>
            En cas de doute sur un matériau visible, notre diagnostiqueur
            prélèvera un échantillon afin de le transmettre à un laboratoire
            indépendant pour le faire analyser (cette analyse est à la charge du
            propriétaire).
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold">Validité</h2>
        <ul class="pl-8 leading-relaxed text-gray-700 list-disc list-inside">
          <li>
            Durée illimitée si aucune trace d’amiante n'est détectée (résultat
            négatif).
          </li>
          <li>
            Les diagnostics amiante avant-vente réalisés avant le 01/01/2013 ne
            sont plus valables depuis le 01/04/2013!
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
