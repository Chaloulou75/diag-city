<template>
  <div
    class="relative flex flex-col min-h-screen tracking-wider bg-white text-diagcity-gray"
  >
    <AppHeader />
    <div class="md:pt-20"><slot /></div>

    <AppFooter />
  </div>
</template>
