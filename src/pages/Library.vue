<template>
  <div>
  <!--   <preloader v-if="!isLoaded"></preloader> -->
    <div class="scrollcampo  row" id="scroll" v-if="isLoaded">
      <div class="container">
        <div v-if="selectedType == 'mp3'">
          <library-header :icon="'library_music'" :count="music.length"></library-header>
           <library-table :elements="music"></library-table>
        </div>
        
        <div v-if="selectedType == 'mp4'">
          <library-header :icon="'video_library'" :count="videos.length"></library-header>
          <library-table :elements="videos"></library-table>
        </div>

      </div> 
    </div>
  </div>
</template>

<script>

import LibraryTable from "../components/LibraryTable";
import LibraryHeader from "../components/LibraryTypeHeader";
import {mapGetters,mapActions} from "vuex";
export default  {
  name: "library",
  components: {
    LibraryTable,
    LibraryHeader
  },
  data: () => {
    return {
      isLoaded: true
    };
  },
  computed:{
    ...mapGetters("library",["music","videos","selectedType"])
  },
  mounted() {
    this.fetchMedia("mp3");
    this.fetchMedia("mp4");
  },
  methods: { 
  ...mapActions("library",["fetchMedia"])
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