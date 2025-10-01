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
.ag-format-container {
  width: 100%;
  max-width: 1142px;
  margin: 0 auto;
  padding: 0 15px;
}

.ag-courses_box {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px 0;
}

.ag-courses_item {
  flex-basis: calc(33.33333% - 30px);
  margin: 0 15px 30px;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.ag-courses-item_link {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 30px 20px;
  background-color: var(--bs-body-bg);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none;
}

.ag-courses-item_link:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
  transform: scale(10);
}

.ag-courses-item_title {
  flex-grow: 1;
  min-height: 87px;
  margin: 0 0 15px;
  overflow: hidden;
  font-weight: bold;
  font-size: 28px;
  color: var(--bs-body-color);
  z-index: 2;
  position: relative;
}

.ag-courses-item_type {
  font-size: 16px;
  font-weight: 500;
  color: var(--bs-secondary-color);
  text-align: center;
  z-index: 2;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;
  border-radius: 50%;
  transition: all 0.5s ease;
}

@media only screen and (max-width: 979px) {
  .ag-courses_item {
    flex-basis: calc(50% - 30px);
  }
}

@media only screen and (max-width: 639px) {
  .ag-courses_item {
    flex-basis: 100%;
  }
}
</style>