<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SpecsCard from './SpecsCard.vue'

const props = defineProps<{
    apiURL: string
    titleKey: string
    subTitleKey: string
    descriptionKey: string
}>()

const specs = ref<Record<string, unknown>[]>([])

onMounted(async () => {
    const response = await fetch(props.apiURL)
    specs.value = await response.json()
})
</script>

<template>
    <div class="specs-card-grid">
        <SpecsCard v-for="(item, index) in specs" :key="index" :item="item" :title-key="titleKey"
            :sub-title-key="subTitleKey" :description-key="descriptionKey" />
    </div>
</template>

<style scoped>
.specs-card-grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 1em;
    gap: 1em;
}
</style>