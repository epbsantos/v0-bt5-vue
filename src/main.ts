import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";
//import "bootstrap-icons/font/bootstrap-icons.css";

const messages = {
  en: {
    welcome: "Welcome to our website!",
    language: "Language"
  },
  pt: {
    welcome: "Bem-vindo ao nosso site!",
    language: "Idioma"
  }
};

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App).use(router).use(i18n);
router.isReady().then(() => app.mount("#app"));
