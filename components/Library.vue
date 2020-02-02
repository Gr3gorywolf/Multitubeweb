<template>
  <div>
   
    <div class="scrollcampo row" id="scroll">
      <div v-for="mus in shared.music" v-if="shared.selectedType == 'mp3'">
        <media-card :library="mus"></media-card>
         <h5>i love uuuuuuuu!!</h5>
      </div>
      <div v-for="vid in shared.videos" v-if="shared.selectedType == 'mp4'">
        <media-card :library="vid"></media-card>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "library",
  components: {
    "media-card": httpVueLoader("--rootpath--/components/MediaCard.vue")
  },
  data: () => {
    return {
      shared:store.state,
      
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
            this.shared.music =this.decodeData(res.data) ;
          } else {
            this.shared.videos = this.decodeData(res.data);
          }
        })
        .catch(error => {})
        .then(() => {});
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
  height: calc(100% - 177px);
  width: 100%;
  margin-top: 115px;
  overflow: auto;
}
</style>