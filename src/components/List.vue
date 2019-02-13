<template>
    <div class="row">
        <div class="col-sm-12">
            <ul class="list-group list-group">
                <li v-for="(anime, i) in sliced" :key="i" class="list-group-item">
                    <p>{{anime.title}}</p>
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
      // track scroll event
      this.scroll();
    },
    computed: {
      // slice the array of data to display
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
