<template>
    <slick ref="slick" :options="slickOptions">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </slick>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: 'VueSlickCarousel',
        components: {
            Slick
        },
        data: () => ({
            slickOptions: {
                slidesToShow: 1,
                arrows: false,
                infinite: true,
                lazyLoad: true,
            },
        }),
    }
</script>

<style>
    .carousel-wrapper {
        padding: 40px;
    }

    .img-wrapper img {
        margin: auto;
        width: 200px;
        height: 100px;
        background-image: linear-gradient(gray 100%, transparent 0);
    }
</style>
