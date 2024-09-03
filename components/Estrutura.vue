<template>
  <div class="py-12 px-8 md:px-0 max-w-screen-xl mx-auto">
    <h1 class="text-brand1 md:text-5xl text-3xl font-theme uppercase mb-8 text-center col-span-12">Estrutura</h1>
    
    <SimpleGallery galleryID="gallery" :images="data.estrutura" class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8" />
  </div>
</template>

<script setup>
import SimpleGallery from './SimpleGallery.vue';

defineProps({
  data: Object,
  
})

</script>

<style lang="scss">
#gallery {
  img {
    border-radius: 0.75rem;
    --tw-shadow-color: #374151;
    --tw-shadow: var(--tw-shadow-colored);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
} 
</style>