<template>
    <div>
        <button
            class="button"
            :class="classButton"
            type="button"
            name="button"
            @click="onClick"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            size: {
                type: String,
                default: "medium",
                validator: function (value) {
                    return ["small", "medium", "large"].indexOf(value) !== -1;
                },
            },
            type: {
                type: String,
                default: "primary",
                validator: function (value) {
                    return ["primary"].indexOf(value) !== -1;
                },
            }
        },
        computed: {
            classButton() {
                return {
                    [`button--${this.size}`]: true,
                    [`button--${this.type}`]: true,
                }
            }
        },
        mounted() {},
        methods: {
            onClick() {
                console.log(this.$emit("onClick"));
                this.$emit("onClick");
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .button {
        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }

        &+& {
            margin-left: 20px;
        }

        font-family: $Bold;
        line-height: 1;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        background-image: none;
        cursor: pointer;
        transition: background 150ms ease-out,
        border 150ms ease-out,
        transform 150ms ease-out;
        user-select: none;
        touch-action: manipulation;
        border-radius: 5px;
        color: rgba($white, 1);
        background-color: rgba($orange, 1);
        border: 1px solid rgba($orange, 1) !important;

        span {
            display: inline-block;
        }

        &.includeIco {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .includeIconOnly {
            width: 40px !important;
            height: 40px !important;
        }

        .icon {
            color: inherit;
            text-align: center;
            font-size: 1rem;

            &.left {
                order: 0;
                margin-right: 5px;
                margin-left: 0px;
            }

            &.center {
                order: 0;
                margin-right: 0px;
                margin-left: 0px;
            }

            &.right {
                order: 2;
                margin-right: 0px;
                margin-left: 5px;
            }
        }

        &:hover,
        &:focus {
            color: rgba($orange, 1);
            background: rgba($white, 1);
            border-color: rgba($orange, 1) !important;
            box-shadow: rgba($black, 0.08) 0 3px 10px 0;
        }

        &:not([disabled]) {
            &:hover {
                text-decoration: none;
            }
        }

        &--block {
            display: flex;
            justify-content: center;
            flex: 1 0 auto;
            min-width: 100% !important;
            max-width: auto;
        }

        &--small {
            font-size: $fs12;
            padding: 10px 16px !important;
        }

        &--medium {
            font-size: $fs14;
            padding: 12px 40px !important;
        }

        &--large {
            font-size: $fs14;
            padding: 16px 50px !important;
        }

        &--round {
            border-radius: 1.5em;
        }

        &--radius {
            border-radius: 50%;
        }

        &--disabled {
            opacity: 0.5;
            box-shadow: none;
            pointer-events: none;
        }

        &--primary {
            color: rgba($white, 1);
            background-color: rgba($orange, 1);
            border-color: rgba($orange, 1) !important;

            &:hover,
            &:focus {
                color: rgba($white, 1);
                background-color: rgba($orange, 0.85);
                border-color: transparent !important;
            }

            &.button--border {
                border: 1px solid rgba($orange, 1) !important;
                background: transparent !important;
                color: rgba($orange, 1) !important;

                &:hover,
                &:focus {
                    background: rgba($orange, 0.2) !important;
                }
            }
        }
    }
</style>
