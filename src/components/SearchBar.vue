<template>
    <header>
      <div>
        <input type="text" placeholder="Inserisci un titolo" @keyup.enter="fetchMovies" v-model="query">
        <input type="button" value="Cerca" @click="fetchMedia">
      </div>
    </header>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                query: '',
                api_key: '6774fac658b7c631bbcfd6f459c7eee5',
            }
        },
        methods:{

            /*setMovies(movies){
                this.original_movies = movies
            },*/

            fetchMedia(){
                this.fetchMovies(),
                this.fetchSeries()
            },

            fetchMovies(){
            axios
            .get(`https://api.themoviedb.org/3/search/movie`,{
            params:{
                api_key: this.api_key,
                query: this.query,
            }
            })
            .then((res) => {
            console.log(res.data);
            this.$emit('onResponse', res.data.results)
            });
            },

            fetchSeries(){
            axios
            .get(`https://api.themoviedb.org/3/search/tv`,{
            params:{
                api_key: this.api_key,
                query: this.query,
            }
            })
            .then((res) => {
            console.log(res.data);
            this.$emit('onResponse', res.data.results)
            });
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>