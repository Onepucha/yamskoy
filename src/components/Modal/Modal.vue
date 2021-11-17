<template>
    <div class="modal-wrapper" ref="modalOverlay">
        <div class="modal">
            <div class="modal__header">
                <span>Name</span>
                <button class="modal__header-close" @click="closeModal">&times;</button>
            </div>
            <div class="modal__content">
                <slot></slot>
            </div>
            <div class="modal__footer">
                <Button tag="button" size="large" type="primary" @onClick="closeModal">Закрыть</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/Button/Button";

    export default {
        name: 'Modal',
        components: {
            Button,
        },
        props: {

        },
        data: () => ({}),
        computed: {},
        mounted() {
            let vm = this;
            document.addEventListener('click', (event) => {
                if(event.target === vm.$refs['modalOverlay']) {
                    vm.closeModal();
                }
            });
        },
        methods: {
            closeModal() {
                this.$emit('closeModal');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .modal-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba($black, .4);
        z-index: 1001;

        .modal {
            position: absolute;
            padding: 20px;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 700px;
            background: $white;
            box-shadow: 0 0 20px 0 $black;

            &__header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-close {
                    cursor: pointer;
                    padding: 5px 10px;
                }
            }

            &__content {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
            }

            &__footer {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 20px;
            }
        }
    }
</style>
