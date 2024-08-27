<template>
  <div class="py-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-brand1 text-3xl font-theme uppercase mb-8 text-center col-span-12">Horários</h1>

      <div class="mb-4 overflow-x-auto w-11/12 mx-auto scrollbar">
        <table class="w-4/5 mx-auto font-bold" cellpadding="5" cellspacing="0">
          <thead class="bg-brand1 text-white uppercase">
            <tr>
              <th>Horários</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody class="bg-white text-center">
            <tr>
              <td>07:00</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
              <td>Hidroginástica</td>
            </tr>
            <tr>
              <td>07:50</td>
              <td>Natação</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>08:40</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
            </tr>
            <tr>
              <td>09:30</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>10:20</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
              <td>Hidroginástica</td>
              <td>Natação</td>
              <td></td>
            </tr>
            <tr>
              <td>14:30</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
            </tr>
            <tr>
              <td>15:30</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>16:20</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>17:10</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td></td>
            </tr>
            <tr>
              <td>18:00</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>18:50</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
            </tr>
            <tr>
              <td>19:40</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
              <td>Hidroginástica</td>
            </tr>
            <tr>
              <td>20:30</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td>Natação</td>
              <td></td>
            </tr>
            <tr>
              <td>21:20</td>
              <td></td>
              <td>Natação</td>
              <td></td>
              <td>Natação</td>
              <td></td>
            </tr>
          </tbody>
          <thead class="bg-brand1 text-white uppercase">
            <tr>
              <th colspan="6">Ginástica</th>
            </tr>
          </thead>
          <thead class="bg-brand1 text-white uppercase">
            <tr>
              <th>Horários</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody class="bg-white text-center">
            <tr>
              <td>07:00</td>
              <td></td>
              <td>Zumba</td>
              <td>Pilates</td>
              <td>Funcional</td>
              <td></td>
            </tr>
            <tr>
              <td>07:10</td>
              <td>Pilates</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>08:00</td>
              <td></td>
              <td>Glúteo</td>
              <td></td>
              <td>Alongamento</td>
              <td></td>
            </tr>
            <tr>
              <td>16:30</td>
              <td></td>
              <td>Pilates</td>
              <td></td>
              <td>Pilates</td>
              <td></td>
            </tr>
            <tr>
              <td>19:00</td>
              <td></td>
              <td>Pilates</td>
              <td></td>
              <td>Pilates</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

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