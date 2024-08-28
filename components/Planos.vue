<template>
  <div class="py-12 bg-[#E74F18] bg-opacity-15 pb-24">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-brand1 text-3xl font-theme uppercase mb-8 text-center col-span-12">Nossos Planos</h1>
      {{ data }}
      <div class="mb-4">
        <ul 
          class="text-sm font-medium text-center text-gray-500 rounded-lg sm:flex w-11/12 mx-auto grid grid-cols-3 gap-2 md:gap-0" 
          id="default-tab" 
          data-tabs-toggle="#default-tab-content" 
          data-tabs-active-classes="text-white bg-[#B0431B] scale-105 md:scale-110 rounded-lg" 
          data-tabs-inactive-classes="text-black bg-brand1 bg-opacity-45 hover:text-white hover:bg-[#B0431B]"
          role="tablist" 
        >
          <li
            v-for="(item, index) in data" :key="index"
            class="w-full" 
            role="presentation"
          >
            <button class="inline-block w-full p-4" :id="`${item.id}-tab`" :data-tabs-target="`#${item.id}`" type="button" role="tab" :aria-controls="`${item.id}`" aria-selected="false" v-html="item.title"></button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          v-for="(item, index) in data" :key="index"
          :id="`${item.id}`" 
          :aria-labelledby="`${item.id}-tab`"
          role="tabpanel" 
          class="hidden mt-16 content" 
        >
          <h2 v-html="item.description" class="text-center text-xl md:mb-24 mb-8"></h2>
          <div class="flex gap-8 flex-col md:flex-row">

            <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 bg-white flex flex-col justify-between md:order-0 order-1">
              <h3 class="text-2xl font-bold uppercase tracking-wider">Mensal</h3>
              <div class="price flex justify-center my-8">
                <span class="text-3xl font-bold">R$</span>
                <span class="text-7xl font-bold leading-[0.75] text-brand1">{{ item.mensal }}</span>
                <span class="text-2xl mt-auto text-gray-500">/mês</span>
              </div>
              <button class="uppercase bg-gradient-to-b from-brand1 to-[#E04C4C] text-white py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</button>
            </div>

            <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 bg-gradient-to-b from-brand1 to-[#FFC9B6] md:scale-125 scale-110 flex flex-col justify-between md:order-1">
              <h3 class="text-2xl font-bold uppercase tracking-wider">Semestral</h3>
              <div class="price flex justify-center my-8">
                <span class="text-4xl font-bold">R$</span>
                <span class="text-9xl font-bold leading-[0.75] text-white">{{ item.semestral }}</span>
                <span class="text-3xl mt-auto text-gray-800">/mês</span>
              </div>
              <button class="uppercase bg-white text-brand1 py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</button>
            </div>

            <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 bg-white flex flex-col justify-between md:order-2">
              <h3 class="text-2xl font-bold uppercase tracking-wider">Trimestral</h3>
              <div class="price flex justify-center my-8">
                <span class="text-3xl font-bold">R$</span>
                <span class="text-7xl font-bold leading-[0.75] text-brand1">{{ item.trimestral }}</span>
                <span class="text-2xl mt-auto text-gray-500">/mês</span>
              </div>
              <button class="uppercase bg-gradient-to-b from-brand1 to-[#E04C4C] text-white py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

defineProps({
  data: Array(Object),
  
})

</script>

<style lang="scss">
#default-tab {
  li {
    button {
      height: 72px;
      @media (max-width: 768px) {
        border-radius: 0.5rem;
      }
    }
    &:last-child {
      grid-column-start: 2;
      button {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
    &:first-child {
      button {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
      }
    }
  }
}

</style>