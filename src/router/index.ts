import { createRouter, createWebHistory } from "vue-router"; 
import ASSelector from "@/components/ASSelector.vue";
import Dashboard from "@/components/Dashboard.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: ASSelector,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
