import { createRouter, createWebHistory } from "vue-router";
import BlogList from '@/views/blog/BlogList.vue';
import BlogPost from '@/views/blog/BlogPost.vue';

//const baseUrl = import.meta.env.VITE_BUILD_ADDRESS;
const baseUrl = "";
export const routes = [
  {
    path: `${baseUrl}/`,
    //component: () => import("@/layouts/Default.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/views/HomeView.vue") }
    ],
  },
  {
    path: `${baseUrl}/about`,
    //component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/HomeView.vue") }
    ],
  },

  {
    path: `${baseUrl}/contacts`,
    //component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "Contacts", component: () => import("@/views/HomeView.vue") },
    ],
  },
  { 
    path: '/blog', 
    component: BlogList 
  },
  { 
    path: '/blog/:id', 
    component: BlogPost 
  }
  
];


export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
