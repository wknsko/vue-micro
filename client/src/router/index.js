import { createWebHistory, createRouter } from "vue-router";
import TheHome from '../views/TheHome.vue'
import TheLogin from '../views/TheLogin.vue'
import TheAbout from '../views/TheAbout.vue'
import TheProfile from '../views/TheProfile.vue'

const routes = [
    { path: "/", name: "Homepage", component: TheHome },
    { path: "/login", name: "Login", component: TheLogin },
    { path: "/about", name: "About", component: TheAbout },
    { path: "/profile", name: "Profile", component: TheProfile },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;