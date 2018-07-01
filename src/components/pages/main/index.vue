<template>
    <div>
        <MainHeader></MainHeader>
        <img src="../images/header-img.jpg" class="headerImg">

        <MainFooter class="footer"></MainFooter>
       

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
</style>