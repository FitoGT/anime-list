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
         window.onscroll = ev => {
            if (window.innerHeight + window.scrollY >=(document.body.offsetHeight - this.trigger)){
               if (this.display < this.animes.length) {
                  this.display = this.display + this.offset;
               }
               else {
                  this.end = true;
               }
            }
         };
      }
    }  
}
</script>

<style>

</style>
