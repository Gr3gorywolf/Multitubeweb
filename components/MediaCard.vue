<template>
  <div>
    <div class="col s12 carta" v-if="canShow()">
      <div class="card horizontal">
      <div class="card-image">
        <img v-bind:src="library.image">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ library.name }}</p>
        </div>
        <div class="card-action center">
            <i class='material-icons red-text' style="margin-right:20px;"  @click="openLink(library)"
           >link</i>
           <i class='material-icons red-text' style="margin-right:20px;"  @click="playElement(library)"
           >play_arrow</i>
        </div>
      </div>
    </div>
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
    openLink(library){
       window.open(library.link,"_blank")
    },
    playElement(element) {
      this.shared.playingElement = element;
    },
    canShow(){
     return this.library.name.toLowerCase().includes(this.shared.filter);
    }
  }
};
</script>

<style>
.card-action i {
  cursor: pointer;
}
</style>