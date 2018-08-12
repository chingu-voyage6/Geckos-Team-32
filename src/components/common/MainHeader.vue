<template>
<div>
    <div class="container-fluid">
        <div class="row header-line">
            <div class="col-sm-3">
                <router-link :to="{ name:'MainPage'}" class="nav-link" tag="div"><img src="./imgs/chef.png" class="logo"></router-link>
            </div>
            <div class="col-sm-6  title">
                <h1 class="titleText">Chez Gourmet</h1>
            </div>
            <div class="col-sm-3 social">
                <img src="./imgs/fb-icon.png" class="social-icon">
                <img src="./imgs/pinterest-icon.png" class="social-icon">
                <img src="./imgs/insta-icon.png" class="social-icon">
            </div>
        </div>
    </div>
    <img :src="require('+/imgs/header-img.jpg')" class="hero-img">
    </div>
</template>

<script>
export default {};
</script>

<style>
.header-line {
  min-height: 100px;
}

.logo {
  height: 80px;
  position: relative;
  top: 8px;
  cursor: pointer;
}
.title{
    margin: auto;
}

.titleText {
  text-align: center;
  font-family: "Oleo Script", cursive;
  font-size: 3.3em;
  letter-spacing: 3px;
  color: rgb(216, 4, 4);
}

.social {
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.social-icon {
  display: inline-block !important;
  height: 40px;
  margin: auto 12px;
}

.hero-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>

