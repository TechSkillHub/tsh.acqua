<template>
  <div id="mary-ward">
    <Academia id="academia" :data="page" />
    <Estrutura id="estrutura" :data="page" />
    <Modalidades id="modalidades" :data="page" />
    <Planos id="planos" :data="page" />
    <Horarios id="horarios" :data="page" />
    <Contato id="contato" :data="page" />
    <Footer :data="page" />
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('mary-ward', () => queryContent('/mary-ward').findOne())

</script>

<style lang="scss">
#mary-ward {
  padding-top: 113px;
}
</style>