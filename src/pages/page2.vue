<template>
    <div class="wrapper mb-80">
        <div class="container">
            <h1>Page 2</h1>
            <router-link :to="{ name: 'page1' }">1</router-link>
            <router-link :to="{ name: 'page2' }">2</router-link>
            <router-link :to="{ name: 'page3' }">3</router-link>
            <router-link :to="{ name: 'page4' }">4</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page2',
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
