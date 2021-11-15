<template>
    <div class="advantages">
        <div class="col-lg-12 col-xs-12">
            <img :src="require('@/assets/images/bg-image-left.jpg')" alt="">
            <h3 class="advantages-title-head text-white">Покупая продукты в «Ямском фермере», вы получаете:</h3>
        </div>
        <div class="col-lg-12 col-xs-12">
            <div class="advantages-main text-secondary">
                <div class="advantages-content">
                    <h3 class="advantages-title text-green text-bold">Экономию деньги на лекарствах</h3>
                    <p>ВОЗ рекомендует выбирать экологичные продукты для охранения здоровья взрослых и детей.</p>
                </div>
                <div class="advantages-content">
                    <h3 class="advantages-title text-green text-bold">Натуральность</h3>
                    <p>Когда, где и кто произвел этот продукт — мы работаем с поставщиком напрямую и сами забираем
                        продукты на фермах. Также мы проверяем продукты в независимой лаборатории на их натуральность.
                    </p>
                </div>
                <div class="advantages-content">
                    <h3 class="advantages-title text-green text-bold">Уверены в безопасности продуктов</h3>
                    <p>Продукты имеют все необходимые свидетельства и сертификаты. Наши продукты по-настоящему
                        натуральные и вкусные.</p>
                </div>
                <div class="advantages-content">
                    <h3 class="advantages-title text-green text-bold">Удовольствие </h3>
                    <p>Поддерживаете экологичные методы сельского хозяйства. Не тратите время на беготню по рынкам и
                        супермаркертам.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Advantages',
        props: {

        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .advantages {
        position: relative;
        display: flex;
        flex-wrap: wrap;

        & &-title {
            font-size: 20px;
            font-weight: 700;
            color: $green;
            font-family: $Regular;
        }

        p + p {
            margin-top: 20px;
        }

        & .advantages-title-head {
            font-size: 36px;
            line-height: 54px;
            margin: 75px;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            color: rgba($white, 1);
        }

        & .advantages-main {
            background: $light-green;
            height: 100%;
            width: calc(100% + 10px);
            margin: 0 -10px;
            padding: 80px 65px 80px 65px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & .advantages-content + .advantages-content {
                margin-top:35px;
            }
        }
    }
</style>