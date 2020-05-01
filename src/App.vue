<template>
  <div id="app">
    <navBar></navBar>
    <div style="width:100vw;">
      <router-view></router-view>
    </div> 
    <player></player>
    <!--<div style="position: fixed;bottom:0px;z-index:9999;">
      <bottom-bar style="width:100%;"></bottom-bar>
    </div>-->
  </div>
</template>
<script>
import player from "./components/Player";
import navBar from "./components/NavBar";
export default {
components: {
  player,
  navBar

},
mounted(){
   console.log(process.env.VUE_APP_MODE);
}


};
</script>>
<style>

</style>
