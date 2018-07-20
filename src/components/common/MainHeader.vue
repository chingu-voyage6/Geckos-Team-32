<template>
    <div class="container-fluid">
        <div class="row header">
            <div class="col-sm-4">
                <img src="./imgs/chef.png" class="logo">
            </div>

            <div class="col-sm-4  title">
                <h1 class="titleText">Chez Gourmet</h1>
            </div>            

            <div class="col-sm-4 links">                
                    <a href="index.html"> <div class="link">Home</div> </a>
                    <a href="sign.html"> <div class="link">Sign in</div> </a>
                    <a href="log_in.html"> <div class="link" id="log_button" >Log in</div> </a>
                    <a href="user_page.html"> <div class="link" id="user_button" >My page</div> </a>               
            </div>
        </div>
    </div>
</template>




<script>
export default {
    
}
</script>



<style>

.header{
    /* background-color: silver; */
    height: auto;
}

.logo{
    height: 50px;
    position: relative;
    padding-top: 12px;
}

.titleText{
    text-align: center;
    /* font-family: 'Prosto One', cursive; */
    font-family: 'Oleo Script', cursive;
    font-size: 2em;
    letter-spacing: 3px;
    position: relative;
    padding:8px 0;
    color: #ff0000b7;
}

.link{
    display: inline-flex;
    margin: 18px 10px;
}

.links{
    text-align: right;
}

 a{
    color: #ff0000b7;
}

#user_button{
    display: none;
}


</style>

