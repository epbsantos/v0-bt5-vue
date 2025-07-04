import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { router } from "@/router";
import "bootstrap/scss/bootstrap.scss";
import translateFile from "@/i18n.json";
import ChatBot from '@/components/ChatBot.vue'


// Definir as traduções para o idioma
const messages = translateFile;
const availableLocales = Object.keys(messages);

// Função para determinar o idioma inicial
function getInitialLocale(): string {
  const savedLocale = localStorage.getItem("language");
  if (savedLocale && availableLocales.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language.split("-")[0];
  if (availableLocales.includes(browserLocale)) {
    return browserLocale;
  }

  return "pt"; // Idioma padrão de fallback
}

const i18n = createI18n({
  legacy: false, // Necessário para Composition API
  locale: getInitialLocale(), // Idioma padrão
  fallbackLocale: "pt", // Idioma de fallback
  messages, // Mensagens definidas
});

const app = createApp(App).use(router).use(i18n);
app.component('ChatBot', ChatBot)   // registro global

router.isReady().then(() => app.mount("#app"));
