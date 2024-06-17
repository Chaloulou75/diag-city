<template>
  <div class="relative flex flex-col min-h-screen bg-white text-diagcity-gray">
    <div>
      <AppHeader :background="'bg-opacity-40 '" />
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
