<template>
    <li>
        <h3>{{"title: " + series.title}}</h3>
        <p>{{"original title: "+series.original_title}}</p>
        <p>{{"original language: "+series.lang}}</p>
        <p>{{"average vote: "+series.vote}}</p>
    </li>
</template>

<script>
    export default{


        props:{
            series:{
                type: Object,
                required: true
            }
        },


    }

</script>

<style lang="scss" scoped>
</style>