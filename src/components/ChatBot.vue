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
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  
  background: #007bff 
    url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Cpath%20fill='%23fff'%20d='M1%201h14v10H5l-4%204V1z'/%3E%3C/svg%3E")
    center center no-repeat;
      background-size: 60%;        
  cursor: pointer;
  z-index: 1000;
}

.chat-window {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 320px;
  height: 400px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.chat-header {
  padding: 10px;
  background: #007bff;
  color: white;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.chat-input {
  display: flex;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  border: none;
  padding: 10px;
}

.chat-input button {
  border: none;
  background: #007bff;
  color: white;
  padding: 0 16px;
  cursor: not-allowed;
}
</style>
