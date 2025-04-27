<script>
export default {
    data() {
        return {
            //DATOS ALUMNOS
            alumnos:[
                {nc:12345, nombre: 'Marco',carrera: 'ISC'},
                {nc:12345, nombre: 'Uriel',carrera: 'TICS'},
                {nc:12345, nombre: 'Pedro',carrera: 'ADMIN'},
                {nc:12345, nombre: 'Oscar',carrera: 'IMT'},
                {nc:12345, nombre: 'Daniel',carrera: 'IC'},
                {nc:12345, nombre: 'Gustavo',carrera: 'ISC'},
        ]
        //id, nombre completo, que nos gusta
        }
    },

}
</script>
<template>
<div class="container">
    <h3 class="h3 mt-4">Lista de alumnos</h3>
    <ul class="ul">
        <li v-for="alumno in  alumnos" :key="alumno.nc" class="li">
            <strong>{{ alumno.nombre }} </strong> -
            <strong>{{ alumno.carrera }} </strong>

        </li>
    </ul>
</div>
</template>
<style scoped>
.h3{
   color: rgb(0, 0, 0);
    background-color: rgb(205, 134, 233);
    border-radius:15px ;
    padding: 10px;
    text-align: center;
    
}
.ul{
    list-style-type: none;
    color: blueviolet;
    border-radius: 15px;
}
.li{
    color: white;
    background-color: rgb(80, 79, 79);
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}
</style>