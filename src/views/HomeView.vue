<template>
  <main :class="props.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'">
    <div class="container py-5">
      <h1>{{ t('homePage.title') }}</h1>
      <p v-html="t('homePage.paragraph1')"></p>
      <p v-html="t('homePage.paragraph2')"></p>
      <p v-html="t('homePage.paragraph3')"></p>
      <p v-html="t('homePage.paragraph4')"></p>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from "@/components/FooterBar.vue";

const props = defineProps<{ darkMode: boolean }>()

const { t } = useI18n()
</script>

<style scoped>
.bg-dark {
  background-color: #121212;
  color: #eee;
}

.bg-light {
  background-color: #f8f9fa;
  color: #212529;
}

h1 {
  font-family: "Oswald", serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
