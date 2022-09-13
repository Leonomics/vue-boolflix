<template>
    <li>
        <h3>{{"title: " + movie.title}}</h3>
        <p>{{"original title: "+movie.original_title}}</p>
        <p>{{"original language: "+movie.lang}}</p>
        <p>{{"average vote: "+movie.vote}}</p>
        <p>{{movie.poster}}</p>
        <img v-if="movie.poster" :src="movie.poster" width="342">
        <img height="20" v-if="movie.flag" :src="movie.flag">
        <p v-else>{{movie.lang}}</p>
    </li>
</template>

<script>
    export default{

        props:{
            movie:{
                type: Object,
                required: true
            }
        },

    }

</script>

<style lang="scss" scoped>
</style>