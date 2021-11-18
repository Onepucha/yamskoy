import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/pages/Home";

Vue.use(VueRouter);
function lazyLoad(view){
    return() => import(`@/pages/${view}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: lazyLoad('Home')
    }, {
        path: '/aboutus',
        name: 'AboutUs',
        component: lazyLoad('AboutUs')
    }
]


export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

})
