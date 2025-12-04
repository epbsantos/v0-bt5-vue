<script setup lang="ts">
import { ref } from "vue";

const currentSlide = ref(0);

const slides = [
  {
    image:
      "https://storage.alboom.ninja/sites/33900/albuns/693318/utfpr_-_toledo_bloco_a__5_.png?t=1597589780",
  },
  {
    image:
      "https://storage.alboom.ninja/sites/33900/albuns/693318/utfpr_-_toledo__1_.png?t=1597589776",
  },
  {
    image:
      "https://storage.alboom.ninja/sites/33900/albuns/693318/utfpr_-_toledo__6_.png?t=1597589777",
  },
  {
    image:
      "https://gazetadetoledo.com.br/wp-content/uploads/2024/09/UTFPR_campus_Toledo_foto_Carlos_Rodrigues.jpg",
  },
  {
    image: "https://integrae.com.br/wp-content/uploads/2019/07/raposa.png",
  },
  {
    image:
      "https://integrae.com.br/wp-content/uploads/2018/11/WhatsApp-Image-2018-11-23-at-12.19.44-1024x683.jpeg",
  },
  {
    image:
      "https://www.utfpr.edu.br/noticias/toledo/raposa/@@images/image-1280-4e89e65ff82c080be26c69c4a55f46fe.jpeg",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};
const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<template>
  <div class="carousel">
    <div
      class="slides-container"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" />
        <div class="slide-content"></div>
      </div>
    </div>

    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>

    <div class="indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>

@import "@/styles/AppCarousel.css";
</style>
