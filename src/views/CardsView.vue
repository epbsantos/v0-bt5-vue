<script setup lang="ts">
import SpecsCardGrid from '@/components/specsCard/SpecsCardGrid.vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="container mt-5">
    <h1>Cards</h1>

    <p>{{ t("Cards")}}
      
    </p>

    <SpecsCardGrid apiURL="https://fakestoreapi.com/products"
      imgSrcKey="image"
      titleKey="title" subTitleKey="category"
      descriptionKey="description" />
  </div>
</template>


