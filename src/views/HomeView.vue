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
  
];

// Links das mídias sociais
const instagramLink = "https://www.instagram.com/utfpr_/?utm_source=ig_embed&ig_rid=cd25a08c-25ca-4a8e-b525-eb5f91b72d21";
const youtubeLink = "https://www.youtube.com/watch?v=rJq3sLTMYc4&list=UUTFRS2ASeWoQSwzBkx2dPIg";

// Função para redirecionar para a página de cursos
const redirectToCourses = () => {
  router.push({ name: "Courses" });
};
</script>