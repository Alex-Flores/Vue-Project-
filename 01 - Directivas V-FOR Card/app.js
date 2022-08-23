const appWeb = new Vue({
    el: '.container',
    data: {
        url: 'https://jsonplaceholder.typicode.com/users',
        titulo: [
            {nombre: 'Clarin', costo: 130, estado: 'Comprar Subs'},
            {nombre: 'La Nacion', costo: 100, estado: 'Subscribirse'},
            {nombre: 'Gente', costo: 98, estado: 'Ser miembro'},
            {nombre: 'Infobae', costo: 102, estado: 'New Castle'},
            {nombre: 'El cronista', costo: 100, estado: 'Ser colaborador'}
        ]
    }
})