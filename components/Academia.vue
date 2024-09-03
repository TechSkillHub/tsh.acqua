<template>
  <div class="md:pt-24 py-12 max-w-screen-xl mx-auto">
    <div class="grid grid-cols-12 gap-8 md:gap-1">
      <div class="md:col-span-5 col-span-10 col-start-2 mx-auto">
        <h1 class="text-brand1 md:text-5xl text-3xl font-theme uppercase mb-8">A Academia</h1>
        <p class="text-justify">
          A atenção e o profissionalismo dos professores, a qualidade e a tecnologia dos equipamentos e o atendimento aos nossos clientes, nos tornam uma academia respeitada pelos alunos e pelo mercado de fitness. Por isso, a nossa filosofia é inovar sempre e, assim, contamos com novas modalidades e com os modernos equipamentos. Se você estiver procurando um diferencial, venha correndo para a <strong>Oficina Academia</strong>.
          <br/><br/>
          Quando você começa a treinar na <strong>Oficina Academia</strong>, sente um "clima" diferente, graças à atitude de nossos professores e colaboradores, sempre próximos e disponíveis, prontos para ajudá-lo e orientá-lo na busca de seus objetivos. Aqui se treina para viver melhor!
        </p>
        <a :href="data.linkWhats" target="_blank" class="rounded-lg bg-[#0CCB6B] italic text-white py-4 px-6 h-fit text-xl flex justify-between items-center w-fit mt-8">
          NÃO PERCA TEMPO,
          COMECE AGORA!
          <svg class="w-[64px] h-[64px] md:w-[32px] md:h-[32px] ms-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="#fff" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="#fff" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>
        </a>
      </div>
      <div class="md:col-span-7 col-span-10 col-start-2 mx-auto">
        <img :src="data.imageBanner" alt="Academia Oficia Acqua Mery Ward" class="mx-auto">
      </div>
    </div>

    <!-- <div class="grid grid-cols-12 gap-8 md:gap-1 mt-12 text-center">
      <div class="md:col-span-4 col-span-10 col-start-2">
        <h2 class="text-2xl text-brand1 font-bold mb-4">Nosso Foco</h2>
        <p>Pessoas que desejam o corpo em forma através de exercícios físicos orientados e eficientes, na conquista de resultados para uma vida melhor.</p>
      </div>
      <div class="md:col-span-4 col-span-10 col-start-2">
        <h2 class="text-2xl text-brand1 font-bold mb-4">Nosso Negócio</h2>
        <p>Dar vida ao ritmo e ritmo à vida!</p>
      </div>
      <div class="md:col-span-4 col-span-10 col-start-2">
        <h2 class="text-2xl text-brand1 font-bold mb-4">Nossa Missão</h2>
        <p>Possibilitar aos associados, a conquista de melhorias na forma física, saúde e bem-estar, garantindo cordialidade e competência profissional, tecnologia e inovação, conforto e segurança.</p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  
})
</script>

<style lang="scss">

</style>