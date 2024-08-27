<template>
  <NuxtLayout>
    <Header v-if="$route.path != '/'" />
    <div>
      <NuxtPage />
    </div>
    <Footer v-if="$route.path != '/'" />
  </NuxtLayout>
</template>

<script setup>

import { generateMeta } from '@/utils/generateMeta';

useHead({
  title: 'Academia Oficina Acqua',
  meta: generateMeta(),
  htmlAttrs: {
    lang: 'pt-BR',
  },
  script: [
     {
       src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js',
       tagPosition: 'bodyClose',
     }
   ],
  link: [
    {
      href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css',
      rel: 'stylesheet',
      tagPosition: 'head',
    }
  ]
})

onMounted(() => {
    // useFlowbite(() => {
    //     initFlowbite();
    // })
})

</script>