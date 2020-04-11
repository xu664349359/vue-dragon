import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWorld.vue'
import Login from '@/pages/login/index.vue'
import LoginPage from '@/pages/login/login.vue'
import LayOut from '@/layout'

/* vue使用插件必须使用use方法 */
Vue.use(Router)
const routes = [
    {
        path: '/user',
        component:HelloWord
    },
    {
        path:'/test',
        component:LayOut

    },
    {
        path: '/login',
        component:Login,
        redirect:'/login/index',
        children:[
            {
                path:'index',
                component:LoginPage
            }
        ]
    }
]
const router = new Router({
    routes
})
export default router