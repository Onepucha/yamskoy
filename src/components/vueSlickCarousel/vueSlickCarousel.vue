<template>
    <div>
        <slick ref="slick" :options="slickOptions">

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
                        <Button tag="button" size="large" type="primary" class="mt-40" @onClick="showModal">Подробнее</Button>
                    </div>
                </div>
            </div>
        </slick>

        <Modal
            v-if="isModalVisible"
            @closeModal="closeModalIn"
        >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum repudiandae, fugit consequuntur corrupti itaque reiciendis labore autem incidunt! Eveniet ullam necessitatibus itaque voluptates commodi eaque eum, molestias minus quas?</p>
        </Modal>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    import Button from "@/components/Button/Button";
    import Modal from "@/components/Modal/Modal";

    export default {
        name: 'VueSlickCarousel',
        components: {
            Slick,
            Button,
            Modal
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
                draggable: true,
            },
            isModalVisible: false,
        }),
        methods: {
            showModal() {
                this.isModalVisible = true;
                document.body.classList.add('modal-open');
            },
            closeModalIn() {
                this.isModalVisible = false;
                document.body.classList.remove('modal-open');
            }
        }
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
