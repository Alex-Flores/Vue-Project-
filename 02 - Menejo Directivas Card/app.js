const appWeb = new Vue({
    el: '#container',
    data: {
        mensaje: [
            {titulo: 'Bienvenido', contenido: 'Este es un mensaje de bienvenida', estado: 'estudiante', costo: 0},
            {titulo: 'Dudas', contenido: 'Aca pongo el contenido', estado: 'usuario', costo: 100},
            {titulo: 'Ganador', contenido: 'Sos el ganador de gran premio', estado: 'becado', costo: 150}
        ],
        nuevoMensaje: '',
        nuevoContenido: '',
        nuevoEstado: '',
        nuevoCosto: ''
    },
    methods:{
        mensajeMetodo(){
            this.mensaje.push({
                titulo: this.nuevoMensaje, 
                contenido: this.nuevoContenido, 
                estado: this.nuevoEstado, 
                costo: this.nuevoCosto
            })
        }
    }
})