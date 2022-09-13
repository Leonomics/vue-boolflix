<template>
    <li>
        <h3>{{"title: " + movie.title}}</h3>
        <p>{{"original title: "+movie.original_title}}</p>
        <p>{{"original language: "+movie.lang}}</p>
        <p>{{"average vote: "+movie.vote}}</p>
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