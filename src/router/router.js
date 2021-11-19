import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/pages/Home";

Vue.use(VueRouter);

function lazyLoad(view) {
    return () => import(`@/pages/${view}.vue`)
}

const routes = [{
    path: '/',
    name: 'Home',
    component: lazyLoad('Home')
}, {
    path: '/aboutus',
    name: 'AboutUs',
    component: lazyLoad('AboutUs')
}, {
    path: '/catalog',
    name: 'Catalog',
    component: lazyLoad('Catalog')
}, {
    path: '/chebureki-ferma-romana-shalvovicha',
    name: 'chebureki-ferma-romana-shalvovicha',
    component: lazyLoad('chebureki-ferma-romana-shalvovicha'),
    meta: {
        breadcrumb: [
          { name: 'chebureki-ferma-romana-shalvovicha' }
        ]
      }
}, {
    path: 'catalog/chebureki-ferma-romana-shalvovicha/page1',
    name: 'page1',
    component: lazyLoad('page1'),
    meta: {
        breadcrumb: [{
            name: 'Page 1'
        }]
    }
}, {
    path: '/chebureki-ferma-romana-shalvovicha/page2',
    name: 'page2',
    component: lazyLoad('page2'),
    meta: {
        breadcrumb: [{
                name: 'Page 1',
                link: 'page1'
            },
            {
                name: 'Page 2'
            }
        ]
    }
}, {
    path: '/chebureki-ferma-romana-shalvovicha/page3',
    name: 'page3',
    component: lazyLoad('page3'),
    meta: {
        breadcrumb: [{
                name: 'Page 1',
                link: 'page1'
            },
            {
                name: 'Page 2',
                link: 'page2'
            },
            {
                name: 'Page 3'
            }
        ]
    }
}, {
    path: '/chebureki-ferma-romana-shalvovicha/page4',
    name: 'page4',
    component: lazyLoad('page4'),
    meta: {
      breadcrumb: [
        { name: 'Page 4' }
      ]
    }
  }]


export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

})
