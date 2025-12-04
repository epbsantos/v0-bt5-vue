<template>
  <div class="container py-4">
    <div id="newsCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(chunk, index) in chunkedNews"
          :key="index"
        >
          <div class="row">
            <div class="col-md-4" v-for="news in chunk" :key="news.id">
              <a :href="news.link" target="_blank" rel="noopener" class="card-link">
                <div class="card h-100 shadow-sm">
                  <img :src="news.image" class="card-img-top" :alt="news.title" />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ news.title }}</h5>
                    <p class="text-muted mb-1">
                      <i class="bi bi-clock"></i> {{ news.date }}
                    </p>
                    <p class="card-text">{{ news.description }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">{{ t('newsPage.carousel.prev') }}</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">{{ t('newsPage.carousel.next') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from "vue-i18n"
import newsData from '@/data/news.json'

const { t } = useI18n()

const newsList = computed(() => newsData.map(news => ({
  ...news,
  title: t(news.title),
  description: t(news.description)
})))


const chunkedNews = computed(() => {
  const chunkSize = 3
  const chunks = []
  for (let i = 0; i < newsList.value.length; i += chunkSize) {
    chunks.push(newsList.value.slice(i, i + chunkSize))
  }
  return chunks
})

</script>

<style scoped>
@import "@/styles/news.css";
</style>
