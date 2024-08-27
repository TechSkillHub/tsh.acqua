<template>
  <div class="bg-cover h-screen w-full">
    <div class="bg-black h-screen flex justify-center items-center flex-col bg-opacity-65">
      <img src="@/assets/images/logo.webp" alt="Logo Oficina Acqua" class="w-80">
      <h2 class="text-2xl text-center mt-6 text-white">Escolha a unidade mais próxima de você:</h2>
      <div class="mt-9">
        <NuxtLink to="/mary-ward">
          <button class="rounded bg-white text-brand1 py-6 uppercase w-80 mx-3 hover:bg-brand1 hover:text-white transition duration-300 ease-in-out">
            <span class="font-theme w-fit block mx-auto text-2xl">MARY WARD<br/>          
              <span class="text-xs text-gray-600 capitalize font-sans text-right block">(Vila Califórnia)</span>
            </span>
          </button>
        </NuxtLink>
        <button class="rounded bg-white text-brand1 py-6 uppercase w-80 mx-3 hover:bg-brand1 hover:text-white transition duration-300 ease-in-out">
          <span class="font-theme w-fit block mx-auto text-2xl">SAGRADO CORAÇÃO<br/>          
            <span class="text-xs text-gray-600 capitalize font-sans text-right block">(Vila Formosa)</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>