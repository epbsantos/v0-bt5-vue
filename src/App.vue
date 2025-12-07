<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Navbar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const useMainLayout = computed(() => route.name !== 'Tasks');

const contador = ref(0);
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    
    <ChatBot/>

    <Navbar />
    
    <div class="flex-fill d-flex flex-column">
      <main class="flex-fill" :class="{ 'container py-4': useMainLayout }">

        <button 
          @click="contador++" 
          class="btn btn-primary mb-3"
        >
          Clique aqui ({{ contador }})
        </button>

        <p class="small text-secondary mb-3">
  Rota atual: {{ route.name }}
</p>

        <RouterView />
      </main>
    </div>

    <FooterBar />
  </div>
</template>
