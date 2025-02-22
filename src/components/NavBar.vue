<script lang="ts" setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";
import { useI18n } from "vue-i18n";  // Importando useI18n para tradução

const siteUrl = import.meta.env.VITE_BUILD_ADDRESS || "";
const router = useRouter();
const { t, locale } = useI18n();  // Adicionando 'locale' para mudar o idioma

const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

const darkMode = ref(false);

// Lista de idiomas disponíveis
const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

// Estado para controlar o dropdown
const isLanguageOpen = ref(false);

// Função para trocar o idioma
const changeLanguage = (lang: string) => {
  locale.value = lang; // Atualiza o idioma via vue-i18n
  isLanguageOpen.value = false; // Fecha o dropdown após a seleção
  localStorage.setItem("language", lang); // Opcional: salva a preferência do usuário
};

// Detectar o tema atual do navegador
const detectThemeFromSystem = () => {
  const isDarkModePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
  darkMode.value = isDarkModePreferred;
  applyTheme();
};

// Aplica o tema atual
const applyTheme = () => {
  const theme = darkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
};

// Atualiza o tema quando o switch for alterado
watch(darkMode, applyTheme);

// Detecta a mudança de preferência do sistema
onMounted(() => {
  detectThemeFromSystem(); // Aplica o tema do navegador inicialmente
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", detectThemeFromSystem);

  // Carrega o idioma salvo, se houver
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
    locale.value = savedLanguage;
  }
});
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">V0: VUE3 + BT5</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item text-uppercase" v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="nav-link" :title="route.children[0]?.name" :class="{ active: isActive(route.path) }">
              <i class="bi bi-house-fill" v-if="route.path === `${siteUrl}/`"></i>
              {{ route.children[0]?.name ? t(`routes.${route.children[0].name.toLowerCase()}`) : "" }}
            </router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <div class="language-selector">
            <button class="btn btn-outline-secondary dropdown-toggle" @click="isLanguageOpen = !isLanguageOpen" :aria-expanded="isLanguageOpen">
              {{ t('language') }}: {{ languages.find(lang => lang.code === locale.value)?.name || "Português" }} <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" :class="{ show: isLanguageOpen }" @click.stop>
              <li v-for="lang in languages" :key="lang.code" class="dropdown-item" @click="changeLanguage(lang.code)">
                {{ lang.name }}
              </li>
            </ul>
          </div>
          <div class="form-check form-switch ms-3">
            <input class="form-check-input" type="checkbox" id="darkModeSwitch" v-model="darkMode">
            <label class="form-check-label" for="darkModeSwitch">
              {{ t('navbar.darkMode') }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

.form-switch {
  margin-top: 8px;
}

/* Estilização do dropdown de idioma */
.language-selector {
  position: relative;
  margin-right: 1rem;
}

.btn-outline-secondary {
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  transition: all 0.3s ease;
}

.btn-outline-secondary:hover {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  background-color: #343a40; /* Cor de fundo escura, ajustável para modo escuro */
  border: 1px solid #495057;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  display: none;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #495057;
  color: #ffffff;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-bottom: 0;
  border-left: 4px solid transparent;
}

/* Ajuste para modo escuro */
[data-bs-theme="dark"] .btn-outline-secondary {
  border-color: #ffffff;
  color: #ffffff;
}

[data-bs-theme="dark"] .btn-outline-secondary:hover {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

[data-bs-theme="dark"] .dropdown-menu {
  background-color: #212529; /* Cor de fundo ainda mais escura para modo escuro */
  border-color: #343a40;
}

[data-bs-theme="dark"] .dropdown-item:hover {
  background-color: #343a40;
}
</style>