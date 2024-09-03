<template>
  <div class="py-12 max-w-screen-xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <div class="p-8 flex justify-center items-start flex-col gap-4">
        <h2 class="text-brand1 md:text-5xl text-3xl mx-auto">
          Veja nossas
        </h2>
        <h2 class="text-brand1 md:text-5xl text-3xl uppercase font-theme mx-auto">
          Modalidades
        </h2>
      </div>
      <div 
        v-for="(item, index) in data.modalidades" :key="index"
        class="bg-gradient-to-b from-brand1 to-[#FFC9B6] p-8 rounded-2xl w-11/12 mx-auto md:w-full">
        <div class="flex justify-between items-center gap-8 flex-col">
          <img :src="item.icon" :alt="item.alt" class="opacity-60">
          <h2 class="text-white text-3xl uppercase font-theme text-center w-full">
            {{ item.title }}
          </h2>
        </div>
        <p class="text-justify mt-8 text-black">
          {{ item.description }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  
})
</script>

<style>

</style>