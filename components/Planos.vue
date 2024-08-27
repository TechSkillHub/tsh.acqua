<template>
  <div class="py-12 bg-[#E74F18] bg-opacity-15 pb-24">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-brand1 text-3xl font-theme uppercase mb-8 text-center col-span-12">Nossos Planos</h1>

      <div class="mb-4">
        <!-- <div class="hidenn w-4/5 mx-auto">
          <select
            id="tabs-select"
            class="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
            @change="test($event)"
          >
            <option
              v-for="(item, index) in planosList" :key="index"
              :value="item.id"
            >
              {{ item.titleDrop }}
            </option>
          </select>
        </div> -->
        <ul 
          class="text-sm font-medium text-center text-gray-500 rounded-lg sm:flex w-11/12 mx-auto grid grid-cols-3 gap-2 md:gap-0" 
          id="default-tab" 
          data-tabs-toggle="#default-tab-content" 
          data-tabs-active-classes="text-white bg-[#B0431B] scale-105 md:scale-110 rounded-lg" 
          data-tabs-inactive-classes="text-black bg-brand1 bg-opacity-45 hover:text-white hover:bg-[#B0431B]"
          role="tablist" 
        >
          <li
            v-for="(item, index) in planosList" :key="index"
            class="w-full" 
            role="presentation"
          >
            <button class="inline-block w-full p-4" :id="`${item.id}-tab`" :data-tabs-target="`#${item.id}`" type="button" role="tab" :aria-controls="`${item.id}`" aria-selected="false" v-html="item.title"></button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          v-for="(item, index) in planosList" :key="index"
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
const planosList = [
  {
    title: 'Hidroginástica',
    titleDrop: 'Hidroginástica',
    id: 'hidro',
    description: '<strong>Hidroginástica:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '200',
    semestral: '170',
    trimestral: '180'
  },
  {
    title: 'Hidroginástica<br/>3ª idade',
    titleDrop: 'Hidroginástica 3ª idade',
    id: 'hidro3',
    description: '<strong>Hidroginástica 3ª idade:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '190',
    semestral: '160',
    trimestral: '170'
  },
  {
    title: 'Natação<br/>Basic',
    titleDrop: 'Natação Basic',
    id: 'natBasic',
    description: '<strong>Natação Basic:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '200',
    semestral: '170',
    trimestral: '180'
  },
  {
    title: 'Natação<br/>Plus',
    titleDrop: 'Natação Plus',
    id: 'natPlus',
    description: '<strong>Natação Plus:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '220',
    semestral: '190',
    trimestral: '200'
  },
  {
    title: 'Musculação<br/>Basic',
    titleDrop: 'Musculação Basic',
    id: 'muscBasic',
    description: '<strong>Musculação Basic:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '100',
    semestral: '80',
    trimestral: '90'
  },
  {
    title: 'Musculação<br/>Plus',
    titleDrop: 'Musculação Plus',
    id: 'muscPlus',
    description: '<strong>Musculação Plus:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '210',
    semestral: '180',
    trimestral: '180'
  },
  {
    title: 'Musculação<br/>Plus 3ª idade',
    titleDrop: 'Musculação Plus 3ª idade',
    id: 'muscPlus3',
    description: '<strong>Musculação Plus 3ª idade:</strong><br/>Esse plano está incluso: Blá, blá blá',
    mensal: '200',
    semestral: '170',
    trimestral: '180'
  },
]


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