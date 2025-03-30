<template>
  <div class="py-12 px-8 md:px-0 max-w-screen-xl mx-auto">
    <h1 class="text-brand1 md:text-5xl text-3xl font-theme uppercase mb-8 text-center col-span-12">Estrutura</h1>
    
    <SimpleGallery galleryID="gallery" :images="data.estrutura" class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8" />
  </div>

  <div v-if="$route.path == '/mary-ward'" class="p-8 max-w-screen-xl mx-auto boxHidro w-11/12 grid grid-cols-12">
    <div class="md:col-span-5 col-span-12">
      <h1 class="text-brand1 md:text-4xl text-3xl font-theme mb-8">Você já ouviu falar em Hidroterapia?</h1>
      <p>
        A hidroterapia é conhecida também como fisioterapia aquática ou aquaterapia, e é uma técnica terapêutica que utiliza as propriedades da água para a reabilitação física, por meio de medidas, profundidades, temperaturas e pressões diferentes.
      </p>
      <br/>
      <p>
        Os exercícios fisioterapêuticos são orientados por um profissional de fisioterapia com habilitação para a técnica, e as sessões podem ser realizadas individualmente ou em grupo.
      </p>
      <h2 class="font-theme text-brand1 text-2xl mt-8 mb-4">Quais são as indicações e os benefícios da hidroterapia?</h2>
      <p>
        A hidroterapia é indicada para a prevenção, o tratamento e a reabilitação de problemas fisioterápicos de ordem traumato-ortopédica, neurológica, reumática, cardiológica, pneumológica, esportiva e estética. As principais indicações são:
      </p>
      <ul class="list-disc ps-5 m-4">
        <li>
          nível de dor alto;
        </li>
        <li>
          edema de extremidades;            
        </li>
        <li>
          contraturas articulares;
        </li>
        <li>
          mobilidade diminuída;
        </li>
        <li>
          fraqueza muscular generalizada;
        </li>
        <li>
          desvios de marcha;
        </li>
        <li>
          disfunções posturais;
        </li>
        <li>
          diminuição da flexibilidade;
        </li>
        <li>
          limitação de amplitude de movimento.
        </li>
      </ul>
    </div>


    <div class="md:col-span-7 md:ps-8 col-span-12">
      <img src="/images/estrutura/hidroterapia.webp" alt="Hidroterapia" class="rounded-xl md:w-full h-fit order-1 md:ms-auto mb-8">
       
      <p>
        Os principais benefícios da hidroterapia estão relacionados à resistência natural proporcionada pela água, que favorece a realização dos exercícios de fisioterapia. Os pacientes com maior restrição de movimento conseguem executar as atividades com mais precisão e menos dor, e não é necessário se preocupar com o excesso de pressão sobre áreas afetadas.
      </p>
      <br/>
      <p>Como qualquer prática, a hidroterapia tem contraindicações: pacientes com problemas de pele, com sintomas de trombose venosa profunda, com incontinência urinária e fecal, com pressão arterial descontrolada, devem evitar a técnica.</p>
      
      <a :href="data.linkWhats" target="_blank" class="rounded-lg bg-[#0CCB6B] italic text-white md:py-4 md:px-6 p-4 h-fit md:text-xl text-[1.1rem] justify-between items-center md:w-fit w-full md:mt-8 mt-4 flex order-2 md:order-1 mx-auto">
        CONSULTE NOSSA EQUIPE
        <svg class="w-[32px] h-[32px] ms-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="#fff" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
          <path fill="#fff" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import SimpleGallery from './SimpleGallery.vue';

defineProps({
  data: Object,
  
})

</script>

<style lang="scss">
#gallery {
  img {
    border-radius: 0.75rem;
    --tw-shadow-color: #374151;
    --tw-shadow: var(--tw-shadow-colored);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
.boxHidro {
  border-radius: 0.75rem;
  --tw-shadow-color: #374151;
  --tw-shadow: var(--tw-shadow-colored);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>