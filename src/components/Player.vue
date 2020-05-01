<template>
  <div>
    <div class="material-player white">
      <div class="barra"></div>
      <progress class="progreso red prg" id="bar" @click="seek" value="0" max="100"></progress>

      <img class="playingphoto" id="imgcancion" :src="playingImage" />
      <div class="titlecontainer">
        <h6 class="black-text titulo" id="titulocancion">{{playingTitle}}</h6>
        <h6 class="lightgray-text titulo2" id="time"></h6>
      </div>

      <i
        class="material-icons boton black-text"
        clickable
        style="margin-top: 13px ;position: fixed;right:68px;"
        @click="playPrevious"
      >skip_previous</i>
      <i
        class="material-icons boton black-text"
        href="#"
        id="playpause"
        @click="playpause"
        style="margin-top: 13px ;position: fixed;right:38px;"
      >play_arrow</i>
      <i
        class="material-icons boton black-text"
        href="#"
        style="margin-top: 13px ;position: fixed;right:10px;"
        @click="playNext"
      >skip_next</i>
      <video
        autoplay
        preload="auto"
        :class="is('.mp3')?'reproductor hide':'reproductor'"
        id="reproductor"
        controls
        :src="playingFile"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import player from "../assets/js/player.js";
export default {
  name: "player",
  data: () => {
    return {};
  },
  mounted() {
    window.onload = () => {
         
    };
    this.init();
  },
  computed: {
    ...mapGetters("current", ["playingImage", "playingTitle", "playingFile"])
  },
  methods: {
    ...mapActions("library", ["playNext", "playPrevious"]),
    init() {
      player.initplayer();
    },
    playpause() {
      player.playpause();
    },
    is(extension) {
      if (this.playingFile == "") {
        return true;
      } else {
        return this.playingFile.includes(extension);
      }
    },
    seek(event) {
    
      var percent = event.offsetX / this.$el.offsetWidth;
        console.log(percent);
      player.audio.currentTime = percent * player.audio.duration;
    }
  }
};
</script>

<style>
.reproductor {
  z-index: 5000;
  position: fixed;
  right: 5px;
  bottom: 69px;
  display: initial;
  opacity: 1;
  width: 50%;
  max-width: 315px;
  height: 180px;
}
.boton{
  cursor:pointer;
}
</style>