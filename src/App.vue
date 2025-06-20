<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from '@/components/NavBar.vue'
import AppCarousel from '@/components/AppCarousel.vue'

const { t } = useI18n()

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}
</script>

<template>
  <div :class="darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'">
    <h1>{{ t("welcome") }}</h1>
    <Navbar :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" />
    <AppCarousel :darkMode="darkMode" />
    <RouterView :darkMode="darkMode" />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
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
.bg-dark {
  background-color: #121212;
}

.bg-light {
  background-color: #f8f9fa;
}

.min-vh-100 {
  min-height: 100vh;
}
</style>
