<template>
  <header>
    
    <nav class="bg-brand1 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/images/logo.webp" class="h-20" alt="Oficina Acqua Logo">
      </NuxtLink>
      <div class="flex md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          @click="clickMenu()"
          id="hamburger" 
          type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-200" 
        >
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between w-full md:flex md:w-auto md:order-2 hidden" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li v-for="(item, index) in headers" :key="index">
            <NuxtLink :to="{ hash: item.link }" class="block py-2 px-3 text-white rounded md:p-0 uppercase" @click="clickMenu()">
              {{ item.title }}
            </NuxtLink>
          </li>          
        </ul>
      </div>
      </div>
    </nav>

  </header>
</template>

<script setup>
function clickMenu() {
  let el = document.getElementById('navbar-sticky')
  let elClass = document.getElementById('navbar-sticky').classList.contains("hidden")
  if (elClass) {
    el.classList.remove('hidden')
  } else {
    el.classList.add('hidden')
  }
}

const headers = [
  {
    title: 'Academia',
    link: '#academia'
  },
  {
    title: 'Estrutura',
    link: '#estrutura'
  },
  {
    title: 'Modalidades',
    link: '#modalidades'
  },
  {
    title: 'Planos',
    link: '#planos'
  },
  {
    title: 'Horários',
    link: '#horarios'
  },
  {
    title: 'Contato',
    link: '#contato'
  },
]
</script>

<style lang="scss">
header {
  > div {
    height: 50rem !important;
  }
}

</style>