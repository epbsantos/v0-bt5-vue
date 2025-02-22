<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref(0)
const slides = [
  { image: 'https://imgur.com/cfAFVYp.jpeg', title: 'UTFPR', description: 'UTFPR Entrada' },
  { image: 'https://imgur.com/EqzHwzW.jpeg', title: 'A.A.A.T', description: 'TUT' },
  { image: 'https://imgur.com/WrmGgEC.jpeg', title: 'UTFPR', description: 'UTFPR Bloco A' }
]

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
const goToSlide = (index: number) => { currentSlide.value = index }
</script>

<template>
  <div class="carousel">
    <div class="slides-container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="slide"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="slide-content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
    
    <div class="indicators">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        :class="{ 'active': index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: auto;
}

.slide-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicators span {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
}

.indicators span.active {
  opacity: 1;
}
</style>