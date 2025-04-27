<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        }

    },
    methods: {
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta() {
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        division() {
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        },
        multiplicacion() {
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        }
    }
}
</script>
<template>
    <div class="continer">
        <div class="col-md-12">
            <div class="card shadow p-4">
                <h1 class="h1"> Calculadora V1</h1>
                <h2 class="h2 mt-4 p-3"> {{ resultado }} </h2>
                <div class="mb-3">
                    <label for="">Numero 1</label>
                    <input type="number" class="form-control" v-model="numero1">
                </div>
                <div class="mb-3">
                    <label for="">Numero 2</label>
                    <input type="number" class="form-control" v-model="numero2">
                </div>
                <div class="d-flex justify-content-center gap-2">
                    <button @click="sumar" class="button btn btn-danger">Sumar</button>
                    <button @click="resta" class="button btn btn-success">Resta</button>

                    <button @click="division" class="button btn btn-secondary">Division</button>

                    <button @click="multiplicacion" class="button btn btn-warning">Multiplicacion</button>


                </div>
            </div>

        </div>


    </div>
</template>

<style>
.h1 {
    color: rgb(51, 48, 48);
    background-color: rgb(115, 161, 247);
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}

.h2 {
    background-color: rgb(241, 245, 248);
    text-align: right;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;

}
.button{
    width: 150px;
    height: auto;
}




</style>