<template>
  <div class="bg-cover h-screen w-full bg-right">
    <div class="bg-black h-screen flex justify-center items-center flex-col bg-opacity-65">
      <img src="@/assets/images/logo.webp" alt="Logo Oficina Acqua" class="md:w-80 w-2/3">
      <h2 class="text-2xl text-center mt-6 text-white max-w-80">Escolha a unidade mais próxima de você:</h2>
      <div class="mt-9 flex flex-col md:flex-row">
        <NuxtLink to="/mary-ward">
          <button class="rounded-xl bg-white text-brand1 py-6 uppercase w-80 mx-3 hover:bg-brand1 hover:text-white transition duration-300 ease-in-out">
            <span class="font-theme w-fit block mx-auto text-2xl">MARY WARD<br/>          
              <span class="text-xs text-gray-600 capitalize font-sans text-right block">(Chácara  Califórnia)</span>
            </span>
          </button>
        </NuxtLink>
        <NuxtLink to="/sagrado-coracao">
          <button class="rounded-xl mt-4 md:mt-0 bg-white text-brand1 py-6 uppercase w-80 mx-3 hover:bg-brand1 hover:text-white transition duration-300 ease-in-out">
            <span class="font-theme w-fit block mx-auto text-2xl">SAGRADO CORAÇÃO<br/>          
              <span class="text-xs text-gray-600 capitalize font-sans text-right block">(Vila Formosa)</span>
            </span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>