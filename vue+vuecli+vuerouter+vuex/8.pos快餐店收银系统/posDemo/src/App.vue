<template>
  <div id="app">
    <leftNav class="left"></leftNav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftNav from "@/components/common/LeftNav"

export default {
  name: 'App',
  components:{
    LeftNav
  }
}
</script>

<style>
html,body,#app{height: 100%;}
ul li{list-style: none;}
*{margin: 0;padding: 0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left{width: 5%;float:left;height:100%;}
.main{width: 95%;height: 100%;margin-left: 5%;}
</style>
