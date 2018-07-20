<template>
    <div class=" row topNav">
        <div class="col-sm-12">
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <router-link :to="{ name:'MainPage'}" class="nav-link" tag="h6">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name:'SubmitPage'}" class="nav-link" tag="h6">Add Recipe</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name:'LoginPage'}" class="nav-link" tag="h6">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name:'SignUp'}" class="nav-link" tag="h6">Sign Up</router-link>
            </li>
        </ul>
    </div>
</div>        
</template>

<script>
export default {};
</script>

<style scoped>
.topNav {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 5px;
}

h6 {
  border-right: 1px solid silver;
  font-family: "Trocchi", serif;
}
</style>