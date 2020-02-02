<template>
  <div>
    <div class="col s12 m6 l4 xl3 carta" v-if="!isMobileDevice()">
      <div class="card hoverable">
        <div class="card-image">
          <img v-bind:src="library.image" style="height:230px ;width:100%;" />
          <span
            class="card-title"
            style="background-color: rgba(0, 0, 0, 0.295);font-size:16px;"
          >{{ library.name }}</span>
        </div>
        <div class="card-action">
          <a href="#">Abrir en youtube</a> 
          <a href="#" @click="playElement(library)">Reproducir</a>
        </div>
      </div>
    </div>

    <div class="col s12 m12 l6 xl3 carta" @click="playElement(library)" v-if="isMobileDevice()">
      <ul class="collection hoverable">
        <li class="collection-item avatar" style="padding-top:20px;">
          <img v-bind:src="library.image" alt class="circle" />
          <div
            class="title"
            style="margin-top:10px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
          >{{ library.name }}</div>
          <a href="#!" class="secondary-content">
            <i class="material-icons">play</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "media-card",
  props: {
    library: Object
  },
  data: () => {
    return {
      shared: store.state
    };
  },
  mounted() {},
  methods: {
    isMobileDevice() {
      return (  
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    },
    playElement(element) {
      this.shared.playingElement = element;
    }
  }
};
</script>

<style>
</style>