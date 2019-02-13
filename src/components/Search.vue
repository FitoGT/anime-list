<template>
    <div class="row">
        <div class="col-sm-12">
            <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <input class="form-control form-control-lg" type="text" placeholder="Search ... " v-model="anime">
                </div>
                <button @click="search" type="button" class="btn btn-lg btn-outline-primary mb-2">Search</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            anime:''
        }
    },
    methods:{
        search(){
            this.$emit('searchedAnime',[]);
            let uri = `http://localhost:4000/anime/${this.anime}/1`;
            this.axios.get(uri).then((response) => {
                this.$emit('searchedAnime',response.data.results);
            });
        }
    }
}
</script>

<style>

</style>
