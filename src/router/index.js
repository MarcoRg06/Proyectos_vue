import { createRouter, createWebHashHistory } from "vue-router";
//agregando pagina de la aplicacion 
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";

const routes = [
{
    path: "/",
    name: "home",
    component: Home,
},
{
    path: "/about",
    name: "about",
    component: About,
}
]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
