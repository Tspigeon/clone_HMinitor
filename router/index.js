import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path:'/',
    name:'Main',
    component:()=>import('../pages/Main.vue'),
    children:[
        {
            name:'home',
            path:'/',
            component:()=>import('../pages/home/Home.vue')
        },
        {
            name:'car',
            path:'Car',
            component:()=>import('../pages/secondPage/Car.vue')
        },
        {
            name:'people',
            path:'People',
            component:()=>import('../pages/secondPage/People.vue')
        },
        ]
}
]
const router = new VueRouter({
    mode:'history',
    routes,
})
export default router