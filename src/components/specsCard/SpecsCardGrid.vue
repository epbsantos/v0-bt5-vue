<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SpecsCard from './SpecsCard.vue'

const props = withDefaults(
    defineProps<{
        apiURL: string
        imgSrcKey?: string
        imgAltKey?: string
        titleKey?: string
        subTitleKey?: string
        descriptionKey?: string
        cardWidith?: string
        cardRound?: string
        margin?: string
    }>(), {
    imgSrcKey: '',
    imgAltKey: '',
    titleKey: '',
    subTitleKey: '',
    descriptionKey: '',
    cardWidith: '20em',
    cardRound: '1em',
    margin: '1em',
    
})

const specs = ref<Record<string, unknown>[]>([])

onMounted(async () => {
    const response = await fetch(props.apiURL)
    specs.value = await response.json()
})
</script>

<template>
    <div class="specs-card-grid">
        <SpecsCard v-for="(item, index) in specs" :key="index" :item="item" :img-src-key="imgSrcKey"
            :img-alt-key="imgAltKey" :title-key="titleKey" :sub-title-key="subTitleKey"
            :description-key="descriptionKey" :widith="cardWidith" :round="cardRound"/>
    </div>
</template>

<style scoped>

.specs-card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: v-bind(margin);
    max-width: 1400px;
    margin: 0 auto;
}

</style>