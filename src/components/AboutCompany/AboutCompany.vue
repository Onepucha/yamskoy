<template>
    <div>
        <div class="col-lg-24 col-xs-12" v-for="(about, index) in abouts" :key="index">
            <h3 class="h3">{{ about.title }}</h3>
            <p>{{ about.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Advantages',
        props: {
            abouts: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';
</style>
