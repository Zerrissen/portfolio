import { createRouter, createWebHistory } from "vue-router";


import PageHome from "./views/PageHome.vue";
import PageProjects from "./views/PageProjects.vue";
import PageHomelab from "./views/PageHomelab.vue";
import PageContact from "./views/PageContact.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: PageHome,
        meta: {index: 0 },
    },
    {
        path: "/projects",
        name: "projects",
        component: PageProjects,
        meta: {index: 1 },
    },
    {
        path: "/homelab",
        name: "homelab",
        component: PageHomelab,
        meta: {index: 2 },
    },
    {
        path: "/contact",
        name: "contact",
        component: PageContact,
        meta: {index: 3 },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

