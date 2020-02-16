<template>
  <div>
    <preloader v-if="!isLoaded"></preloader>
    <div class="scrollcampo row" id="scroll" v-if="isLoaded">
      <div class="container">
        <div v-if="shared.selectedType == 'mp3'">
          <library-header :icon="'library_music'" :count="shared.music.length"></library-header>
          <div v-for="mus in shared.music">
            <media-card :library="mus"></media-card>
          </div>
        </div>
        <div v-if="shared.selectedType == 'mp4'">
          <library-header :icon="'video_library'" :count="shared.videos.length"></library-header>
          <div v-for="vid in shared.videos">
            <media-card :library="vid"></media-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "library",
  components: {
    "media-card": httpVueLoader("--rootpath--/components/MediaCard.vue"),
    "library-header": httpVueLoader(
      "--rootpath--/components/LibraryTypeHeader.vue"
    )
  },
  data: () => {
    return {
      shared: store.state,
      isLoaded: false
    };
  },
  mounted() {
    this.fetchMedia("mp3");
    this.fetchMedia("mp4");
  },
  methods: {
    fetchMedia(type) {
      let file = "";
      if (type == "mp3") {
        file = "--rootpath--/downloaded.gr3d";
      } else {
        file = "--rootpath--/downloaded.gr3d2";
      }

      axios
        .get(file)
        .then(res => {
          if (type == "mp3") {
            this.shared.music = this.decodeData(res.data);
          } else {
            this.shared.videos = this.decodeData(res.data);
          }
        })
        .catch(error => {})
        .then(() => {
          this.isLoaded = true;
        });
    },
    decodeData(data) {
      var parsedData = [];

      var allElements = data.split("¤").sort();

      for (var element of allElements) {
        if (element.trim() != "") {
          var individualElements = element.split("²");
          if (individualElements[0] != null && data.trim() != "") {
            var name = individualElements[0];
            var link = individualElements[1];
            var file = individualElements[2];
            var imageUrl = "--rootpath--/portraits/" + link.split("=")[1];
            parsedData.push({
              image: imageUrl,
              link: link,
              name: name,
              file: file
            });
          }
        }
      }

      return parsedData;
    }
  }
};
</script>

<style>
.scrollcampo {
  z-element: 2500;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  height: calc(100% - 215px);
  width: 100vw;
  margin-top: 75px;
  overflow: auto;
}
.body {
  background-color: #f5f5f5;
}
</style>