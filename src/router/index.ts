import { createRouter, createWebHistory } from "vue-router";

const baseUrl = "";
export const routes = [
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
  {
    path: `${baseUrl}/courses`, 
    children: [
      {
        path: "",
        name: "Courses",
        component: () => import("@/views/CoursesView.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/tasks`,
    children: [
      {
        path: "",
        name: "Tasks",
        component: () => import("@/views/TasksView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});