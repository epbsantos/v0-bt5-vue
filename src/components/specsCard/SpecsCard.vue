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
    background-color: darkslategray;
    border-radius: v-bind(round);
}

.specs-card-body {
    padding: v-bind(round);
}

.specs-card-img {
    border-radius: v-bind(round) v-bind(round) 0em 0em;
}
</style>