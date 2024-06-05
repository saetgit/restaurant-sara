import { createRouter, createWebHistory } from 'vue-router'

import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;