<script setup lang="ts">
defineProps<{
    item: Record<string, unknown>
    titleKey: string
    subTitleKey: string
    descriptionKey: string
}>()
</script>

<template>
    <div class="card specs-card">
        <div class="card-body">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <h5 class="card-title">{{ item[titleKey] }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ item[subTitleKey] }}</h6>
            <p class="card-text">{{ item[descriptionKey] }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<style scoped>
.specs-card {
    width: 20em;
    background-color: darkslategray;
    padding: 1em;
    border-radius: 1em;
}
</style>