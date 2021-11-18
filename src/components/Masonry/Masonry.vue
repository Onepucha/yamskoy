<template>
    <div class="masonry">
        <MasonryItem v-for="(photo, index) in photos" :key="index" :photo="photo" />
    </div>
</template>

<script>
    import MasonryItem from '@/components/Masonry/MasonryItem'

    export default {
        name: 'Masonry',
        components: {
            MasonryItem,
        },
        props: {
            photos: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .masonry {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        height: 600px;
    }
</style>
