<script>
export default {
    data() {
        return {
            //DATOS ALUMNOS
            alumnos: [
                { id: 1, nombre: 'Marco Uriel Rosas Garcia', gustos: 'Jurgar cualquier videojuego con amigos' },
                { id: 2, nombre: 'Pedro Garcia Garcia', gustos: 'Jugar Fornite con amigos' },
                { id: 3, nombre: 'Irvin Jimenez Sanchez', gustos: 'Dibujar y jugar videojuegos' },
                { id: 4, nombre: 'Diego Cruz Cruz', gustos: 'Hablar con sus amigos y hacer mas amigos' },
                { id: 5, nombre: 'Erik Israel Cuevas Hernandez', gustos: 'Ayudar a los demas y compartir experiencias con amigos' },               
                { id: 6, nombre: 'Santiago Velasco Cruz', gustos: 'Le gusta caminar en la montaña los fines de semana' },
                { id: 7, nombre: 'Elena Ríos Lopez', gustos: 'Disfruta pintar acuarelas de paisajes urbanos' },
                { id: 8, nombre: 'Martín Alarcón Gutierrez', gustos: 'Es apasionado por la cocina y le encanta experimentar con recetas de postres' },
                { id: 9, nombre: 'Camila Rodriguez Lopez', gustos: 'Le fascina la astronomía y pasa las noches observando estrellas con su telescopio' },
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <h3 class="h3 mt-4">Lista de Personas</h3>
        <ul class="ul">
            <li v-for="alumno in alumnos" :key="alumno.id" class="li">
                <strong>{{ alumno.id }}</strong>.-
                <strong>{{ alumno.nombre }} </strong> -
                <strong>{{ alumno.gustos }} </strong>
            </li>
        </ul>
    </div>
</template>
<style scoped>

.h3 {
    color: rgb(219, 218, 221);
    background-color:#34495e;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}
.ul {
    list-style-type: none;
    border-radius: 15px;
}
.li {
    color: rgb(59, 54, 54);
    background-color:#85929e  ;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}
</style>