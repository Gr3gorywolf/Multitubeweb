<template>
  <div id="app">
    <navBar></navBar>
    <div style="width:100vw;">
      <Library ></Library> 
    </div> 
    <player></player>
    <div style="position: fixed;bottom:0px;z-index:9999;">
      <bottom-bar style="width:100%;"></bottom-bar>
    </div>
  </div>
</template>
<script>
import Library from "./pages/Library";
import player from "./components/Player";
import bottomBar from "./components/BottomBar";
import navBar from "./components/NavBar";
export default {
components: {
  Library,
  player,
  bottomBar,
  navBar

},
mounted(){
   console.log(process.env.VUE_APP_MODE);
}


};
</script>>
<style>

</style>
