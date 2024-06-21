<template>
  <div>
    <PageHeader
      :title="'Le diagnostic termites'"
      :subtitle="'Utilité, obligations, déroulement et validité du diagnostic termites'"
      :image="'bg-diagcity-blue'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du diagnostic termites
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Les termites, que l’on appelle également fourmis blanches, sont des
          insectes vivants en colonies. Dites xylophages, les termites se
          nourrissent de bois et de fragments de feuille.
          <br />
          Leur capacité à se nourrir en quelques mois seulement de charpentes
          des bâtiments rend leur recherche indispensable dans le cadre d’une
          vente pour protéger la sécurité des personnes.
          <br />
          Les termites rongent le bois de l’intérieur détruisant ainsi
          rapidement et sans traces les charpentes des maisons et appartements.
          La solidité des charpentes est alors menacée et elles peuvent
          s’écrouler d’un seul coup.
        </p>
      </div>

      <NuxtImg
        src="/img/band-termites.jpg"
        alt="termites"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Obligations
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          Depuis le 8 juin 1999, le diagnostic termites est obligatoire pour
          toute vente d’un bien immobilier localisé dans l’une des zones à
          risque définies par arrêté préfectoral.
          <br />
          Afin de donner à l’acquéreur d’un bien situé en zone contaminée une
          information complète et précise sur l’état réel de celui-ci, le
          vendeur d’un bien immobilier situé dans une telle zone, doit annexer à
          la promesse de vente ou à défaut, à l’acte authentique un état du
          bâtiment relatif à la présence de termites établi depuis moins de six
          mois.
          <br />
          Le Code de la construction et de l’habitation (articlesL.133-1
          àL.133-5et R.133-1 àR.133-8) définit les conditions dans lesquelles la
          prévention et la lutte contre les termites et les autres insectes
          xylophages sont organisées par les pouvoirs publics en vue de protéger
          les bâtiments.
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
            Le diagnostic termites consiste à chercher dans un immeuble
            l’existence des termites et des autres insectes xylophages et les
            repérer grâce à un examen visuel et un sondage des bois. En
            commençant par les parties en contact avec le sol (cave, sous-sol, …
            ), puis en expertisant étage par étage, jusqu'aux combles. Les
            dépendances sont également diagnostiquées (caves, parking, cellier,
            …).
          </li>
          <li>
            Une inspection visuelle des lieux est effectuée pour repérer les
            bois visibles ou accessibles ; les éléments pouvant favoriser
            l'infestation sont notés (type de construction, humidité, … ).
          </li>
          <li>
            Tous les bois repérés font l'objet d'un examen visuel par le
            diagnostiqueur, puis l'examen visuel est complété par un
            poinçonnage.
          </li>
        </ul>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>6 mois pour une vente</li>
        </ul>
      </div>
    </div>
  </div>
</template>
