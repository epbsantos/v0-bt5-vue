<template>
  <div class="page-background">
    <div class="container mt-4 mb-5 task-app-container">
      <h1 class="mb-2 text-center task-app-title">
        <i class="bi bi-check2-square me-2"></i>{{ t('tasks.title') }}
      </h1>
      <p class="text-center text-muted mb-4 subtitle">{{ t('tasks.subtitle') }}</p>

      <div class="input-group mb-4 shadow-sm">
        <input
          type="text"
          class="form-control form-control-lg"
          :placeholder="t('tasks.placeholder')"
          v-model="novaTarefaTexto"
          @keyup.enter="adicionarTarefa"
          aria-label="Adicionar nova tarefa"
        />
        <button class="btn btn-primary btn-lg" type="button" @click="adicionarTarefa">
          <i class="bi bi-plus-lg me-1"></i> {{ t('tasks.add_button') }}
        </button>
      </div>

      <div class="text-end mb-3" v-if="tarefas.length > 0">
        <button
          class="btn btn-outline-secondary btn-sm"
          @click="removerConcluidas"
          :disabled="!existemConcluidas"
          :title="t('tasks.clear_button')"
        >
          <i class="bi bi-check2-all me-1"></i> {{ t('tasks.clear_button') }}
        </button>
      </div>

      <transition-group name="list" tag="ul" class="list-group shadow-sm">
        <li
          v-for="tarefa in tarefas"
          :key="tarefa.id"
          class="list-group-item d-flex justify-content-between align-items-center list-item-custom"
          :class="{ 'tarefa-concluida': tarefa.concluida }"
        >
          <div class="form-check flex-grow-1 me-3">
            <input
              class="form-check-input completion-checkbox"
              type="checkbox"
              :id="'complete-' + tarefa.id"
              v-model="tarefa.concluida"
              title="Marcar como concluída"
            />
            <label class="form-check-label task-text" :for="'complete-' + tarefa.id" @click.prevent="toggleConcluida(tarefa.id)">
              {{ tarefa.texto }}
            </label>
          </div>
          <button class="btn btn-outline-danger btn-sm delete-button" @click="removerTarefa(tarefa.id)" title="Excluir esta tarefa">
            <i class="bi bi-x-lg"></i>
          </button>
        </li>
        <li v-if="tarefas.length === 0" class="list-group-item text-center text-muted list-item-custom">
          <i class="bi bi-emoji-sunglasses me-2"></i> {{ t('tasks.empty_state') }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

const tarefas = ref<Tarefa[]>([]);
const novaTarefaTexto = ref('');
const localStorageKey = 'minhas-tarefas-utfpr-v3';

const adicionarTarefa = () => {
  const texto = novaTarefaTexto.value.trim();
  if (texto === '') return;
  tarefas.value.unshift({
    id: Date.now(),
    texto: texto,
    concluida: false,
  });
  novaTarefaTexto.value = '';
};

const removerTarefa = (idParaRemover: number) => {
  tarefas.value = tarefas.value.filter(tarefa => tarefa.id !== idParaRemover);
};

const toggleConcluida = (id: number) => {
  const tarefa = tarefas.value.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
};

const existemConcluidas = computed(() => tarefas.value.some(t => t.concluida));

const removerConcluidas = () => {
  tarefas.value = tarefas.value.filter(tarefa => !tarefa.concluida);
};

const carregarTarefas = () => {
  const tarefasSalvas = localStorage.getItem(localStorageKey);
  if (tarefasSalvas) {
    try {
      tarefas.value = JSON.parse(tarefasSalvas);
    } catch (e) {
      console.error("Erro ao carregar tarefas:", e);
      tarefas.value = [];
    }
  }
};

onMounted(carregarTarefas);

watch(
  tarefas,
  (novaLista) => {
    localStorage.setItem(localStorageKey, JSON.stringify(novaLista));
  },
  { deep: true }
);
</script>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
}

.page-background {
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 4rem;
  box-sizing: border-box; 
  position: relative;
  background: linear-gradient(
    135deg,
    #FFF3B0 10%, 
    #F0F9FF 30%,
    #BDE0FE 60%,
    #FFC4D6 100%
  );
  background-attachment: fixed;
}

.task-app-container {
  max-width: 700px; 
  margin-left: auto;
  margin-right: auto;
  background-color: var(--bs-body-bg, #fff); 
  padding: 2rem; 
  border-radius: 0.75rem; 
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15); 
  position: relative; 
  z-index: 1; 
}

.task-app-title {
  color: var(--bs-body-color, #212529); 
}

.subtitle {
  font-size: 0.95rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.list-group {
  border: none;
  padding-left: 0;
}

.list-item-custom {
  background-color: var(--bs-body-bg, #fff);
  border: 1px solid var(--bs-border-color-translucent, #dee2e6);
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.3s ease-in-out, border-left-color 0.3s ease-in-out;
  padding: 0.75rem 0.5rem 0.75rem 0.75rem;
  border-left: 5px solid transparent;
  display: flex;
  align-items: center;
}

.list-item-custom:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.form-check {
  display: flex;
  align-items: center;
}

.completion-checkbox {
  margin-right: 0.75rem !important;
  cursor: pointer;
  transform: scale(1.1);
}

.task-text {
  cursor: pointer;
  padding-left: 0;
  word-break: break-word;
  flex-grow: 1;
  transition: color 0.2s ease-in-out;
  display: inline-block;
  vertical-align: middle;
}

.tarefa-concluida {
  background-color: var(--bs-success-bg-subtle, #d1e7dd);
  opacity: 0.8;
  border-left-color: var(--bs-success, #198754);
}

.tarefa-concluida .task-text {
  text-decoration: line-through;
  color: var(--bs-secondary-color, #6c757d);
}

.delete-button {
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  padding: 0.25rem 0.5rem;
  line-height: 1;
  margin-left: auto;
}

.list-item-custom:hover .delete-button {
  opacity: 1;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateX(20px);
}

.list-leave-active {
  position: absolute;
  width: calc(100% - 4rem);
  left: 2rem;
  right: 2rem;
}

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
</style>