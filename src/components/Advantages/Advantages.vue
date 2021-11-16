<template>
    <div class="advantages">
        <div class="col-lg-12 col-xs-12">
            <img :src="require('@/assets/images/bg-image-left.jpg')" alt="">
            <h3 class="advantages-title-head text-white">{{ title }}</h3>
        </div>
        <div class="col-lg-12 col-xs-12">
            <div class="advantages-main text-secondary">
                <div class="advantages-content" v-for="(advantage, index) in advantages" :key="index">
                    <h3 class="advantages-title text-green text-bold">{{ advantage.advantagesTitle}}</h3>
                    <p>{{ advantage.advantagesDescriptions}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Advantages',
        props: {
            title: {
                type: String,
                default: '',
            },
            advantages: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .advantages {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;

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
