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
      <video
        onload="initplayer()"
        autoplay
        preload="auto"
        :class="is('.mp3')?'reproductor hide':'reproductor'"
        id="reproductor"
        controls
        :src="getFile()"
      />
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "player",
  data: () => {
    return {
      shared: store.state
    };
  },
  mounted() {
    initplayer();
  },
  methods: {
    init() {},
    getImage() {
      return this.shared.playingElement != undefined
        ? this.shared.playingElement.image
        : "";
    },
    getTitle() {
      return this.shared.playingElement != undefined
        ? this.shared.playingElement.name
        : "";
    },
    getFile() {
      return this.shared.playingElement != undefined
        ? this.shared.playingElement.file
        : "";
    },
    next() {
      store.playNext();
    },
    previous() {
      store.playPrevious();
    },
    is(extension) {
      if (this.getFile() == "") {
        return true;
      } else {
        return this.getFile().includes(extension);
      }
    }
  }
};
</script>

<style>
.reproductor {
  z-index: 5000;
  position: fixed;
  right: 5px;
  bottom: 132px;
  display: initial;
  opacity: 1;
  width: 45%;
  max-width: 315px;
  height: 170px;
}
</style>