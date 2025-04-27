<script setup>
defineProps({
    numcontrol: String,
})
</script>

<template>
    <h6 class="h6" > (Hijo 4) Carrera:</h6>
    <p>{{ numcontrol }}</p>
</template>

<style scoped>
.h6 {
    background-color: rgb(255, 212, 183);
    border-radius: 5px;
}
</style>