<template>
  <div>
    <div class="material-player white">
      <div class="barra"></div>
      <progress class="progreso red prg" id="bar" value="0" max="100"></progress>

      <img class="playingphoto" id="imgcancion" :src="getImage()" />
      <div class="titlecontainer">
        <h6 class="black-text titulo" id="titulocancion">{{getTitle()}}</h6>
        <h6 class="lightgray-text titulo2" id="time"></h6>
      </div>

      <i
        class="material-icons boton black-text"
        clickable
        style="margin-top: 13px ;position: fixed;right:68px;"
        @click="previous()"
      >skip_previous</i>
      <i
        class="material-icons boton black-text"
        href="#"
        id="playpause"
        onclick="playpause()"
        style="margin-top: 13px ;position: fixed;right:38px;"
      >play_arrow</i>
      <i
        class="material-icons boton black-text"
        href="#"
        style="margin-top: 13px ;position: fixed;right:10px;"
        @click="next()"
      >skip_next</i>
    </div>

    <audio autoplay preload="auto" class="reproductor" id="reproductor" :src="getFile()" />
  </div>
</template>

<script>
module.exports = {
  name: "player",
  data:()=>{
      return{
        shared:store.state
      }
  },
  mounted() {
    console.log("me monte");
       initplayer();
  },
  methods:{
    getImage(){
      return this.shared.playingElement != undefined ? this.shared.playingElement.image  : "";
    },
    getTitle(){
      return this.shared.playingElement != undefined ? this.shared.playingElement.name  : "";
    },
    getFile(){
       return this.shared.playingElement != undefined ? this.shared.playingElement.file  : "";
    },
    next(){
      store.playNext()
    },
    previous(){
      store.playPrevious();
    }
  }
};
</script>

<style>
.reproductor {
  z-index: 5000;
  position: fixed;
  top: 90%;
  display: flex;
  opacity: 1;
  width: 100%;
  height: 10%;
}
</style>