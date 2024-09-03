<template>
  <div class="py-12 bg-[#E74F18] bg-opacity-15 pb-24">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-brand1 md:text-5xl text-3xl font-theme uppercase mb-8 text-center col-span-12">Nossos Planos</h1>

      <div class="mb-4">
        <ul
          id="tabsPlanos"
          class="text-xs md:text-sm font-medium text-center text-gray-500 rounded-lg sm:flex w-11/12 mx-auto grid grid-cols-3 gap-2 md:gap-0" 
        >
          <li
            v-for="(item, index) in data.planos" :key="index"
            class="w-full bg-brand1 bg-opacity-45" 
            >
            <button
              class="inline-block w-full p-4 text-black hover:text-white hover:bg-[#B0431B]" 
              :class="item.id === openTab ? 'text-white bg-[#B0431B] scale-105 md:scale-110 rounded-lg pointer-events-none bg-opacity-100' : ''"
              v-on:click="toggleTabs(item.id)"
              v-html="item.title"
            ></button>
          </li>
        </ul>
        <div id="tab-content">
          <div
            v-for="(item, index) in data.planos" :key="index"
            class="md:mt-16 mt-8 content" 
            :class="openTab === item.id ? 'block' : 'hidden'"
          >
            <h2 class="text-center text-xl md:mb-32 mb-20" v-html="item.description"></h2>
            <div class="flex md:gap-16 gap-8 flex-col md:flex-row">

              <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 md:py-20 py-16 h-fit bg-white flex flex-col justify-between md:order-0 order-1">
                <h3 class="text-2xl font-bold uppercase tracking-wider">Mensal</h3>
                <div class="price flex justify-center my-8">
                  <span class="text-3xl font-bold">R$</span>
                  <span class="text-7xl font-bold leading-[0.75] text-brand1">{{ item.mensal }}</span>
                  <span class="text-2xl mt-auto text-gray-500">/mês</span>
                </div>
                <a :href="data.linkWhats" target="_blank" class="uppercase bg-gradient-to-b from-brand1 to-[#E04C4C] text-white py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</a>
              </div>

              <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 py-16 bg-gradient-to-b from-brand1 to-[#FFC9B6] md:scale-125 scale-110 flex flex-col justify-between md:order-1 relative">
                <div class="absolute -top-8 w-full left-0">
                  <div class="gift text-gray-600 text-xl font-bold bg-white rounded-xl py-2 px-4 flex items-center justify-center w-fit shadow-sm-light shadow-gray-700 mx-auto">
                    <img src="/public/images/planos/gift.png" alt="" class="h-10 me-4">
                    Um mês Grátis
                  </div>
                </div>
                <h3 class="text-2xl font-bold uppercase tracking-wider">Semestral</h3>
                <div class="price flex justify-center my-8">
                  <span class="text-4xl font-bold">R$</span>
                  <span class="md:text-9xl text-8xl font-bold leading-[0.75] text-white">{{ item.semestral }}</span>
                  <span class="text-3xl mt-auto text-gray-800">/mês</span>
                </div>
                <a :href="data.linkWhats" target="_blank" class="uppercase bg-white text-brand1 py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</a>
              </div>

              <div class="card md:w-full w-4/5 mx-auto md:mx-0 rounded-xl text-center p-8 md:py-20 py-16 h-fit bg-white flex flex-col justify-between md:order-2 mt-4 md:mt-0">
                <h3 class="text-2xl font-bold uppercase tracking-wider">Trimestral</h3>
                <div class="price flex justify-center my-8">
                  <span class="text-3xl font-bold">R$</span>
                  <span class="text-7xl font-bold leading-[0.75] text-brand1">{{ item.trimestral }}</span>
                  <span class="text-2xl mt-auto text-gray-500">/mês</span>
                </div>
                <a :href="data.linkWhats" target="_blank" class="uppercase bg-gradient-to-b from-brand1 to-[#E04C4C] text-white py-2 px-8 rounded-xl w-fit mx-auto">Garantir minha vaga</a>
              </div>
              </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      openTab: this.data.planos[0].id
    }
  },
  methods: {
    toggleTabs(value) {
      this.openTab = value 
    }
  }
}

</script>

<style lang="scss">
#tabsPlanos {
  li {
    @media (max-width: 768px) {
      border-radius: 0.5rem;
    }
    button {
      height: 72px;
    }
    button, &:last-child {
      grid-column-start: 2;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    button, &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }
}

</style>