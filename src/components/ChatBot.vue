<template>
  <div>
    <!-- Botão de chat fixo no canto inferior direito -->
    <button class="chat-button" @click="open = !open">
      <i class="bi bi-chat-dots-fill"></i>
    </button>

    <!-- Janela de chat (aparece quando `open` for true) -->
    <div v-if="open" class="chat-window">
      <div class="chat-header">Atendimento</div>
      <div class="chat-body">
        <!-- Espaço para as mensagens futuras -->
        <p>O chat estará disponível em breve!</p>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Digite sua mensagem..." disabled />
        <button disabled>
          <i class="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false);
</script>

<style scoped>
@import "@/styles/ChatBot.css";

</style>
