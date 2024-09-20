import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import UserList from "../components/UserList.vue";
import PostList from "../components/PostList.vue";
import Notfound from "../components/Notfound.vue";

const routes =[
    {path:'/',name:'Home',component:Home},
    {path:'/users',name:'Users',component:UserList},
    {path:'/user/posts/:id',name:'UserPosts',component:PostList},
    {path:'/:pathMatch(.*)*',name:'NotFound',component:Notfound},
]

const router = createRouter({
    history:createWebHistory(),routes,
})
export default router