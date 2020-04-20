import axios from 'axios';
import {decodeData} from '../../utils/library.js';
const state = {
    music: [],
    videos: [],
    filter: "",
    selectedType: "mp3",
    isLoading: false
}


const mutations = {
   setMusic(state,data){
           state.music = data;
   },
   setVideos(state,data){
          state.videos = data
   },
   setType(state,data){
          state.selectedType = data
   }

}
const getters = {
    selectedType() {
        return state.selectedType;
    },
    music(){
        return state.music;
    },
    videos(){
        return state.videos;
    }
}

const actions = {
    selectType({commit},type) {
        commit("setType",type)
    },

    // eslint-disable-next-line no-unused-vars
     fetchMedia({dispatch,commit},type) {
        this.isLoaded = true;
        let file = "";
        if (type == "mp3") {
            file = "/downloaded.gr3d";
        } else {
            file = "/downloaded.gr3d2";
        }
        axios
            .get(file)
            .then(async res => {
                if (type == "mp3") {
                     
                    commit("setMusic",decodeData(res.data));
                } else {
                    commit("setVideos",decodeData(res.data));
                }
            })
            .catch(error => { error })
            .then(() => {
                this.isLoaded = true;
            });

    },
    // eslint-disable-next-line no-unused-vars
  
    playNext() {
        let currentIndex = -1;
        let elements = [];
        if (this.state.selectedType == "mp3") {
            elements = this.state.music;
        } else {
            elements = this.state.videos;
        }
        currentIndex = elements.findIndex(ax => ax.link == this.state.playingElement.link);
        if (currentIndex >= 0) {
            this.state.playingElement = elements[currentIndex + 1];
        }
    },
    playPrevious() {
        let currentIndex = -1;
        let elements = [];
        if (this.state.selectedType == "mp3") {
            elements = this.state.music;
        } else {
            elements = this.state.videos;
        }
        currentIndex = elements.findIndex(ax => ax.link == this.state.playingElement.link);
        if (currentIndex > 0) {
            this.state.playingElement = elements[currentIndex - 1];
        }
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}