<template>
<div class="container-fluid">
     <div class="row">
        <div class="col-sm-6 footer">
        <p class="footerText">Chingu Geckos Team-32</p>    
        </div> 
        <div class="col-sm-6 footer social">
                <img src="./imgs/fb-icon.png" class="social-icon">
                <img src="./imgs/pinterest-icon.png" class="social-icon">
                <img src="./imgs/insta-icon.png" class="social-icon">
        </div>  
    </div>
</div>
   
</template>


<script>
export default {
    
}
</script>



<style scoped>
.footer{
    height: 60px;
    background-color:#ff0000b7;
     width:100%
}

.footerText{
    text-align: center;
    color:white;
    position: relative;
    top: 20px;
}

.social{
    text-align: right;
}
.social-icon{
    height:20px;
    margin:8px;
    position: relative;
    top: 8px;
    background-color: white;    
}
</style>



