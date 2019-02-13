<template>
  <div class="container">
    <search @searchedAnime="anime($event)"></search>
    <list :animes="animes" v-if="animes.length>0"></list>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'


export default {
  name: 'app',
  components: {
    Search,
    List
  },
  data(){
    return{
      animes:[]
    }
  },
  methods:{
    anime(event){
      this.animes=event;
    }
  }
}
</script>

