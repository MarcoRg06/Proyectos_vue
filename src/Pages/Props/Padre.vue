<script setup>
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';
</script>

<template>
    <div class="container">
        <h1 >Soy el componente padre</h1>
        <Hijo1 class="mt-4" edad="10" />
        <Hijo2 class="mt-4" edad="4" />
    </div>
</template>

<style scoped> 

</style>
