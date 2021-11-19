<template>
    <div class="wrapper mb-80">
        <div class="container">
            <Breadcrumbs />
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

    export default {
        name: 'chebureki-ferma-romana-shalvovicha',
        components: {
            Breadcrumbs
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
