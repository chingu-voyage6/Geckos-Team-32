<template>
    <div>
        <TopBar/>
        <MainHeader/>
        <img src="../images/header-img.jpg" class="headerImg">
        <search class="search"/>
        <MainFooter class="footer"/>
        
       

    </div>
</template>

<script>
    import TopBar from "+/TopBar"
    import MainHeader from "+/MainHeader"
    import MainFooter from "+/MainFooter"
    import search from "*/search"
    
    export default {
        components:{
            TopBar,
            MainHeader,
            MainFooter,
            search
            
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

.search{
    margin-left: 300px;
    position: relative;
    top:-150px;
}

</style>