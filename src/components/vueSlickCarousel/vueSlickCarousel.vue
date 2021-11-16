<template>
    <slick ref="slick"
        :options="slickOptions"
    >
        <div class="carousel-wrapper" v-for="(slide, index) in slides" :key="index">
            <div class="carousel-item">
                <figure>
                    <img :src="require('@/assets/images/bg-slide-' + slide.img)"
                        :alt="require('@/assets/images/bg-slide-' + slide.img)" />
                </figure>
                <div class="rect-content">
                    <img src="@/assets/images/logo.png" alt="">
                    <div class="text_52_54 mt-20"><span class="text_green">Только</span> натуральные продукты
                    </div>
                    <Button tag="a" size="large" type="primary" class="mt-40">Подробнее</Button>
                </div>
            </div>
        </div>
    </slick>
</template>

<script>
    import Slick from 'vue-slick';
    import Button from "@/components/Button/Button";

    export default {
        name: 'VueSlickCarousel',
        components: {
            Slick,
            Button
        },
        props: {
            slides: {
                type: Array,
                default: () => [],
            },
        },
        data: () => ({
            slickOptions: {
                slidesToShow: 1,
                arrows: false,
                infinite: true,
                lazyLoad: true,
                autoplay: true,
                speed: 1000,
                draggable:true,
            },
        }),
    }
</script>

<style scoped lang="scss">
    .carousel-wrapper {
        position: relative;
        height: 100%;

        & .carousel-item {
            display: flex;
            align-items: center;

            figure {
                margin: 0;

                img {
                    display: block;
                    max-width: 100%;
                    position: relative;
                    transition: all 1s ease-out;
                }
            }

            & .rect-content {
                position: absolute;
                left: 100px;
                max-width: 470px;
                background: #fff;
                padding: 30px 40px;
            }
        }
    }

    .img-wrapper img {
        margin: auto;
        width: 200px;
        height: 100px;
        background-image: linear-gradient(gray 100%, transparent 0);
    }
</style>
