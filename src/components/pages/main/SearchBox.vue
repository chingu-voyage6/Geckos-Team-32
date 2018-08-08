<template>
    <div class="row container">
        <div class="col-sm-12">
            <div class="search-text before">
              <div class="heading">
                <span class="icon searching"></span>
                <span>Find your next recipe...</span>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Type a term and hit enter" v-model="query" @input="$emit('search',{query})">
            </div> 
            <div class="search-text after">
              <div class="heading">
                <span>... post your best one ...</span>
                <router-link :to="{ name:'SubmitPage'}" class="nav-link" tag="a"><span class="icon play"></span></router-link>
                
              </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
  name: "search-box",
  data: () => {
    return {
      query: ""
    };
  }
};
</script>

<style  lang="scss" scoped>
.container {
  border: 1px solid silver;
  max-width: 700px;
  padding: 15px 20px;
  background-color: white;
}

input {
  width: 100%;
  height: 60px;
  border-radius: 3px;
  background-color: #e6e6e6;
  box-shadow: none;
  outline: 0;
  border: 1px solid silver;
  appearance: none;
  padding: 5px 15px;
}

.searchIcon {
  font-size: 25px;
}

.search-text {
  display: flex;
}

.heading {
  display: flex;
  font-size: 28px;
  color: rgb(216, 4, 4);
  font-family: Nothing You Could Do;
  font-weight: bold;
}

.before {
  text-align: left;
  margin-top: 0;
  margin-bottom: 12px;
}
.after {
  margin-top: 12px;
  margin-bottom: 0;
  text-align: right;
  align-content: flex-end;
  /* align-items: flex-end; */
  .heading {
    margin-left: auto;
  }
}
.icon {
  display: block;
  background-color: gray;
  width: 1.5em;
  height: 1.5em;
  background-size: contain;
  background-repeat: no-repeat;
}
.play {
  margin-left: 20px;
  background-image: url("./play.png");
}

.searching {
  margin-right: 20px;
  background-image: url("./search-icon.png");
}
</style>