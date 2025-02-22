import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";

// Definir as traduções para o idioma
const messages = {
  en: {
    welcome: "Welcome to our website!",
    language: "Language",
    navbar: {
      darkMode: "Dark Mode",
    },
    routes: {
      home: "Home",
      about: "About",
      contact: "Contact",  // Usando 'contact'
    },
    footer: {
      title: "Footer Bar",
      description: "Footer bar created for page styling. Edit it for better use.",
      contact: "CONTACT",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "epsantos@utfpr.edu.br",
    },
  },
  pt: {
    welcome: "Bem-vindo ao nosso site!",
    language: "Idioma",
    navbar: {
      darkMode: "Modo Escuro",
    },
    routes: {
      home: "Início",
      about: "Sobre",
      contact: "Contato",  // Usando 'contact'
    },
    footer: {
      title: "Barra de rodapé",
      description: "Footer bar criada para estilização da página. Faça sua edição para melhor uso.",
      contact: "CONTATO",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "epsantos@utfpr.edu.br",
    },
  },
  es: {
    welcome: "¡Bienvenido a nuestro sitio web!",
    language: "Idioma",
    navbar: {
      darkMode: "Modo Oscuro",
    },
    routes: {
      home: "Inicio",
      about: "Sobre",
      contact: "Contacto",  // Usando 'contact'
    },
    footer: {
      title: "Barra de pie",
      description: "Barra de pie creada para la estilización de la página. Edítelo para mejor uso.",
      contact: "CONTACTO",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "epsantos@utfpr.edu.br",
    },
  },
};

const i18n = createI18n({
  legacy: false, // Necessário para Composition API
  locale: "pt", // Idioma padrão
  fallbackLocale: "en", // Idioma de fallback
  messages, // Mensagens definidas
});

const app = createApp(App)
  .use(router)
  .use(i18n);

router.isReady().then(() => app.mount("#app"));
