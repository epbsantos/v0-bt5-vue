import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

//const baseUrl = import.meta.env.VITE_BUILD_ADDRESS; // Mantenha esta linha se estiver usando variável de ambiente
const baseUrl = ""; // Mantenha esta linha se estiver usando um base URL vazio

export const routes: Array<RouteRecordRaw> = [
  {
    path: `${baseUrl}/`,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/about`,
    children: [
      {
        path: "",
        name: "About",
        component: () => import("@/views/AboutView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/contacts`,
    children: [
      {
        path: "",
        name: "Contacts",
        component: () => import("@/views/ContactView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/news`,
    children: [
      {
        path: "",
        name: "News",
        component: () => import("@/views/NewsView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/search`,
    meta: { hidden: true },
    children: [
      {
        path: "",
        name: "Search",
        component: () => import("@/views/SearchView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/cards`,
    children: [
      {
        path: "",
        name: "Cards",
        component: () => import("@/views/CardsView.vue"),
      },
    ],
  },
  // --- Adição da sua nova página (MinhaPagina.vue) ---
  {
    path: `${baseUrl}/minha-pagina`, // A URL que você vai acessar no navegador
    children: [
      {
        path: "", // O caminho vazio significa que a rota principal '/minha-pagina' usa este componente
        name: "MinhaPagina", // O nome da sua rota (para navegação programática e i18n)
        component: () => import("@/views/MinhaPagina.vue"), // Aponta para o arquivo que você chamou de MinhaPagina.vue
      },
    ],
  },
  // ----------------------------------------------------
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
