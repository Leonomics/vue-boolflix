<template>
  <div id="app">
    <SearchBar @onMovieResponse="setMovies" @onSeriesesResponse="setSerieses"/>
    <h2>Film</h2>
    <ul class="row">
      <MovieCardComponent v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </ul>
    <h2>Serie</h2>
    <ul class="row">
      <MovieCardComponent v-for="series in serieses" :key="series.id" :movie="series"/>
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
      flags:['en', 'ja', 'it'],
      api_key: '6774fac658b7c631bbcfd6f459c7eee5',
      original_movies: [],
      original_serieses: [],
      query:'',
      posterBaseUri:'https://image.tmdb.org/t/p/',
      posterSize:'w342'
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
          flag:this.flags.includes(el.original_language) ? require(`./assets/${el.original_language}.png`) : null,
          poster: this.getFullPath(el.poster_path),
          vote: Math.ceil(el.vote_average/2)
        }
        return newMovie
      })


    },

    serieses(){
      return this.original_serieses.map(({
        id, name, original_name, original_language, poster_path, vote_average
      })=>{
        const newSeries = {
          id,
          title: name,
          original_title: original_name,
          lang: original_language,
          flag:this.flags.includes(original_language) ? require(`./assets/${original_language}.png`) : null,
          poster: this.getFullPath(poster_path),
          vote: Math.ceil(vote_average/2)
        }
        return newSeries
      })
    }
  },
  methods:{
    setMedia(){
      this.setMovies(),
      this.setSerieses()
    },

    setMovies(movies){
      this.original_movies = movies
    },

    setSerieses(serieses){
      this.original_serieses = serieses
    },

    getFullPath(posterPath){
      if(posterPath){
        return `${this.posterBaseUri}${this.posterSize}${posterPath}`
      }
      return null
    }
  },
  components: {
    MovieCardComponent,
    SearchBar,
}
}
</script>

<style lang="scss">
  @import './styles/general.scss';

  .row{
    margin-bottom: 3rem;
  }
</style>
