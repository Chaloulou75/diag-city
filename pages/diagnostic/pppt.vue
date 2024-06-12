<template>
  <div>
    <PageHeader
      :title="'Le Projet de Plan Pluriannuel de Travaux (PPPT)'"
      :subtitle="'Utilité, obligations, déroulement et validité du Projet de Plan Pluriannuel de Travaux (PPPT)'"
      :image="'bg-gradient-to-r from-cyan-500 to-diagcity-violet bg-opacity-70'"
    />
    <div class="container mx-auto px-4 text-justify tracking-wider md:px-12">
      <!-- Utilité -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Utilité du Projet de Plan Pluriannuel de Travaux (PPPT)
        </h2>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La loi Climat et résilience n° 2021-1104 du 22 août 2021 rend
          obligatoire pour toutes les copropriétés (À destination partielle ou
          totale d’habitation) de plus de 15 ans, la réalisation d’un plan
          pluriannuel de travaux. Cette démarche a pour objectif d’anticiper et
          de planifier les dépenses liées aux travaux. À partir d’une analyse du
          bâti, des équipements de l’immeuble et du Diagnostic de Performance
          Énergétique, le PPPT devra faire ressortir :
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            <span class="font-semibold"
              >Un listing de l’ensemble des travaux nécessaires à:</span
            >

            <ul
              class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
            >
              <li>
                La sauvegarde de l’immeuble, la préservation de la santé et de
                la sécurité des occupants.
              </li>
              <li>
                La réalisation d’économies d’énergie et réduction des émissions
                de gaz à effet de serre.
              </li>
            </ul>
          </li>

          <li class="font-semibold">
            Une estimation du niveau de performance énergétique des travaux
            envisagés avec une estimation des coûts engendrés et leur
            hiérarchisation par ordre de priorité
          </li>
          <li class="font-semibold">
            Un échéancier pour les travaux nécessaires sur 10 ans
          </li>
        </ul>
      </div>

      <NuxtImg
        src="/img/band-ppt.jpg"
        alt="ppt"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-1/3"
      />

      <!-- Obligation -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Obligation</h2>
        <p
          class="text-lg leading-relaxed text-diagcity-gray underline md:text-xl"
        >
          Le Projet de Plan Pluriannuel de Travaux (PPPT) est à réaliser à
          compter des dates suivantes :
        </p>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Applicables au 1er janvier 2023 : copropriété de + de 200 lots
          </li>
          <li>
            Applicable au 1er janvier 2024 : copropriété entre 51 et 200 lots
          </li>
          <li>Applicables au 1er janvier 2025 : copropriété - de 51 lots</li>
        </ul>
        <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
          La réalisation d’un PPPT ne peut être confiée qu’à une personne morale
          ou physique possédant des compétences fixées par le décret 2022-663 du
          25 Avril 2022. Le PPPT sera réalisé en cotraitance par l’un de nos
          partenaires.
        </p>
      </div>

      <!-- Déroulement de la mission -->
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">
          Déroulement de la mission
        </h2>
        <div class="mb-4">
          <h3
            class="text-xl font-semibold leading-relaxed text-diagcity-violet"
          >
            1. L’étude documentaire (données à fournir par le client) :
          </h3>
          <ul
            class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
          >
            <li>Année exacte de la construction du bien</li>
            <li>Coordonnées et localisation des habitants</li>
            <li class="underline">
              Plan de masse du site, plans de niveaux des bâtiments…
            </li>
            <li>
              Contrat d’exploitation des installations techniques et livret
            </li>
            <li class="underline">
              Factures détaillées des travaux d’isolation
            </li>
            <li class="underline">
              Surface habitable totale de l’immeuble et de tous les appartements
              par typologie
            </li>
            <li>Etudes et diagnostics (DPE, audit, DTA, incendie, etc…)</li>
            <li>
              Récapitulatif des dépenses au titre des travaux réalisés sur les
              20 dernières années
            </li>
            <li>Les devis en cours</li>
            <li>Les éventuelles déclarations de sinistres</li>
            <li>Le règlement de copropriété</li>
            <li>La fiche synthétique</li>
            <li>
              Descriptif des installations collectives et/ou individuelles et
              leur mode de gestion
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3
            class="text-xl font-semibold leading-relaxed text-diagcity-violet"
          >
            2. Visite et étude du site
          </h3>
          <ul
            class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
          >
            <li class="font-semibold">
              Visite d’un échantillon d’appartements représentatifs
            </li>
            <p class="font-semibold">
              Règles d’échantillonnage (logements à visiter par type de bâtiment
              IMPERATIVEMENT).
            </p>
            <ul
              class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
            >
              <li>
                Jusqu’à 30 logements :
                <ul
                  class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
                >
                  <li>1 logement de chaque type (T1, T2, T3…)</li>
                  <li>
                    1 logement sur chaque type de plancher bas (sous-sol, vide
                    sanitaire, terre-plein…)
                  </li>
                  <li>
                    1 Logement sous chaque type de toiture (combles perdus,
                    toiture terrasse, combles aménagés, …)
                  </li>
                  <li>1 logement en étage intermédiaire</li>
                </ul>
              </li>
              <li>
                Au-delà de 30 logements et en plus des règles précédentes si on
                a :
                <ul
                  class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
                >
                  <li>
                    + de 31 à 100 logements : 10% du nombre de logements avec un
                    minimum de 10 logements
                  </li>
                  <li>
                    + de 100 logements : 10 logements à minima et > 5% de
                    l’ensemble des logements
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <span class="font-semibold"
                >Analyse visuelle du bâti (structure et enveloppe)</span
              >
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Structure générale dont fondations, planchers hauts des caves,
                  planchers, escaliers et murs porteurs (matériaux et principe
                  constructif).
                </li>
                <li>Toitures et confort d’été.</li>
                <li>
                  Façades dont contrainte de mitoyenneté et anticipation des
                  besoins d’empiètement si ITE, dont confort d’été.
                </li>
                <li>
                  Fenêtres des parties privatives et occultations, dont confort
                  d’été.
                </li>
                <li>
                  Fenêtres et portes (hall) des parties collectives, dont
                  confort d’été.
                </li>
                <li>Murs et planchers sur locaux non chauffés.</li>
                <li>Identification des pathologies.</li>
                <li>Circulations intérieures.</li>
              </ul>
            </li>
            <li>
              <span class="font-semibold"
                >Analyse des équipements techniques</span
              >
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Équipement collectif (local, type de production, énergie,
                  conduits d’extraction, régulation, distribution, émetteurs,
                  contrats, dont encadré sur l’analyse chimique de l’eau).
                </li>
                <li>
                  Équipements individuels (type de production, énergie, conduit
                  d’extraction, régulation, émetteurs).
                </li>
              </ul>
            </li>
            <li>
              <span class="font-semibold"
                >Analyse de l’état des réseaux d’eaux, des réseaux électriques
                et des équipements</span
              >
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Alimentation d’eau froide dont compteurs (général et
                  individuel) dont gaines techniques.
                </li>
                <li>
                  Évacuations EU et EV, EP et collecteurs dont gaines techniques
                  et pompes de relevage. (Hors raccordement aux réseaux)
                </li>
                <li>
                  Électricité (alimentation/colonnes de distribution et état
                  technique des installations) dont gaines techniques.
                </li>
                <li>
                  Gaz (alimentation/colonnes de distribution et état technique
                  des installations) dont gaines techniques.
                </li>
                <li>
                  Sécurisation (digicode, interphone...), portail véhicules,
                  portes de garage, clôtures et portails.
                </li>
                <li>Ascenseurs.</li>
                <li>
                  Sécurité Incendie, classement familles, compartimentage dont
                  portes palières et éclairage de sécurité, équipements de lutte
                  pour la propagation-évacuation des fumées, colonne sèche ou
                  humide, extincteurs.
                </li>
              </ul>
            </li>
            <li>
              <span class="font-semibold">Analyse du Sous-Sol</span>
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  État général, éclairage, ventilation, caves individuelles.
                </li>
                <li>Stationnements.</li>
              </ul>
            </li>
            <li>
              <span class="font-semibold"
                >Analyse du système de Ventilation</span
              >
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Ventilation des appartements, conduits ou gaines de
                  ventilation, souches et/ou moteurs.
                </li>
              </ul>
            </li>
            <li>
              <span class="font-semibold">Visite des Locaux communs</span>
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>Local ordures ménagères (OM).</li>
                <li>Vides ordures et gaines.</li>
                <li>Locaux autres (encombrant, vélos...).</li>
              </ul>
            </li>
            <li>
              <span class="font-semibold">Visite des Espaces extérieurs</span>
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Espaces verts, cours (dont éclairages) et stationnements
                  extérieurs (dont éclairages).
                </li>
                <li>
                  Cheminements piétons et voieries (dont éclairages) dont
                  accessibilité (PMR, voitures enfants...).
                </li>
              </ul>
            </li>
            <p class="font-semibold text-indigo-800">
              La bonne réalisation de cette phase implique l’accès à l’ensemble
              des parties de l’immeuble (toitures, combles, caves…), des pièces
              communes (local vélo, local poubelles, gaines techniques…) et
              locaux techniques (chaufferie, ascenseur…). Les accès doivent être
              assurés par le gestionnaire ou son représentant lors des visites
              sur site.
            </p>
          </ul>
        </div>

        <div class="mb-4">
          <h3
            class="text-xl font-semibold leading-relaxed text-diagcity-violet"
          >
            3. Analyse Energétique
          </h3>
          <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
            L’analyse énergétique est une composante indispensable pour réaliser
            le PPT. <br />

            Cette analyse reprend les éléments de synthèse de l’état thermique
            de la copropriété : performance de l’enveloppe, schémas des
            déperditions et le niveau de consommation énergétique en énergie
            finale et primaire. Cette analyse est réalisée à partir d’un
            Diagnostic de Performance Energétique Collectif. <br />

            Les propositions d’amélioration thermique seront ensuite effectuées
            sur la base d’une nouvelle modélisation de l’état existant. De
            manière générale, les actions d’amélioration privilégieront les
            travaux collectifs pour isoler l’enveloppe et améliorer la
            ventilation des appartements par exemple.
          </p>
        </div>

        <div class="mb-4">
          <h3
            class="text-xl font-semibold leading-relaxed text-diagcity-violet"
          >
            4. Etablissement des plans pluriannuels de travaux
          </h3>
          <p class="text-lg leading-relaxed text-diagcity-gray md:text-xl">
            Cette mission d’économiste vise à orienter la copropriété vers des
            travaux permettant la sauvegarde de l’immeuble, la préservation de
            la santé et la sécurité des occupants mais aussi la réalisation
            d’économies d’énergie et de réduction des émissions de GES pour la
            période de 10 ans suivant la réalisation du DTG. <br />

            Les propositions de travaux reprendront, dans un tableau
            synthétique, l’ensemble des recommandations de travaux de l’ensemble
            des postes de l’état des lieux. Ce tableau reprendra pour chaque
            poste la nature des travaux envisagés et le cas échéant le gain
            énergétique calculé dans l’analyse énergétique. Ce volet sera le
            point initial du plan pluriannuel de travaux qui sera fait par
            ailleurs. <br />

            NB : Les travaux d’embellissement des ouvrages ou d’amélioration
            sortant du cadre réglementaire ne sont pas pris en compte dans cette
            étape. Les parties privatives ne sont pas concernées par cette
            partie de la mission.
          </p>
          <ul
            class="list-inside list-disc pl-4 text-lg leading-relaxed text-diagcity-gray md:text-xl"
          >
            <li>Définition des actions par lot technique.</li>
            <li>Classification par degré d’urgence.</li>
            <li>
              Qualification des objectifs : Sécurité, Confort, Économies
              d’énergie, …
            </li>
            <li>Estimatif financier de chaque action.</li>
            <li>Définition des préconisations de travaux.</li>
            <li>1 scénario “minimum” lié à la préservation du bâti.</li>
            <li>
              2 scénarios énergétiques :
              <ul
                class="list-inside list-disc pl-4 leading-relaxed text-diagcity-gray"
              >
                <li>
                  Avec 1 scénario "MaPrimeRénov" Copro (gain énergétique de 35%,
                  si possible techniquement).
                </li>
                <li>
                  Avec 1 scénario “performant” (si possible techniquement).
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- Validité -->
      <div>
        <h2 class="mb-2 text-2xl font-bold text-diagcity-violet">Validité</h2>
        <ul
          class="list-inside list-disc pl-8 text-lg leading-relaxed text-diagcity-gray md:text-xl"
        >
          <li>
            Le Plan Pluriannuel de travaux a une validité de 10 ans et doit être
            renouvelé à son échéance.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
