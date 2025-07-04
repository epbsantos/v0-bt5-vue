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
      <h1 class="mb-4 text-start">{{ t("aboutPage.title2") }}</h1>
      <p v-html="t('aboutPage.paragraph3')"></p>
      <h1 class="mb-4 text-start">{{ t("aboutPage.title3") }}</h1>
      <p v-html="t('aboutPage.paragraph4')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title4") }}</h2>
      <p v-html="t('aboutPage.paragraph5')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title5") }}</h2>
      <p v-html="t('aboutPage.paragraph6')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title6") }}</h2>
      <p v-html="t('aboutPage.paragraph7')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title7") }}</h2>
      <p v-html="t('aboutPage.paragraph8')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title8") }}</h2>
      <p v-html="t('aboutPage.paragraph9')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title9") }}</h2>
      <p v-html="t('aboutPage.paragraph10')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title10") }}</h2>
      <p v-html="t('aboutPage.paragraph11')"></p>
      <h2 class="mt-4">{{ t("aboutPage.title11") }}</h2>
      <p v-html="t('aboutPage.paragraph12')"></p>
       <h2 class="mt-4">{{ t("aboutPage.title12") }}</h2>
      <p v-html="t('aboutPage.paragraph13')"></p>
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
