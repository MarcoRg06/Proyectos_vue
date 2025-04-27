<script setup>
defineProps({
  edad: String,
})
</script>

<template>
<h6 style="color: black;">Soy el componente hijo 1</h6>
<p>{{ edad }}</p>
</template>

<style scoped></style>