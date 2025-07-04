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
      <code>imgSrcKey</code>, <code>imgAltKey</code>, <code>titleKey</code>,
      <code>subTitleKey</code> e <code>descriptionKey</code> (todas são opcionais,
      omitir a propriedade omite o elemento do card).<br>
      Exemplo: Se o json possuir <code>[{"animal":"Bird"},{"animal":"Horse"}]</code>
      é possível colocar 'Bird' e 'Horse' no titulo dos cards ao especificar
      <code>titleKey="animal"</code>.<br>
      Também é possível personalizar algumas dimenssões através das seguintes propriedades:
      <code>cardWidith="20em" cardRound="1em" gap="1em" margin="1em"</code> (exemplo com
      os valores padrão).
    </p>

    <SpecsCardGrid apiURL="https://fakestoreapi.com/products"
      imgSrcKey="image"
      titleKey="title" subTitleKey="category"
      descriptionKey="description" />
  </div>
</template>