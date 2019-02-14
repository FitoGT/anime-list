<template>
    <div class="row">
        <div class="col-sm-12">
            <ul class="list-unstyled">
                <li v-for="(anime, i) in sliced" :key="i">
                     <div class="card flex-row">
                        <div class="card-header border-0">
                            <img :src="anime.image_url" alt="">
                        </div>
                        <div class="card-block px-2">
                            <h4 class="card-title">{{anime.title}}</h4>
                            <p class="card-text" >{{anime.synopsis}}</p>
                            <button class="btn btn-outline-primary mb-2" @click="add(anime.image_url,anime.title,anime.synopsis)">Watch!</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: false, 
            offset: 5,
            display: 15,
            trigger: 50,
            end: false,
        }
    },
    props: ['animes'],
    mounted() {
      this.scroll();
    },
    computed: {
      sliced() {
         return this.animes.slice(0, this.display);
      },    
    },
    methods:{
        scroll(){
         window.onscroll = () => {
            if (window.innerHeight + window.scrollY >=(document.body.offsetHeight - this.trigger)){
               if (this.display < this.animes.length) {
                  this.display = this.display + this.offset;
               }
               else {
                  this.end = true;
               }
            }
         };
        },
        add(img,title,synopsis){
            let anime ={
                id_user:1,
                img_url: img,
                title:title,
                synopsis:synopsis
            }
            var self = this;
            this.axios.post('https://tareas-9923c.firebaseio.com/animes.json',anime)
            .then(function (response) {
                self.$swal({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    type: 'success',
                    title: 'Added successfully'
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }  
}
</script>

<style>

</style>
