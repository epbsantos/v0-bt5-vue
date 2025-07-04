<script setup lang="ts">
import SpecsCardGrid from '@/components/specsCard/SpecsCardGrid.vue';
</script>
<template>
  <div class="container mt-5">
    <h1>Cards</h1>

    <p>
      Os cards apresentados nessa página são gerados a partir de um JSON vindo de uma API.
      O <code>SpecsCardGrid</code> recebe o link da API na propriedade <code>apiURL</code>
      e busca o JSON. É esperado que a API retorne um array de objetos!
      Além disso ele espera que as 'keys' do JSON sejam informadas nas propriedades
      <code>titleKey</code>, <code>subTitleKey</code> e <code>descriptionKey</code>.<br>
      Exemplo: Se o json possuir <code>[{"animal":"Bird"},{"animal":"Horse"}]</code>
      é possível colocar 'Bird' e 'Horse' no titulo dos cards ao especificar
      <code>titleKey="animal"</code>.
    </p>

    <SpecsCardGrid apiURL="https://fakestoreapi.com/products" titleKey="title" subTitleKey="category"
      descriptionKey="description" />
  </div>
</template>