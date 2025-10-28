<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Navbar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const useMainLayout = computed(() => route.name !== 'Tasks');
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    
    <ChatBot/>

    <Navbar />
    
    <div class="flex-fill d-flex flex-column">
      <main class="flex-fill" :class="{ 'container py-4': useMainLayout }">
        <RouterView />
      </main>
    </div>

    <FooterBar />
  </div>
</template>