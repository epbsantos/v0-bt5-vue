<template>
  <main>
    <!-- Adiciona o carrossel -->
    <h1 class="text-center mb-4">{{ t("welcome") }}</h1>

    <AppCarousel />

    <!-- Texto de boas-vindas acima dos cursos -->
    <div class="container py-5">
      <h1>{{ t("homePage.title") }}</h1>
      <p>{{ t("homePage.welcomeMessage") }}</p>
    </div>

    <!-- Carrossel de cursos -->
    <div class="container py-5">
      <h2>{{ t("Cursos") }}</h2>
      <div id="courses-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(course, index) in courses"
            :key="course.id"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <img :src="course.image" class="d-block w-100" :alt="course.name" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ course.name }}</h5>
              <p>{{ course.description }}</p>
              <button
                class="btn btn-primary"
                @click="redirectToCourses()"
              >
                {{ t("Saiba Mais") }}
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#courses-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ t("homePage.previous") }}</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#courses-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ t("homePage.next") }}</span>
        </button>
      </div>
    </div>

    
    <div class="container py-5">
      <h2>{{ t("Notícias") }}</h2>
      <NewsView />
    </div>

    
    <div class="container py-5">
      <h2>{{ t("Mídias Sociais") }}</h2>
      <div class="d-flex justify-content-center mb-4">
        <a :href="instagramLink" target="_blank" class="btn btn-outline-primary me-3">
          Instagram
        </a>
        <a :href="youtubeLink" target="_blank" class="btn btn-outline-danger">
          YouTube
        </a>
      </div>
      <div class="row">
        <div class="col-md-6">
          
          <iframe
            src="https://www.instagram.com/utfpr_/?utm_source=ig_embed&ig_rid=cd25a08c-25ca-4a8e-b525-eb5f91b72d21"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
          ></iframe>
        </div>
        <div class="col-md-6">
          
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/rJq3sLTMYc4?list=UUTFRS2ASeWoQSwzBkx2dPIg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import AppCarousel from "@/components/AppCarousel.vue";
import NewsView from "@/views/NewsView.vue"; 

const { t } = useI18n();
const router = useRouter();


const courses = [
  {
    id: 1,
    name: "Engenharia de Computação",
    description: "O curso de Engenharia da Computação é uma graduação de bacharelado que integra conhecimentos de ciência da computação e engenharia elétrica para formar profissionais capazes de projetar, desenvolver e gerenciar sistemas de hardware e software.",
    image: "https://imgs.search.brave.com/XioYAEHkOqmgFoyaubdFEzPuQAjhoFJUtovkBE3lNuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/Nzk3Mjk0Ny9wdC9m/b3RvL2NvbXB1dGVy/LXRlY2huaWNpYW4t/Zml4aW5nLWEtbmV0/d29yay1zZXJ2ZXIt/YXQtdGhlLW9mZmlj/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9REpLNnNHSE9a/LXFzOUpXWk5jNjlT/ODRnZmlNZHZ5aUsx/QkhwVzExWnNzUT0",
  },
  {
    id: 2,
    name: "Engenharia Eletrônica",
    description: "O curso de Engenharia Eletrônica é focado no projeto, desenvolvimento e manutenção de sistemas e dispositivos eletrônicos, utilizando princípios da física e matemática para criar soluções tecnológicas inovadoras.",
    image: "https://static.vecteezy.com/ti/fotos-gratis/t2/24084039-fechar-se-mao-do-a-eletrico-engenheiro-verificacao-dentro-ao-controle-painel-ou-automacao-caixa-conceito-do-eletricidade-manutencao-servico-criada-de-generativo-ai-tecnologia-foto.jpg",
  },
  {
    id: 3,
    name: "Engenharia Civil",
    description: "O curso de Engenharia Civil é uma graduação da área de ciências exatas focada no planejamento, projeto, construção e manutenção de infraestruturas físicas, como edifícios, pontes, estradas e sistemas de saneamento.",
    image: "https://piniweb.com.br/wp-content/uploads/2025/08/FOTO-4-800x400.jpg",
  },
  {
    id: 4,
    name: "Engenharia de Bioprocessos e Biotecnologia",
    description: "O curso de Engenharia de Bioprocessos e Biotecnologia é uma graduação de nível superior (bacharelado) que forma profissionais aptos a desenvolver e otimizar processos industriais e produtos que utilizam organismos vivos, como células e microrganismos, ou seus derivados.",
    image: "https://thumbs.dreamstime.com/b/operador-de-engenharia-e-ecr%C3%A3s-inform%C3%A1ticos-com-sistemas-produ%C3%A7%C3%A3o-modernos-seguindo-ind%C3%BAstria-engenheiros-controlo-f%C3%A1brica-263661543.jpg",
  },
  {
    id: 5,
    name: "Licenciatura em Matemática",
    description: "O curso de Licenciatura em Matemática tem como objetivo principal a formação de professores para atuar na Educação Básica (ensino fundamental e médio).",
    image: "https://static.vecteezy.com/ti/vetor-gratis/t1/53096605-matematica-geometria-grafico-e-formas-em-quadro-negro-fundo-conjunto-ciencia-rabisco-mao-desenhado-esboco-elementos-estude-teoria-formula-calculos-vetor.jpg",
  },
  {
    id: 6,
    name: "Tecnologia em Processos Químicos",
    description: "O curso de Tecnologia em Processos Químicos forma profissionais capazes de operar, controlar e gerenciar processos industriais, atuando desde a pesquisa e desenvolvimento até a produção e o controle de qualidade em diversas indústrias, como petroquímica, alimentícia, farmacêutica e de tratamento de efluentes.",
    image: "https://thumbs.dreamstime.com/b/quadro-negro-do-laborat%C3%B3rio-de-qu%C3%ADmica-31258763.jpg",
  },
  {
    id: 7,
    name: "Tecnologia em Sistemas para Internet",
    description: "O curso de Tecnologia em Sistemas para Internet capacita profissionais a projetar, desenvolver e manter sistemas e aplicativos para a web, como sites, portais, e-commerces e intranets.",
    image: "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/19/2023/12/ams-dev.jpg",
  },
];

// Links das mídias sociais
const instagramLink = "https://www.instagram.com/utfpr_/?utm_source=ig_embed&ig_rid=cd25a08c-25ca-4a8e-b525-eb5f91b72d21";
const youtubeLink = "https://www.youtube.com/watch?v=rJq3sLTMYc4&list=UUTFRS2ASeWoQSwzBkx2dPIg";

// Função para redirecionar para a página de cursos
const redirectToCourses = () => {
  router.push({ name: "Courses" });
};
</script>