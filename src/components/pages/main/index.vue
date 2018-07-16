<template>
    <div>
        <TopBar/>
        <MainHeader/>
        <img src="../images/header-img.jpg" class="headerImg">

        <MainFooter class="footer"/>
       

    </div>
</template>

<script>
    import TopBar from "+/TopBar"
    import MainHeader from "+/MainHeader"
    import MainFooter from "+/MainFooter"
    
    export default {
        components:{
            TopBar,
            MainHeader,
            MainFooter,
            
        },
    }

</script>

<style scoped>
.headerImg{
    width: 100%;
    height: 350px;
}

.footer{
    position: relative;
    top: 800px;
   

}
</style>