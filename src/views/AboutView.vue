<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-start">{{ t("aboutPage.title") }}</h1>
    <div class="about-text">
      <p v-html="t('aboutPage.paragraph1')"></p>
      <p v-html="t('aboutPage.paragraph2')"></p>
    </div>
        <h1 class="mb-4 text-start">{{ t("aboutPage.tileutfpr") }}</h1>
    <div class="about-text">
      <p v-html="t('aboutPage.paragrafoutfpr')"></p>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.about-text {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
}
</style>
