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
            name:'part',
            path:'Part',
            component:()=>import('../pages/secondPage/Part.vue')
        },
        {
            name:'HStorage',
            path:'HStorage',
            component:()=>import('../pages/secondPage/HStorage')
        },
        ]
}
]
const router = new VueRouter({
    mode:'history',
    routes,
})
export default router