<template>
  <div class="py-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-brand1 text-3xl font-theme uppercase mb-8 text-center col-span-12">Horários</h1>

      <div ></div>

      <div
        v-html="data.horarios"
        class="mb-4 overflow-x-auto w-11/12 mx-auto scrollbar"
      >        
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  
})

</script>

<style lang="scss">

::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f95b22;
  border-radius: 2px;
}
table {
  thead, tbody {
    tr {
      th, td {
        border: 2px solid black;
        width: 16.66%;
        &:first-child {
          width: 12%;
          position: sticky;
        }
      }
    }
  }
  tbody {
    tr:nth-of-type(odd) {
      background-color: #eee;
    }
  }
}
</style>