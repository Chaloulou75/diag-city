<script setup></script>
<template>
  <div>
    <PageHeader
      :title="'Références'"
      :subtitle="'Ils nous font confiance'"
      :image="'bg-gradient-to-r from-blue-500 to-diagcity-blue bg-opacity-70'"
    />
    <div class="container mx-auto px-4 tracking-wider md:px-12">
      <ReferencesCarousel />
    </div>
  </div>
</template>
