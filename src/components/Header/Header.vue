<template>
    <div>
        <header class="header">
            <div class="header-aside">
                <div class="header-aside__group header-aside__group-left">
                    <div class="email-group">
                        <img src="@/assets/images/svg/email.svg" alt="email">
                        <a class="link-email-green" href="mailto:yamskou.femer.com">yamskou.fermer.com</a>
                    </div>
                </div>
                <div class="header-aside__group header-aside__group-right">
                    <div class="social-group">
                        <a href="https://ru-ru.facebook.com/" target="_blank" class="icon facebook"></a>
                        <a href="https://www.instagram.com/" target="_blank" class="icon instagram"></a>
                        <a href="https://web.telegram.org/k/" target="_blank" class="icon telegram"></a>
                    </div>
                    <div class="phone-group">
                        <img src="@/assets/images/svg/phone-call.svg" alt="phone">
                        <a class="link-phone-gray" href="tel:+79088766586">+ 7 (999) 999 99 99</a>
                    </div>
                </div>
            </div>
            <nav class="navbar-panel">
                <div class="navbar-nav-logo">
                    <router-link class="rd-navbar-brand brand" to="/">
                        <img src="@/assets/images/logo.png" alt="">
                    </router-link>
                </div>
                <div class="navbar-nav-inner">
                    <ul>
                        <li>
                            <router-link active-class="active" to="/" exact>Главная</router-link>
                        <li>
                            <router-link active-class="active" to="/catalog">Каталог</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/aboutus">О нас</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/articles">Статьи</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/gallery">Галерея</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/delivery">Доставка</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/contacts">Контакты</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/vars';

    .header {
        width: 100%;
        max-width: 1168px;
        margin: 0 auto;

        & .header-aside {
            position: relative;
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 15px 15px;

            &__group {

                &-left {
                    display: flex;

                    & .email-group {
                        display: flex;
                        align-items: center;

                        img {
                            width: 24px;
                            height: 24px;
                        }

                        .link-email-green {
                            color: #72b416;
                            text-decoration: underline;
                            margin-left: 12px;
                            font-size: $fs14;
                            line-height: $lh16;

                            &:hover {
                                color: #483b33;
                            }
                        }
                    }
                }

                &-right {
                    display: flex;

                    & .social-group {
                        display: flex;
                        align-items: center;

                        & .icon {
                            width: 18px;
                            height: 18px;
                            margin-left: 15px;
                            background-repeat: no-repeat;
                            background-size: cover;


                            &:first-child {
                                margin-left: 0;
                            }

                            &.facebook {
                                background: url('../../assets/images/svg/facebook.svg');
                            }

                            &.instagram {
                                background: url('../../assets/images/svg/instagram.svg');
                            }

                            &.telegram {
                                background: url('../../assets/images/svg/telegram.svg');
                            }

                            &:hover {
                                opacity: .85;
                            }
                        }
                    }

                    & .phone-group {
                        display: flex;
                        align-items: center;
                        margin-left: 30px;

                        img {
                            width: 24px;
                            height: 24px;
                        }

                        .link-phone-gray {
                            color: #483b33;
                            margin-left: 12px;
                            font-size: $fs14;
                            line-height: $lh16;
                            text-decoration: none;

                            &:hover {
                                color: #72b416;
                            }
                        }
                    }
                }
            }
        }

        & .navbar-panel {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            transition: 0.3s all ease-out;
            padding: 0 15px;
            border-top: 1px solid #d6d6d6;

            & .navbar-nav-logo {
                img {
                    width: 180px;
                    height: 19px;
                }
            }

            & .navbar-nav-inner {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: flex-start;

                ul {
                    display: flex;

                    li {
                        a {
                            font-size: $fs16;
                            line-height: $lh24;
                            padding: 17px 20px;
                            text-decoration: none;
                            color: $body-color;
                            position: relative;
                            background: transparent;
                            font-family: $Bold;

                            &::before {
                                content: '';
                                position: absolute;
                                bottom: 0px;
                                left: 0;
                                width: 0;
                                height: 2px;
                                max-width: 100%;
                                background: #69af07;
                                -webkit-transition: 0.3s all ease-out;
                                -o-transition: 0.3s all ease-out;
                                transition: 0.3s all ease-out;
                            }

                            &:hover {
                                &::before {
                                    opacity: 1;
                                    visibility: visible;
                                    width: 100%;
                                }
                            }

                            &.active {
                                &::before {
                                    opacity: 1;
                                    visibility: visible;
                                    width: 100%;
                                }
                            }

                        }
                    }
                }
            }
        }
    }
</style>