import { createRouter, createWebHashHistory } from "vue-router";
//agregando pagina de la aplicacion
// import Home from "../Pages/Home.vue";
// import About from "../Pages/About.vue";
import calculadora2 from "../Pages/Calculadora2.vue";
import Calculadora from "../Pages/Calculadora.vue";
import Horario from "../Pages/Horario.vue";
import Horario2 from "../Pages/Horario2.vue";
import Eventos from "../Pages/Eventos.vue";
import Eventos2 from "../Pages/Eventos2.vue";
import Ciclos from "../Pages/Ciclos.vue";
import Ciclos2 from "../Pages/Ciclos2.vue";
import Padre from "../Pages/Props/Padre.vue";
import Padre2 from "../Pages/Props/Padre2.vue";
import Principal from "../Pages/PaginaWeb/Principal.vue";


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
  },
  {
    path: "/horario2",
    name: "horario2",
    component: Horario2,
  },
  {
    path: "/horario",
    name: "horario",
    component: Horario,
  },
  {
    path: "/eventos1",
    name: "eventos1",
    component: Eventos,
  },
  {
    path: "/eventos2",
    name: "eventos2",
    component: Eventos2,
  },
  {
    path: "/ciclos1",
    name: "ciclos1",
    component: Ciclos,
  },
  {
    path: "/ciclos2",
    name: "ciclos2",
    component: Ciclos2,
  },
  {
    path: "/padre",
    name: "padre",
    component: Padre,
  },
  {
    path: "/padre2",
    name: "padre2",
    component: Padre2,
  },
  {
    path: "/principal",
    name: "principal",
    component: Principal,
  }
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
