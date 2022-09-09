<template>
  <div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter movie name">
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
