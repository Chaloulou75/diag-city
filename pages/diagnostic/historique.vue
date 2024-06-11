<template>
  <div>
    <PageHeader
      :title="'Historique du diagnostic : l\'essentiel'"
      :subtitle="'Chronologie des principaux diagnostics immobiliers depuis 1996'"
      :image="'bg-gradient-to-r from-blue-500 to-diagcity-blue bg-opacity-70'"
    />
    <div class="container mx-auto px-4 text-justify tracking-wider md:px-12">
      <NuxtImg
        src="/img/band-history.png"
        alt="historique"
        class="mx-auto mb-8 h-auto w-full shadow-xl md:w-2/3"
      />
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">1996</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>
            Superficie de loi Carrez + repérage des calorifugeage et flocages
            (en amiante)
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">1998</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>Premier diagnostic plomb (ERAP)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">1999</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>Diagnostic état parasitaire, selon la zone</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">2017</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>Diagnostic Technique Global</li>
        </ul>
      </div>
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">2021</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>
            Nouveau DPE (nouvelle méthode de calcul, opposabilité, validité des
            anciens DPE réduite)
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">2023</h2>
        <ul class="list-inside list-disc pl-8 leading-relaxed text-gray-700">
          <li>Projet de Plan Pluriannuel de Travaux</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">Évolution des diagnostics</h2>
        <p class="leading-relaxed text-gray-700">
          Comme on peut le voir, les diagnostics visent à la protection de
          l'acquéreur et du locataire. Ils se sont développés dans le temps, se
          sont aussi multipliés et ont gagné en technicité. En évolution
          constante, ils nécessitent du diagnostiqueur immobilier un important
          travail de mise à jour de ses connaissances théoriques et pratiques.
          Une formation initiale ne suffit donc pas. La nécessité de disposer
          d'une certification pour les différents diagnostics immobiliers impose
          une capacité d'adaptation aux exigences techniques et législatives
          nouvelles. Le métier de diagnostiqueur est donc soumis à des
          évolutions, au fil de la loi et de l'apparition de nouveaux
          diagnostics.
        </p>
      </div>
    </div>
  </div>
</template>
