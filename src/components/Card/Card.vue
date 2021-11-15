<template>
    <div class="catalog-wrapper">
        <CardItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
    import CardItem from '@/components/Card/CardItem'

    export default {
        name: 'Cards',
        components: {
            CardItem
        },
        props: {
            products: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style scoped lang="scss">
    .catalog-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: -10px -10px;
    }
</style>
