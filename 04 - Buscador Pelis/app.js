const appWeb = new Vue({
    el: '#app',
    data: {
        lista: peliculas,
        si_style: 'fa-solid fa-lg fa-heart like',
        no_style: 'fa-solid fa-lg fa-heart',
        isactive: true,
        namePeli: ''
    },
    methods: {
        cambiar(f){
            
            if(f.like){
                f.like = false;
            }else{
                f.like = true;
            }
            console.log(f.id);
            // console.log(f.like);
            // console.log('click');
        }
    },
    computed: {
        filtrarCard(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.namePeli.toLowerCase());
            });
        }
    }
})