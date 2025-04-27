<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h3 class="h3">EVENTOS DE LOS BOTONES</h3>
                <button @click="clic" class="button btn btn-primary" type="button">Dale clic</button>
                <button @click="soyButon" class="button btn btn-secondary mx-4" type="button">Dale clic 2</button>
            </div>
            <div>
                <h3 class="h3 mt-4">Evento Change</h3>
                <label class="input-group-text" for="form-control"> Ingresa un trabalenguas</label>
                <input class="form-control" type="text" id="trabaL" @change="tb">
                <p>El trabalenguas ingresado es: "<strong> {{ trabaL }}</strong> " </p>
            </div>
            <div>
                <h3 class="h3">Evento de mouseenter</h3>
                <div style="color: #ffff; width: 300px; height: 200px; background-color: blue;  text-align: center; padding: 15px; border-radius: 15px;"
                    @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                    <p>pause el mouse</p>
                    <p>{{ mensaje }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            trabaL: '',
            mensaje: '',
        }
    },
    methods: {
        clic() {
            alert("¡Hola soy un boton, Gracias por hacer click! ;)")
        },
        soyButon() {
            alert("¡Hola soy otro boton, Gracias por hacer click! :D")
        },
        tb(event) {
            this.trabaL = event.target.value
        },
        mostrarMensaje() {
            this.mensaje = "El mensaje esta dentro del rectangulo"
        },
        ocultarMensaje() {
            this.mensaje = "El mensaje esta fuera del rectangulo"

        }
    }
}
</script>
<style scoped>
.h3 {
    background-color: rgb(233, 232, 232);
    border-radius: 6px;
}
.button{
    width: 150px;
    height: auto;
}
</style>