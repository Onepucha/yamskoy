<template>
    <div class="footer">
        <div class="footer-wrapper">
            <div class="footer-wrapper__logo">ООО «Ямской Фермер»</div>
        <div class="footer-wrapper__copyright">Copyright © 2020 - 2021</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {

        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .footer {
        position: relative;
        width: 100%;
        background: $green;

        & &-wrapper {
            max-width: 1168px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 30px 0;

            margin: 0 auto;

            &__logo {
                color: $white;
            }

            &__copyright {
                color: $white;
            }
        }
    }
</style>
