<template>

    <div class="item">
        <Modal
            :isButtonFooter="false"
            v-if="isModalVisible"
            @closeModal="closeModalIn"
        >
            <img :src="require('@/assets/images/masonry-img-' + photo.img)" />
        </Modal>
        <div @click="showModal"
            :class="['item__content', {'item__content--small': photo.small, 'item__content--medium': photo.medium,'item__content--large': photo.large}]">
            <img :src="require('@/assets/images/masonry-img-' + photo.img)"
                :alt="require('@/assets/images/masonry-img-' + photo.img)" />
        </div>
    </div>
</template>

<script>
    import Modal from "@/components/Modal/Modal";

    export default {
        name: 'MasonryItem',
        components: {
            Modal,
        },
        props: {
            photo: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            isModalVisible: false,
        }),
        computed: {
            classItem() {
                return {
                    "item__content": true,
                    "item__content--small": this.photo.small,
                    "item__content--medium": this.photo.medium,
                    "item__content--large": this.photo.large,
                }
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
                document.body.classList.add('modal-open');
            },
            closeModalIn() {
                this.isModalVisible = false;
                document.body.classList.remove('modal-open');
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .masonry {
        .item {
            box-sizing: border-box;
            padding: 15px;

            &__content {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 220px;
                font-size: 40px;
                color: rgba($white, 1);
                cursor: pointer;

                img {
                    position: relative;
                    max-width: 100%;
                    height: auto;
                    z-index: -1;
                }

                &:hover {
                    background: linear-gradient(0deg, rgba(41, 69, 3, 0.75) 0%, rgba(105, 175, 7, 0.75) 100%);

                    &::before {
                        content: '';
                        position: absolute;
                        width: 68px;
                        height: 68px;
                        display: flex;
                        justify-content: center;
                        top: 50%;
                        transform: translateY(-50%);
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNCIgY3k9IjM0IiByPSIzMi41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNNTAuODk3OSA0OC41NTYxTDM5Ljg2MDcgMzcuNTE4OUM0MS41NzM0IDM1LjMwNDcgNDIuNDk5OSAzMi41OTc0IDQyLjQ5OTkgMjkuNzQ5OUM0Mi40OTk5IDI2LjM0MTUgNDEuMTY5NiAyMy4xNDU1IDM4Ljc2NDIgMjAuNzM1N0MzNi4zNTg3IDE4LjMyNiAzMy4xNTQyIDE3IDI5Ljc0OTkgMTdDMjYuMzQ1NyAxNyAyMy4xNDEyIDE4LjMzMDIgMjAuNzM1NyAyMC43MzU3QzE4LjMyNiAyMy4xNDEyIDE3IDI2LjM0MTUgMTcgMjkuNzQ5OUMxNyAzMy4xNTQyIDE4LjMzMDIgMzYuMzU4NyAyMC43MzU3IDM4Ljc2NDJDMjMuMTQxMiA0MS4xNzM5IDI2LjM0MTUgNDIuNDk5OSAyOS43NDk5IDQyLjQ5OTlDMzIuNTk3NCA0Mi40OTk5IDM1LjMwMDQgNDEuNTczNCAzNy41MTQ3IDM5Ljg2NDlMNDguNTUxOSA1MC44OTc5QzQ4LjU4NDIgNTAuOTMwMiA0OC42MjI3IDUwLjk1NTkgNDguNjY0OSA1MC45NzM0QzQ4LjcwNzIgNTAuOTkxIDQ4Ljc1MjYgNTEgNDguNzk4NCA1MUM0OC44NDQxIDUxIDQ4Ljg4OTUgNTAuOTkxIDQ4LjkzMTggNTAuOTczNEM0OC45NzQxIDUwLjk1NTkgNDkuMDEyNSA1MC45MzAyIDQ5LjA0NDkgNTAuODk3OUw1MC44OTc5IDQ5LjA0OTFDNTAuOTMwMiA0OS4wMTY3IDUwLjk1NTkgNDguOTc4MyA1MC45NzM0IDQ4LjkzNkM1MC45OTEgNDguODkzNyA1MSA0OC44NDg0IDUxIDQ4LjgwMjZDNTEgNDguNzU2OCA1MC45OTEgNDguNzExNSA1MC45NzM0IDQ4LjY2OTJDNTAuOTU1OSA0OC42MjY5IDUwLjkzMDIgNDguNTg4NSA1MC44OTc5IDQ4LjU1NjFWNDguNTU2MVpNMzYuNDgxOSAzNi40ODE5QzM0LjY3OTkgMzguMjc5NyAzMi4yOTE0IDM5LjI2OTkgMjkuNzQ5OSAzOS4yNjk5QzI3LjIwODUgMzkuMjY5OSAyNC44MiAzOC4yNzk3IDIzLjAxOCAzNi40ODE5QzIxLjIyMDIgMzQuNjc5OSAyMC4yMyAzMi4yOTE0IDIwLjIzIDI5Ljc0OTlDMjAuMjMgMjcuMjA4NSAyMS4yMjAyIDI0LjgxNTcgMjMuMDE4IDIzLjAxOEMyNC44MiAyMS4yMjAyIDI3LjIwODUgMjAuMjMgMjkuNzQ5OSAyMC4yM0MzMi4yOTE0IDIwLjIzIDM0LjY4NDIgMjEuMjE2IDM2LjQ4MTkgMjMuMDE4QzM4LjI3OTcgMjQuODIgMzkuMjY5OSAyNy4yMDg1IDM5LjI2OTkgMjkuNzQ5OUMzOS4yNjk5IDMyLjI5MTQgMzguMjc5NyAzNC42ODQyIDM2LjQ4MTkgMzYuNDgxOVoiIGZpbGw9IndoaXRlIi8+PC9zdmc+);
                    }
                }

                &--small {
                    height: 270px;
                }

                &--medium {
                    height: 270px;
                }

                &--large {
                    height: 570px;
                }
            }
        }
    }
</style>
