<script setup></script>
<template>
  <div
    class="mx-auto grid h-full max-w-screen-lg grid-cols-1 place-content-center place-items-center gap-6 py-4 md:grid-cols-3 md:gap-10"
  >
    <CardDiagComponent
      :title="'Diagnostic Technique Global'"
      :url="'/diagnostic/diagnostic-dtg'"
      :logo="'/dtg.png'"
    />

    <CardDiagComponent
      :title="'Diagnostic Technique Amiante'"
      :url="'/diagnostic/diagnostic-amiante'"
      :logo="'/amiante.png'"
    />
    <CardDiagComponent
      :title="'D.P.E'"
      :url="'/diagnostic/pour-la-vente/diagnostic-dpe'"
      :logo="'/dpe.png'"
    />
    <CardDiagComponent
      :title="'Loi Carrez'"
      :url="'/diagnostic/pour-la-vente/diagnostic-loi-carrez'"
      :logo="'/mesurage.png'"
    />
    <CardDiagComponent
      :title="'Plan Pluriannuel de travaux'"
      :url="'/diagnostic/pppt'"
      :logo="'/pppt.png'"
    />

    <CardDiagComponent
      :title="'Diagnostic E.R.P'"
      :url="'/diagnostic/pour-la-vente/diagnostic-erp'"
      :logo="'/erp.png'"
    />
    <CardDiagComponent
      :title="'Diagnostic Gaz'"
      :url="'/diagnostic/pour-la-vente/diagnostic-gaz'"
      :logo="'/gaz.png'"
    />
    <CardDiagComponent
      :title="'Diagnostic Termites'"
      :url="'/diagnostic/pour-la-vente/diagnostic-termites'"
      :logo="'/termites.png'"
    />
    <CardDiagComponent
      :title="'Diagnostic Plomb'"
      :url="'/diagnostic/pour-la-vente/diagnostic-plomb'"
      :logo="'/crep.png'"
    />
    <CardDiagComponent
      :title="'Loi Boutin'"
      :url="'/diagnostic/pour-la-location/loi-boutin'"
      :logo="'/mesurage.png'"
    />
    <CardDiagComponent
      :title="'Diagnostic Electrique'"
      :url="'/diagnostic/pour-la-vente/diagnostic-electrique'"
      :logo="'/elec.png'"
    />
  </div>
</template>
