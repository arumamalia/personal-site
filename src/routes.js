import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home.vue';
import AboutMe from '@/pages/AboutMe.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'AboutMe',
        path: '/aboutme',
        component: AboutMe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
