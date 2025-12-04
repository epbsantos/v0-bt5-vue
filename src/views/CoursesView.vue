<template>
  <div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item" v-for="curso in cursos" :key="curso.tituloKey">
        <a href="#" class="ag-courses-item_link">
          <div class="ag-courses-item_bg" :style="{ backgroundColor: curso.cor }"></div>

          <div class="ag-courses-item_title">
            {{ t(curso.tituloKey) }}
          </div>

          <div class="ag-courses-item_type">
            {{ t(curso.tipoKey) }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Curso {
  tituloKey: string;
  tipoKey: string;
  cor: string;
}

const cursos = ref<Curso[]>([
  {
    tituloKey: "courses.civil_eng",
    tipoKey: "courses.bachelor",
    cor: "#f9b234",
  },
  {
    tituloKey: "courses.comp_eng",
    tipoKey: "courses.bachelor",
    cor: "#3ecd5e",
  },
  {
    tituloKey: "courses.biopro_eng",
    tipoKey: "courses.bachelor",
    cor: "#e44002",
  },
  {
    tituloKey: "courses.electro_eng",
    tipoKey: "courses.bachelor",
    cor: "#952aff",
  },
  {
    tituloKey: "courses.math_lic",
    tipoKey: "courses.licentiate",
    cor: "#cd3e94",
  },
  {
    tituloKey: "courses.chem_proc_tec",
    tipoKey: "courses.technologist",
    cor: "#4c4ea9",
  },
  {
    tituloKey: "courses.web_sys_tec",
    tipoKey: "courses.technologist",
    cor: "#0E9594",
  },
]);
</script>

<style>
@import "@/styles/Courses.css";
</style>