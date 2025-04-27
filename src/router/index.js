import { createRouter, createWebHashHistory } from "vue-router";
//agregando pagina de la aplicacion 
// import Home from "../Pages/Home.vue";
// import About from "../Pages/About.vue";
import calculadora2 from "../Pages/Calculadora2.vue";
import Calculadora from "../Pages/Calculadora.vue";


const routes = [
{
    path: "/calculadora",
    name: "calculadora",
    component: Calculadora,
},
{
    path: "/calculadora2",
    name: "calculadora2",
    component: calculadora2,
}
]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
