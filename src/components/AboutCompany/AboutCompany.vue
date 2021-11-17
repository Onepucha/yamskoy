<template>
    <div>
        <div class="col-lg-24 col-xs-12" v-for="(about, index) in abouts" :key="index">
            <h2 class="h2">{{ about.title }}</h2>
            <p v-for="(descriptions, index) in about.descriptions" :key="index">{{ descriptions }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutCompany',
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
