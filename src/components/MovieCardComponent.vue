<template>
    <li class="col-4 cardFrame" max-width="342">
        <div class="cardFrame">
            <img class="poster" v-if="movie.poster" :src="movie.poster" width="342">
            <div class="cardText">
                <h3>{{"title: " + movie.title}}</h3>
                <p>{{"original title: "+movie.original_title}}</p>
                <p>{{"original language: "+movie.lang}}</p>
                <p>{{"average vote: "+movie.vote}}</p>
            </div>
        </div>
        <!--<div class="cardText">
            <h3>{{"title: " + movie.title}}</h3>
            <p>{{"original title: "+movie.original_title}}</p>
            <p>{{"original language: "+movie.lang}}</p>
            <p>{{"average vote: "+movie.vote}}</p>
            <p>{{movie.poster}}</p>
        </div>
        <img class="poster" v-if="movie.poster" :src="movie.poster" width="342">
        <img height="20" v-if="movie.flag" :src="movie.flag">
        <p v-else>{{movie.lang}}</p>-->
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
    .cardFrame{
        position: relative;
        overflow: hidden;
        width: 342px;
        height: 684px;
    }

    .cardText{
        position: absolute;
        top: 0%;
        left: 0%;
        width: 342px;
        height: 684px;

    }

    .cardText:hover{
        background-color: black;
        color: white;
    }
    .poster{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

</style>