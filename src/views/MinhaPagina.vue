<template>
  <div class="container mt-5">
    <h1>Bem-vindo à Minha Página! <i class="bi bi-house-door-fill"></i></h1>
    <p>{{ t("MinhaPagina.mensagem") }}</p>
    <p>
      Aqui está um ícone de estrela:
      <i class="bi bi-star-fill text-warning"></i>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
