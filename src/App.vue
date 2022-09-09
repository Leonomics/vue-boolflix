<template>
  <div id="app">
    <SearchbarComponent/>
  </div>
</template>

<script>
import SearchbarComponent from './components/SearchbarComponent.vue'

export default {
  name: 'App',
  components: {
    SearchbarComponent
  }
}
</script>

<style lang="scss">
  @import './styles/general';
</style>
