<template>
    <div class="wrapper mb-80">
        <div class="container">
            <router-link :to="'/'">Главная</router-link>
            <router-link :to="{ name: 'page1' }">Start breadcrumb</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Catalog',
        components: {
        },
        props: {

        },
        data: () => ({

        }),
        computed: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';
</style>
