<template>
    <div>
    recipe
    {{$route.params}}

    </div>
</template>

<script>
import  { mapGetters }  from 'vuex';

    export default {
        name:"recipe",
        data(){
            return{
                recipeData:{}
            }
        },
        computed:{
            data(){
                retur
            }
        },
        methods:{
            ...mapGetters(["getRecipieById"])
        },
        created(){
            console.log(this.$store.recipes)
            console.log(this.$route.params.id)


        }
    }
</script>

<style scoped>

</style>