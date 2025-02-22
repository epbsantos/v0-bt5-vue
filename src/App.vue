<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue"; // Importe o Navbar.vue
import AppCarousel from "@/components/AppCarousel.vue"; // Renomeie Carousel para AppCarousel

const { t } = useI18n(); // Remova 'locale' pois não é usado
</script>

<template>
  <div id="app">
    <!-- Exibição do texto traduzido (mantido) -->
    <h1>{{ t("welcome") }}</h1>

    <!-- Barra de navegação com o dropdown de idioma estilizado, links e modo escuro -->
    <Navbar />

    <!-- Adiciona o carrossel -->
    <AppCarousel /> <!-- Atualize para AppCarousel -->

    <!-- Renderiza as rotas (HomeView, AboutView, ContactsView, etc.) -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Estilos para ajustar o layout, consistentes com a imagem */
#app {
  padding-top: 0; /* Remove qualquer padding indesejado no topo */
  background-color: #212529; /* Fundo escuro, consistente com a imagem */
  color: #ffffff; /* Texto branco, consistente com o design */
}

h1 {
  text-align: center;
  padding: 1rem 0;
  margin: 0; /* Remove margens padrão para alinhar com a navbar */
}

/* Ajuste adicional para o carrossel */
.carousel {
  margin: 20px auto; /* Adiciona um espaço acima e abaixo do carrossel */
}
</style>