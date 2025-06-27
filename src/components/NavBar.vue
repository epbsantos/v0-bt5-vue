<script lang="ts" setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";
import { useI18n } from "vue-i18n";

// Props e emits corretamente tipados
const props = defineProps<{ darkMode: boolean }>();
const emit = defineEmits<{
  (event: "toggle-dark-mode"): void;
}>();

const router = useRouter();
const { t, locale } = useI18n();

const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

/* idiomas */
const languages = [
  { code: "pt" },
  { code: "en" },
  { code: "es" }
];

const isLanguageOpen = ref(false);

const changeLanguage = (lang: string) => {
  locale.value = lang;
  isLanguageOpen.value = false;
  localStorage.setItem("language", lang);
};

/* busca */
const query = ref("");
const filteredRoutes = computed(() =>
  routes.filter((r) =>
    r.children?.some((c) =>
      c.name?.toLowerCase().includes(query.value.toLowerCase())
    )
  )
);

// Detecta tema do sistema e aplica tema salvo no localStorage (só se não for controlado via props)
const detectThemeFromSystem = () => {
  if (typeof props.darkMode === "undefined") {
    emit("toggle-dark-mode");
  }
};

onMounted(() => {
  // Detecta alterações no tema do sistema para atualizar modo escuro
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", detectThemeFromSystem);

  // Aplica linguagem salva
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && languages.some((l) => l.code === savedLanguage)) {
    locale.value = savedLanguage;
  }
});

// Quando o darkMode muda (via props), atualiza o atributo data-bs-theme no <html>
watch(
  () => props.darkMode,
  (newVal) => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      newVal ? "dark" : "light"
    );
  },
  { immediate: true }
);

// Função para alternar tema, disparando evento para pai controlar estado
const toggleDarkMode = () => {
  emit("toggle-dark-mode");
};
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top"
    :class="props.darkMode ? 'navbar-dark navbar_dark_custom' : 'navbar-light navbar-light-custom'">
    <div class="container">
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" :aria-label="t('navbar.toggleNavigation')">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse d-flex justify-content-between">
        <!-- links das rotas -->
        <ul class="navbar-nav">
          <li v-for="route in routes" :key="route.path" class="nav-item text-uppercase">
            <router-link :to="route.path" class="nav-link" :class="{ active: isActive(route.path) }">
              {{
                route.children[0]?.name
                  ? t(`routes.${route.children[0].name.toLowerCase()}`)
                  : ""
              }}
            </router-link>
          </li>
        </ul>

        <!-- busca + idioma + switch tema -->
        <div class="d-flex align-items-center">
          <input v-model="query" :placeholder="t('navbar.search')" class="form-control me-2"/>

          <!-- dropdown resultados -->
          <ul v-if="query && filteredRoutes.length" class="search-results">
            <li v-for="r in filteredRoutes" :key="r.path">
              {{ t(`routes.${r.children[0].name.toLowerCase()}`) }}
            </li>
          </ul>

          <!-- seletor de idioma -->
          <div class="language-selector">
            <button class="btn btn-outline-secondary dropdown-toggle" @click="isLanguageOpen = !isLanguageOpen"
              :aria-expanded="isLanguageOpen">
              {{ t("language") }}:
              <span class="text-success">
                {{ t("languageNames." + locale) }}
              </span>
            </button>

            <ul class="dropdown-menu" :class="{ show: isLanguageOpen }" @click.stop>
              <li v-for="lang in languages" :key="lang.code">
                <button class="dropdown-item w-100 text-start" @click="changeLanguage(lang.code)">
                  {{ t("languageNames." + lang.code) }}
                </button>
              </li>
            </ul>
          </div>

          <!-- dark-mode switch -->
          <div class="form-check form-switch ms-3">
            <input id="darkModeSwitch" class="form-check-input" type="checkbox" :checked="props.darkMode"
              @change="toggleDarkMode" />
            <label class="form-check-label" for="darkModeSwitch">
              {{ t("navbar.darkMode") }}
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

.navbar-light-custom {
  background-color: #FFBE00 !important; 
}

.navbar_dark_custom {
  background-color: #FFBE00 !important;
}

input.form-control {
  background-color: #fff !important;
  color: #000 !important;
  border: none !important;
  box-shadow: none !important; 
  outline: none !important;    
}

input.form-control::placeholder {
  color: #000 !important;
  opacity: 1 !important; 
}

/* === links do menu: hover + ativo === */
.nav-link {
  position: relative;
  padding: 0.5rem 0.75rem;
  transition: color 0.3s;
  color: #000 !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: #0dcaf0;
  transition: width 0.3s;
}

.nav-link:hover {
  color: #0dcaf0;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active,
.nav-link.active {
  color: #0dcaf0;
}

.router-link-active::after,
.nav-link.active::after {
  width: 100%;
}

/* Dropdown idioma */
.language-selector {
  position: relative;
  margin-right: 1rem;
}

.btn-outline-secondary {
  background: transparent;
  transition: 0.3s;
}

.btn-outline-secondary:hover {
  color: #000;
}

.dropdown-menu {
  min-width: 150px;
  background: #343a40;
  display: none;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  color: #fff;
}

.dropdown-item:hover {
  background: #495057;
}

/* resultado da busca */
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  width: 100%;
}

.dark-results {
  background: #222;
  color: #ddd;
}

.form-check.form-switch {
  display: inline-flex !important;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  color: #000 !important;
}

.language-selector .btn {
  background-color: #fff !important;
  color: #000 !important;
  border: 1px solid #ccc !important;
}

.language-selector .btn:hover {
  background-color: #f1f1f1 !important;
  color: #000 !important;
}

.language-selector .dropdown-menu {
  background-color: #fff !important;
  color: #000 !important;
  border: 1px solid #ccc !important;
}

.language-selector .dropdown-item {
  color: #000 !important;
  background-color: #fff !important;
}

.language-selector .dropdown-item:hover {
  background-color: #f1f1f1 !important;
  color: #000 !important;
}


</style>
