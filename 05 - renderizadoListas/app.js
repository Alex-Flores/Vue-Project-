const app = new Vue({
    el: '#app',
    data: {
        producto: '',
        precio: '',
        lista: [],
        //cantidad: 0
    },
    computed: {
        cantidad: function(){
            let c = this.lista.length;
            return c;
        },
        sumaTotal: function(){
            let acumulador = 0;
            this.lista.forEach(element => {
                acumulador +=  element.precio
            });
            return acumulador;
        }
    },
    methods:{
        agregar: function(){
            if( this.producto.trim() != '' && this.precio.trim() != ''){
                this.lista.push({
                    nombre: this.producto,
                    precio:  parseInt( this.precio )
                });

                this.producto = '';
                this.precio = '';
            }

            //this.cantidad = this.lista.length;

        },
        eliminar: function(index){
            console.log(index);
            this.lista.splice(index, 1);
        },
        borrarTodo: function(){
            this.lista = [];
        }
    }
})