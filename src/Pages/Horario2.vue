<script setup>
import { ref } from 'vue';
const horario = ref([
    { materia: 'SCD1015/ 6BS / LENGUAJES Y AUTOMATAS I - SOLANO HERNANDEZ MIGUEL ANGEL ', rep: 'N', creditos: '5', lunes: '11:00-13:00/MAG5', martes: '', miercoles: '11:00-13:00/4', jueves: ' ', viernes: '12:00-13:00/RDS' },
    { materia: 'SCD1021/ 6BS / REDES DE COMPUTADORAS - SANCHEZ VASQUEZ LUCIA', rep: 'N', creditos: '5', lunes: '', martes: '13:00-15:00/RDS', miercoles: '', jueves: '13:00-15:00/LDS', viernes: '15:00-17:00/LDS' },
    { materia: 'SCD1055/ 6BS / PROGRAMACION WEB - VÁSQUEZ MARTÍNEZ JOSUÉ ISRAEL ', rep: 'N', creditos: '5', lunes: '', martes: '17:00-19:00/ACS', miercoles: '', jueves: '17:00-19:00/ACS', viernes: '13:00-14:00/ACS' },
    { materia: 'SCD1026/ 6BS / TALLER DE SISTEMAS OPERATIVOS - CRUZ PEREZ JORGE', rep: 'N', creditos: '4', lunes: '13:00-15:00/LDS', martes: '', miercoles: '13:00-15:00/LDS', jueves: ' ', viernes: ' ' },
    { materia: 'SCD1001/ 6BS / ADMINISTRACION DE BASE DE DATOS - GARCIA HERNANDEZ HILARIO VIDAL', rep: 'N', creditos: '5', lunes: ' ', martes: '15:00-17:00/MAG', miercoles: '15:00-17:00/LDS', jueves: ' ', viernes: '14:00-15:00' },
    { materia: 'SCD1014/ 6BS / LENGUAJES DE INTERAZ - SANCHEZ VASQUEZ LUCIA', rep: 'N', creditos: '4', lunes: ' ', martes: '11:00-13:00/MAG', miercoles: '17:00-19:00', jueves: ' ', viernes: ' ' },
    { materia: 'SCD1011/ 6BS / INGENIERIA DE SOFTWARE - ROMAN CRUZ JOSE ALFREDO', rep: 'N', creditos: '5', lunes: '15:00-17:00/LDS', martes: ' ', miercoles: ' ', jueves: '15:00-17:00/LDS', viernes: '15:00-16:00/LDS' }
])
const carrerap = ref([
    { carrera: 'INGENIERIA EN SISTEMAS COMPUTACIONALES', especialidad: ' ', creditos: '33', plan: 'ISIC-2010-224' }
])
const periodop = ref([
    { control: '22620119', nombre: 'ROSAS GARCIA MARCO URIEL', grado: '6', periodo: 'ENE-JUN' }
])
</script>

<template>
    <div class="container">
        <h3 class="text-center mt-4">Horario de clases de Sistemas</h3>
        <table class="table table-bordered ">
            <thead>
                <tr>
                    <th scope="col">N° Control</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Grado</th>
                    <th scope="col">Periodo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in periodop" :key="index">
                    <td>{{ p.control }}</td>
                    <td>{{ p.nombre }}</td>
                    <td>{{ p.grado }}</td>
                    <td>{{ p.periodo }}</td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Carrera</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Creditos</th>
                    <th scope="col">Plan de estudios</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, index) in carrerap" :key="index">
                    <td>{{ c.carrera }}</td>
                    <td>{{ c.especialidad }}</td>
                    <td>{{ c.creditos }}</td>
                    <td>{{ c.plan }}</td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Rep</th>
                    <th scope="col">Creditos</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miercoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(h, index) in horario" :key="index">
                    <td>{{ h.materia }}</td>
                    <td>{{ h.rep }}</td>
                    <td>{{ h.creditos }}</td>
                    <td>{{ h.lunes }}</td>
                    <td>{{ h.martes }}</td>
                    <td>{{ h.miercoles }}</td>
                    <td>{{ h.jueves }}</td>
                    <td>{{ h.viernes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
h3 {
    background-color: rgb(168, 168, 247);
    color: rgb(68, 67, 99);
    border-radius: 5px;
}
.table {
    background-color: #fff;
    border: 2px solid rgb(148, 164, 209);
}
th{
    background-color: rgb(228, 225, 255);
}
</style>