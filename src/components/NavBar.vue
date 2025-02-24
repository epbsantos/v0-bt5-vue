<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";
import { ref } from 'vue';
import SearchComponent from "@/SearchComponent.vue";



const siteUrl = import.meta.env.VITE_BUILD_ADDRESS;

const router = useRouter();
const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

const darkMode = ref(false);

const toggleDarkMode = () => {
  //document.body.classList.toggle('bg-dark', darkMode.value);
  if (darkMode.value) {
    document.documentElement.setAttribute("data-bs-theme", "dark");  
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
  
  
};
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
            <router-link :to="route.path" class="nav-link" :title="route.children[0].name"
              :class="{ active: isActive(route.path) }">
              <i class="bi bi-house-fill" v-if="route.path === `${siteUrl}/`"></i>
              {{ route.path !== `${siteUrl}/` ? route.children[0].name : "" }}
            </router-link>
          </li>
        </ul>  
          
          <SearchComponent class="ms-3" />

        

            <div class="form-check form-switch ms-auto">
              <input 
                class="form-check-input" 
                type="checkbox" 
                id="darkModeSwitch" 
                v-model="darkMode" 
                @change="toggleDarkMode"
              >
              <label class="form-check-label" for="darkModeSwitch">
                Dark Mode
              </label>
              </div>
                   
    </div>
  </div>
</nav>

</template>
<style scoped>
/* Ajustes de estilo personalizados, se necessário */
.navbar {
  padding: 0.5rem 1rem;
}

.form-switch {
  margin-top: 8px; /* Para dar um pequeno espaço entre o toggle e os links */
  
}
</style>
