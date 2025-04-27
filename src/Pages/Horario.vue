<template>
    <div class="container">
        <h3 class="mt-4">Horario de clases de Sistemas</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Marter</th>
                    <th scope="col">Miercoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>

                </tr>
            </thead>
            <tbody>
                    <tr v-for="(h, index) in horario" :key="index">
                        <td>{{ h.hora }}</td>
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
<script setup>
import {ref} from 'vue';
const horario = ref ([
    {hora:'7:00 - 9:00', lunes: 'IA' , martes:'Agil', miercoles:'web',jueves:'IA', viernes:'Movil'},
    {hora:'9:00 - 11:00', lunes: 'IA' , martes:'Agil', miercoles:'web',jueves:'IA', viernes:'Movil'},
    {hora:'7:00 - 9:00', lunes: 'IA' , martes:'Agil', miercoles:'web',jueves:'IA', viernes:'Movil'},
    {hora:'7:00 - 9:00', lunes: 'IA' , martes:'Agil', miercoles:'web',jueves:'IA', viernes:'Movil'},
    {hora:'7:00 - 9:00', lunes: 'IA' , martes:'Agil', miercoles:'web',jueves:'IA', viernes:'Movil'},

])
</script>