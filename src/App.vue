<template>
  <div id="app">
    <SearchBar @onResponse="setMovies"/>
    <ul>
      <MovieCardComponent v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </ul>
  </div>
</template>

<script>
//import SearchbarComponent from './components/SearchbarComponent.vue'
import MovieCardComponent from './components/MovieCardComponent.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  data(){
    return{
      api_key: '6774fac658b7c631bbcfd6f459c7eee5',
      original_movies: [],
      query:'',
      posterBaseUri:'',
    };
  },
  computed:{
    movies(){
      return this.original_movies.map((el)=>{
        const newMovie = {
          id: el.id,
          title: el.title,
          original_title: el.original_title,
          lang: el.original_language,
          flag:'',
          poster:`${this.posterBaseUri}w342${el.poster_path}`,
          vote: Math.ceil(el.vote_average/2)
        }
        return newMovie
      })
    }
  },
  methods:{
    setMovies(movies){
      this.original_movies = movies
    },
  },
  components: {
    MovieCardComponent,
    SearchBar
}
}
</script>

<style lang="scss">
  @import './styles/general';
</style>
