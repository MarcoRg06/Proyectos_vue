<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h4>Evento Click</h4>
                <button @click="clic" class="button btn btn-danger" type="button">Dale clic</button>
                <button @click="soyButon" class="button btn btn-warning mx-2" type="button">Dale clic 2</button>

            </div>
            <div>
                <h4>Evento Change</h4>
                <label class="input-group-text" for="form-control"> Ingresa tu nombre</label>
                <input class="form-control" type="text" id="nombre" @change="nombreE">
                <p>El nombre ingresado es: <strong> {{ nombre }}</strong> </p>
            </div>
            <!-- 
            <div>
                <h3>Evento de mouseenter</h3>
                <div style="color: #ffff; width: 300px; height: 200px; background-color: black;  text-align: center; padding: 15px; border-radius: 15px;"
                    @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                    <p>pause el mouse</p>
                    <p>{{ mensaje }}</p>

                </div>
            </div>
          -->
        </div>

    </div>

</template>
<script>
export default {
    data() {
        return {
            nombre: '',
            // mensaje: '',
        }
    },
    methods: {
        clic() {
            alert("gracias por dale clic")
        },
        soyButon() {
            alert("Soy un boton")
        },
        nombreE(event) {
            this.nombre = event.target.value
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
.button{
width: 150px;
height: auto;

}
</style>