<template>
  <div class="py-12 px-8 md:px-0 max-w-screen-xl mx-auto">
    <h1 class="text-brand1 text-5xl font-theme uppercase mb-8 text-center col-span-12">Estrutura</h1>
    
    <!-- <Gallery :list="list" class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8" /> -->
    <SimpleGallery galleryID="gallery" :images="images" class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8" />
  </div>
</template>

<script setup>
// import { Gallery } from 'vue-preview-imgs';
import SimpleGallery from './SimpleGallery.vue';


const images = [
  {
    largeURL: '/images/estrutura/mary-1.webp',
    thumbnailURL: '/images/estrutura/mary-1_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
  {
    largeURL: '/images/estrutura/mary-2.webp',
    thumbnailURL: '/images/estrutura/mary-2_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
  {
    largeURL: '/images/estrutura/mary-3.webp',
    thumbnailURL: '/images/estrutura/mary-3_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
  {
    largeURL: '/images/estrutura/mary-4.webp',
    thumbnailURL: '/images/estrutura/mary-4_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
  {
    largeURL: '/images/estrutura/mary-5.webp',
    thumbnailURL: '/images/estrutura/mary-5_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
  {
    largeURL: '/images/estrutura/mary-6.webp',
    thumbnailURL: '/images/estrutura/mary-6_thumb.webp',
    alt: 'Estrutura Unidade Mary Ward',
    width: 1280,
    height: 853,
  },
];

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