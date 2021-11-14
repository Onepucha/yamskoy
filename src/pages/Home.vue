<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-24 col-xs-12">
                    <h1 class="h1 text_align_center">Специальные предложения</h1>
                </div>
            </div>
            <div class="row">
                <Card 
                    :products="productItem" 
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/Card/Card"

    export default {
        name: 'Home',
        components: {
            Card,
        },
        props: {
            product: {
                type: Array,
                default: () => []
            }
        },
        data: () => ({
            productItem: [{
                    id: 1,
                    title: 'Хинкали острые с луком',
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
            ],
        }),
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>