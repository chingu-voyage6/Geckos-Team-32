<template>
    <div>
       
    </div>
</template>

<script>
    import MainHeader from "+/MainHeader"
    import MainFooter from "+/MainFooter"
    
    export default {
        components:{
            MainHeader,
            MainFooter
        },
    }

</script>

<style scoped>
.headerImg{
    width: 100%;
    height: 400px;
}

.footer{
    position: relative;
    top: 800px;
   

}

.searchBar{
    margin:  -4em auto;
    background: white;
    height: 8em;
    border: 1px solid #ff0000b7;
    border-radius: 5px;
}

.searchBar_input{
    margin: auto;
}

.searchBar_input input{
    background: rgb(214, 213, 213);
    height: 30px;
    border: 0.5px solid gray;
    border-radius: 5px;
    width: 100%;
}

.searchBarText{
     text-align: center;
    /* font-family: 'Prosto One', cursive; */
    font-family: 'Oleo Script', cursive;
    font-size: 1.5em;
    letter-spacing: 3px;
    position: relative;
    padding:8px 0;
    color: #ff0000b7;
}
</style>