<template>
    <div class="definitely">
        <div class="col-lg-16 col-xs-12">
            <h2 class="h2 mt-80">Почему вам точно понравятся наши продукты:</h2>
            <div class="row mt-60  mb-90">
                <div class="col-lg-12 col-xs-12">
                    <div class="definitely-content">
                        <h3 class="definitely-title text-green text-bold">Привозим только свежие фермерские продукты
                        </h3>
                        <p>Принцип такой: вы делаете заказ, мы его передаем на фермы, там готовят нужное количество, мы
                            забираем продукты, быстро фасуем и на следующий день они уже у вас. 24 часа от фермы до
                            вашего стола</p>
                    </div>
                    <div class="definitely-content">
                        <h3 class="definitely-title text-green text-bold">Проверяем фермерские продукты в лаборатории
                        </h3>
                        <p>Регулярно сдаем образцы продукции на проверку в независимую лабораторию. Отсутствие нитратов и пестицидов, болезнетворных бактерий — все это мы гарантируем, потому что проверили.</p>
                    </div>
                </div>
                <div class="col-lg-12 col-xs-12">
                    <div class="definitely-content">
                        <h3 class="definitely-title text-green text-bold">Отбираем поставщиков и постоянно их контролируем
                        </h3>
                        <p>Инспектируем фермы дважды в неделю и хорошо знаем, что там происходит. Проверяем, что овощи выращены без минеральных удобрений и пестицидов, а животных содержат гуманно, на натуральных кормах со свободным выгулом </p>
                    </div>
                    <div class="definitely-content">
                        <h3 class="definitely-title text-green text-bold">Огромный ассортимент экопродуктов
                        </h3>
                        <p>Собственно, у нас есть все. Молоко, козье и коровье, сыры, яйца, любая птица, мясо, рыба, овощи, хлеб, печенье, мороженое, крупы, растительное масло, бытовая экохимия. Даже попкорн и чипсы! И разумеется, все – только натуральное, только ЭКО</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DefinitelyProduct',
        props: {

        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .definitely {
        display: flex;
        width: 100%;
        position: relative;
        background-image: url('../../assets/images/bg-image-right.png');
        background-size: contain;
        background-position: right center;
        background-repeat: no-repeat;

        & &-title {
            font-size: 20px;
            font-weight: 700;
            color: $green;
            font-family: $Regular;
        }

        p+p {
            margin-top: 20px;
        }

        & .definitely-content+.definitely-content {
            margin-top: 35px;
        }
    }
</style>
