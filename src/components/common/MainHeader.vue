<template>
<div>
    <div class="container-fluid">
        <div class="row header-line">
            <div class="col-sm-3">
                <img src="./imgs/chef.png" class="logo">
            </div>
            <div class="col-sm-6  title">
                <h1 class="titleText">Chez Gourmet</h1>
            </div>
            <div class="col-sm-3">
                <div class="social">
                    <img src="./imgs/fb-icon.png" class="social-icon">
                    <img src="./imgs/pinterest-icon.png" class="social-icon">
                    <img src="./imgs/insta-icon.png" class="social-icon">
                </div>
            </div>
        </div>
    </div>
    <img :src="require('+/imgs/header-img.jpg')" class="hero-img">
    </div>
</template>

<script>
export default {
}
</script>

<style>
.header-line{
    /* background-color: silver; */
    height: 100px;
}

.logo{
    height: 80px;
    position: relative;
    top:8px;
}

.titleText{
    text-align: center;
    /* font-family: 'Prosto One', cursive; */
    font-family: 'Oleo Script', cursive;
    font-size: 3.3em;
    letter-spacing: 3px;
    position: relative;
    top:15px;
    color: #ff0000b7
}

.social{
    text-align: right;
}
.social-icon{
    height:40px;
    margin:12px;
    position: relative;
    top: 20px;
}

.hero-img{
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>

