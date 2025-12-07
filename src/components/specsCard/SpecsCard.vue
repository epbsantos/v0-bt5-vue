<script setup lang="ts">
withDefaults(
    defineProps<{
        item: Record<string, unknown>
        imgSrcKey?: string
        imgAltKey?: string
        titleKey?: string
        subTitleKey?: string
        descriptionKey?: string
        widith?: string
        round?: string
    }>(), {
    imgSrcKey: '',
    imgAltKey: '',
    titleKey: '',
    subTitleKey: '',
    descriptionKey: '',
    widith: '20em',
    round: '1em',
})
</script>

<template>
    <div class="card specs-card">
        <img v-if="imgSrcKey.length != 0" :src="item[imgSrcKey] as string" class="card-img-top specs-card-img"
            :alt="item[imgAltKey] as string">
        <div class="card-body specs-card-body">
            <h5 v-if="titleKey.length != 0" class="card-title">{{ item[titleKey] }}</h5>
            <h6 v-if="subTitleKey.length != 0" class="card-subtitle mb-2 text-muted">{{ item[subTitleKey] }}</h6>
            <p v-if="descriptionKey.length != 0" class="card-text">{{ item[descriptionKey] }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<style scoped>
.specs-card {
  width: v-bind(widith);
  background-color: #e9f0f7;
  color: var(--bs-body-color); 
  border-radius: v-bind(round);
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.specs-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.35);
}

.specs-card-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.specs-card-body {
  padding: v-bind(round);
}

html[data-bs-theme="dark"] .specs-card {
  background-color: #1e2a35;
  color: #f0f0f0;
}



</style>