<template>
  <div>
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchbarComponent',
  data(){
    return{
      api_key: '6774fac658b7c631bbcfd6f459c7eee5',
    }
  },
  props: {
  },

  created() {
        axios
            .get("https://developers.themoviedb.org/3/search/movie")
            .then((res) => {
            console.log(res.data);
            this.listDisks = res.data.response;
        });
    },
}
</script>

<style scoped lang="scss">

</style>
