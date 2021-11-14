<template>
    <div class="col-lg-6 col-xs-12">
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
            methods: {

            },
        },
        mounted() {}
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .catalog-slider {
        position: relative;
        overflow: hidden;
    }

    .catalog-slider--hide-nav .catalog-slider__nav {
        display: none;
    }

    .catalog-slider__in {
        position: relative;
        padding: 46px 0 40px;
    }

    .catalog-slider .catalog-item,
    .catalog-slider__item {
        height: 100%;
    }

    .catalog-slider .catalog-item-overlay {
        display: none;
    }

    .catalog-slider__nav {
        width: 100%;
        max-width: 110px;
        margin: 0 auto;
    }

    .catalog-slider__nav .slider-nav {
        display: flex;
        justify-content: space-between;
    }

    .catalog-slider__nav .slider-nav__arrow {
        position: relative;
        top: 0;
    }

    .catalog-slider__listing {
        margin-top: 28px;
    }

    .catalog-slider__items {
        margin-top: 45px;
        transition: height .2s ease;
    }

    .catalog-slider__item {
        width: 100%;
        padding: 10px;
    }

    .catalog-slider+.catalog-slider {
        border-top: 1px solid #eaeae4;
    }

    .catalog-actions {
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px 14px 7px 24px;
        border: 1px solid #c8c6b7;
        font-size: 14px;
        line-height: 18px;
    }

    .catalog-actions,
    .catalog-actions__part {
        display: flex;
        align-items: center;
    }

    .catalog-actions__title {
        color: #a9af98;
    }

    .catalog-actions__controls {
        margin-left: 22px;
    }

    .catalog-sorting {
        display: flex;
    }

    .catalog-sorting__item {
        margin-left: 22px;
    }

    .catalog-sorting__link {
        cursor: pointer;
        color: #000;
        transition-property: color;
    }

    .catalog-sorting__link--direction {
        padding-right: 28px;
    }

    .catalog-sorting__link--direction:after,
    .catalog-sorting__link--direction:before {
        content: '';
    }

    .catalog-sorting__link--direction:before {
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border: 2px solid #87b46f;
        border-radius: 50%;
    }

    .catalog-sorting__link--direction:after {
        top: 4px;
        right: 6px;
        border-top: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #3c3f34;
        border-left: 4px solid transparent;
        transition-property: transform;
    }

    .catalog-sorting__link--direction.is-down:after {
        transform: rotate(180deg) translate3d(0, -5px, 0);
    }

    .catalog-sorting__link.is-active {
        font-weight: 700;
    }

    .catalog-sorting__link:hover {
        color: #57ae2a;
    }

    .catalog-showing {
        display: flex;
    }

    .catalog-showing__item {
        margin-left: 10px;
    }

    .catalog-showing__link {
        display: flex;
        position: relative;
        width: 47px;
        height: 44px;
        justify-content: center;
        align-items: center;
        border: 3px solid transparent;
        color: #000;
        transition-property: border-color, font-weight;
    }

    .catalog-showing__link.is-active,
    .catalog-showing__link:hover {
        border-color: #87b46f;
    }

    .catalog-showing__link.is-active {
        font-weight: 700;
    }

    .catalog-listing {
        margin-top: -5px;
    }

    .catalog-listing .col {
        margin-top: 36px;
    }

    .catalog-item,
    .catalog-item__in {
        position: relative;
        height: 100%;
    }

    .catalog-item:hover:before {
        content: '';
        display: block;
        position: absolute;
        pointer-events: none;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 10px solid #e5ebce;
        transition-property: opacity, visibility;
    }

    .catalog-item__in {
        display: flex;
        flex-direction: column;
    }

    .catalog-item__link {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }


    .catalog-item__image {
        display: block;
        width: 100%;
        height: auto;
        position: relative;
        margin-top: 10px;
    }

    .catalog-item__image-inside {
        display: flex;
        align-items: center;
    }

    .catalog-item__image-inside img {
        max-height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .catalog-item__title {
        display: block;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-top: 30px;
        padding: 0 20px;
        font-family: 'Open Sans Light';
        font-size: 16px;
        line-height: 22px;
        color: #000000;
    }

    .catalog-item__description {
        display: flex;
        position: relative;
        align-items: flex-end;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        padding: 0 20px 20px;
    }

    .catalog-item__prices {
        margin-top: 20px;
    }

    .catalog-item__old-price,
    .catalog-item__price {
        white-space: nowrap;
        font-family: "Roboto Slab", serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 1;
    }

    .catalog-item__old-price {
        position: relative;
        font-weight: 300;
        color: #878e73;
    }

    .catalog-item__old-price:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #878e73;
    }

    .catalog-item__old-price+.catalog-item__price {
        margin-top: 7px;
    }

    .catalog-item__old-price.is-hidden {
        display: none;
    }

    .catalog-item__price {
        display: block;
        font-weight: 700;
    }

    .catalog-item-overlay {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        padding: 13px 20px 20px;
        transform: translate3d(0, 10px, 0);
        background-color: #fff;
        transition-property: opacity, visibility, transform;
    }

    .catalog-item-overlay:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-width: 0 10px 10px;
        border-color: #e5ebce;
        border-style: solid;
        transition-property: opacity, visibility;
    }

    .catalog-item-overlay__in {
        position: relative;
    }

    .catalog-item-overlay__title {
        display: block;
        margin-bottom: 9px;
        font-size: 12px;
        line-height: 16px;
        color: #878e73;
    }

    .catalog-item-overlay-prices {
        margin-top: 7px;
    }

    .catalog-item-overlay-prices__result {
        justify-content: space-between;
        align-items: center;
    }

    .catalog-item-overlay-prices__result,
    .catalog-item-params,
    .catalog-item-params__item {
        display: flex;
    }

    .catalog-item-params {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .catalog-item-params__item {
        position: relative;
        width: 40px;
        height: 30px;
        margin: 1px 4px 0 0;
        justify-content: center;
        align-items: center;
        border: 2px solid transparent;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition-property: border-color;
    }

    .catalog-item-params__item.is-active,
    .catalog-item-params__item:hover {
        border-color: #57ae2a;
    }

    .catalog-item-params__item.is-active {
        font-weight: 700;
    }

    .catalog-item:hover .catalog-item-overlay,
    .catalog-item:hover:before {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .badges {
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
    }

    .badges__item {
        display: block;
    }

    .badge {
        display: inline-block;
        vertical-align: top;
        padding: 9px;
        border-radius: 2px;
        background-color: #ffffff;
        user-select: none;
        white-space: nowrap;
        font-weight: 700;
        font-size: 12px;
        line-height: 1;
        color: #fff;
    }

    .badge--premium {
        background-color: #ffd41e;
        color: #000000;
    }

    .badge--best-choice {
        background-color: #ff7c1f;
    }

    .badge--new {
        background-color: #69af07;
    }
</style>