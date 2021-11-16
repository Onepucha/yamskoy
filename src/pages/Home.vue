<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-24 col-xs-12">
                    <VueSlickCarousel :slides="slidesItem" />
                </div>
            </div>
            <div class="row mt-60">
                <div class="col-lg-24 col-xs-12">
                    <h1 class="h1 text_align_center">Специальные предложения</h1>
                </div>
            </div>
            <div class="row mt-60">
                <div class="col-lg-24 col-xs-12">
                    <Card :products="productsItem" />
                    <Button tag="button" size="large" type="primary" class="mt-40 text_align_center" v-if="showButton"
                        @onClick="loadMore">Смотреть все</Button>
                </div>
            </div>
            <div class="row mt-80">
                <Advantages :title="advantagesTitleHead" :advantages="advantagesItems" />
            </div>
            <div class="row">
                <DefinitelyProduct />
            </div>
            <div class="row mt-80 mb-80">
                <AboutCompany :abouts="aboutCompany" />
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/Card/Card";
    import VueSlickCarousel from "@/components/vueSlickCarousel/vueSlickCarousel";
    import Button from "@/components/Button/Button";
    import Advantages from "@/components/Advantages/Advantages";
    import DefinitelyProduct from "@/components/DefinitelyProduct/DefinitelyProduct";
    import AboutCompany from "@/components/AboutCompany/AboutCompany";

    export default {
        name: 'Home',
        components: {
            Card,
            VueSlickCarousel,
            Button,
            Advantages,
            DefinitelyProduct,
            AboutCompany
        },
        props: {
            product: {
                type: Array,
                default: () => []
            },
        },
        data: () => ({
            slidesItem: [{
                img: '1.jpg',
                title: '',
            }, {
                img: '1.jpg',
                title: '',
            }],
            productItem: [{
                    id: 1,
                    title: 'Чебуреки, ферма Романа Шалвовича',
                    price: 1034,
                    order: "кг.",
                    img: '1.jpg',
                    premium: true,
                    new: false,
                    choice: false,
                },
                {
                    id: 2,
                    title: 'Вареники домашние с картошкой, жареным луком и грибами',
                    price: 388,
                    order: "кг.",
                    img: '2.jpg',
                    premium: false,
                    new: true,
                    choice: false,
                },
                {
                    id: 3,
                    title: 'Хинкали острые с луком',
                    price: 400,
                    order: "кг.",
                    img: '3.jpg',
                    premium: false,
                    new: false,
                    choice: false,
                },
                {
                    id: 4,
                    title: 'Картофель деревенский, сорт Каратоп, ОРГАНИК',
                    price: 39,
                    order: "кг.",
                    img: '4.jpg',
                    premium: false,
                    new: false,
                    choice: true,
                },
                {
                    id: 5,
                    title: 'Чебуреки, ферма Романа Шалвовича',
                    price: 1034,
                    order: "кг.",
                    img: '1.jpg',
                    premium: false,
                    new: false,
                    choice: false,
                },
                {
                    id: 6,
                    title: 'Вареники домашние с картошкой, жареным луком и грибами',
                    price: 388,
                    order: "кг.",
                    img: '2.jpg',
                    premium: false,
                    new: false,
                    choice: true,
                },
                {
                    id: 7,
                    title: 'Хинкали острые с луком',
                    price: 400,
                    order: "кг.",
                    img: '3.jpg',
                    premium: true,
                    new: false,
                    choice: false,
                },
                {
                    id: 8,
                    title: 'Картофель деревенский, сорт Каратоп, ОРГАНИК',
                    price: 39,
                    order: "кг.",
                    img: '4.jpg',
                    premium: false,
                    new: false,
                    choice: true,
                },
                {
                    id: 9,
                    title: 'Картофель деревенский, сорт Каратоп, ОРГАНИК',
                    price: 39,
                    order: "кг.",
                    img: '4.jpg',
                    premium: false,
                    new: false,
                    choice: true,
                }
            ],
            length: 4,
            advantagesTitleHead: 'Покупая продукты в «Ямском фермере», вы получаете:',
            advantagesItems: [{
                advantagesTitle: 'Экономию деньги на лекарствах',
                advantagesDescriptions: 'ВОЗ рекомендует выбирать экологичные продукты для охранения здоровья взрослых и детей.',
            }, {
                advantagesTitle: 'Натуральность',
                advantagesDescriptions: 'Когда, где и кто произвел этот продукт — мы работаем с поставщиком напрямую и сами забираем продукты на фермах. Также мы проверяем продукты в независимой лаборатории на их натуральность.',
            }, {
                advantagesTitle: 'Уверены в безопасности продуктов',
                advantagesDescriptions: 'Продукты имеют все необходимые свидетельства и сертификаты. Наши продукты по-настоящему натуральные и вкусные.',
            }, {
                advantagesTitle: 'Удовольствие',
                advantagesDescriptions: 'Поддерживаете экологичные методы сельского хозяйства. Не тратите время на беготню по рынкам и супермаркертам.',
            }],
            aboutCompany: [{
                title: 'О компании',
                description: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного леса и лишь редкий луч проскальзывает в его святая святых, а я лежу в высокой траве у быстрого ручья и, прильнув к земле, вижу тысячи всевозможных былинок и чувствую, как близок моему сердцу крошечный мирок, что снует между стебельками, наблюдаю эти неисчислимые, непостижимые разновидности червяков и мошек и чувствую близость всемогущего, создавшего нас по своему подобию, веяние вселюбящего, судившего нам парить в вечном блаженстве, когда взор мой туманится и все вокруг меня и небо надо мной запечатлены в моей душе, точно образ возлюбленной, — тогда, дорогой друг, меня часто томит мысль: "Ах! Как бы выразить, как бы вдохнуть в рисунок то, что так полно, так трепетно живет во мне, запечатлеть отражение моей души, как душа моя — отражение предвечного бога!',
            }]
        }),
        mounted() {

        },
        methods: {
            next() {
                this.$refs.slick.next();
            },
            prev() {
                this.$refs.slick.prev();
            },
            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
            loadMore() {
                this.length = this.productItem.length;
            },
        },
        computed: {
            productsItem() {
                return this.productItem.slice(0, this.length);
            },
            showButton() {
                return this.productItem.length > this.length;
            }
        },
    }
</script>

<style scoped>

</style>
