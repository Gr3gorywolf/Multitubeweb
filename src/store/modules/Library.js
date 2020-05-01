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
    playingLink (state, getters, rootState, rootGetters) {
       return rootGetters['current/playingLink'];
      },
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
  
    playNext({dispatch,getters}) {
        let currentIndex = -1;
        let elements = [];
        if (state.selectedType == "mp3") {
            elements = state.music;
        } else {
            elements = state.videos;
        }
        currentIndex = elements.findIndex(ax => ax.link == getters.playingLink);
        if (elements[currentIndex+1] != undefined) {
            dispatch("current/playElement",elements[currentIndex + 1],{root:true});
        }
    },
    playPrevious({dispatch,getters}) {
        let currentIndex = -1;
        let elements = [];
        if (state.selectedType == "mp3") {
            elements = state.music;
        } else {
            elements = state.videos;
        }
        currentIndex = elements.findIndex(ax => ax.link == getters.playingLink);
        if (elements[currentIndex-1] != undefined ) {
            dispatch("current/playElement",elements[currentIndex - 1],{root:true});
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