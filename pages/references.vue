<script setup></script>
<template>
  <div>
    <PageHeader
      :title="'Références'"
      :subtitle="'Ils nous font confiance'"
      :image="'bg-gradient-to-r from-blue-500 to-diagcity-blue bg-opacity-70'"
    />
    <div class="container px-4 text-justify md:px-12">
      <ReferencesCarousel />
    </div>
  </div>
</template>
