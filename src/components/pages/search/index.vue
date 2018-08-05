<template>
    <div class=" row container">
        <div class="col-sm-12">
            <p class="searchTxt">Find your next recipe...</p>
            <div>
                <input type="text" placeholder="search recipes...">
                <i class="fas fa-search searchIcon"></i>
            </div> 
        </div>
          
        
    </div>
</template>

<script>
    export default {
        name: "search-box"
        
    }
</script>

<style scoped>
.container{
    border: 1px solid silver;
    width: 55%;
    height:220px;
    padding-top: 50px;
    padding-left: 100px;
    background-color: white;
    border-radius:10px;
}

input{
    width: 85%;
    height: 60px;
    border-radius:3px;
    background-color: silver;   
}

.searchIcon{
    font-size: 25px;
}

.searchTxt{
    font-size: 28px;
    color: rgb(216, 4, 4);
    margin-left: 50px;
    font-family: 'Lobster', cursive;
    margin-top: -10px;
}

</style>