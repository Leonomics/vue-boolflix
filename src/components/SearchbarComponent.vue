<template>
  <div>
      <input type="text" v-model="query" class="form-control" placeholder="Enter movie name">
      <button @click="fetchMovies" type="submit" class="btn btn-primary">Submit</button>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{"title: " + movie.title}}<br>
          {{"original title: "+movie.original_title}}<br>
          {{"original language: "+movie.original_language}}<br>
          {{"average vote: "+movie.vote_average}}<br><br>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchbarComponent',
  data(){
    return{
      api_key: '6774fac658b7c631bbcfd6f459c7eee5',
      movies: [],
      query:'',
      it_flag:'https://countryflagsapi.com/png/it',
      en_flag:'https://countryflagsapi.com/png/gb',
      es_flag:'https://countryflagsapi.com/png/es',
      ja_flag:'https://countryflagsapi.com/png/jp',
    }
  },

  methods:{
    fetchMovies(){
      axios
            .get(`https://api.themoviedb.org/3/search/movie`,{
              params:{
                api_key: this.api_key,
                query: this.query,
              }
            })
            .then((res) => {
            this.movies = res.data.results;
            console.log(res)
        });
    },
  },

  props: {
  },

  /*beforeMount(){
    this.fetchMovies()
  }*/

}
</script>

<style scoped lang="scss">

</style>
