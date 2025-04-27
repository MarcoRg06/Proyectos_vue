<script setup>
import Hijo3 from './Hijo3.vue';
import Hijo4 from './Hijo4.vue';
</script>

<template>
    <div class="container">
        <h1 class="h1">Hola Soy el componente Padre2</h1>
        <Hijo3 class="mt-4" name="Marco Uriel Rosas Garcia" />
        <Hijo4 class="mt-4" numcontrol="Ingenieria en Sistemas Computacionales" />
    </div>
</template>

<style scoped>
.h1 {
    text-align: center;
    background-color: rgb(197, 90, 90);
     border-radius: 15px;
}
</style>
