const state = {

    playingElement: {
        image: "",
        link: "",
        name: "",
        file:""
    }

}


const mutations = {

  setElement(state,data){
      state.playingElement = data;
  }
  


}
const getters = {
   
    playingLink() {
        return state.playingElement != undefined
            ? state.playingElement.link
            : "";
    },
    playingImage() {
        return state.playingElement != undefined
            ? state.playingElement.image
            : "";
    },
    playingTitle() {
        return state.playingElement != undefined
            ? state.playingElement.name
            : "";
    },
    playingFile() {
        return state.playingElement != undefined
            ? state.playingElement.file
            : "";
    }
  

}

const actions = {
    playElement({commit,dispatch}, element) {
        commit("setElement",{
            image: "",
            link: "",
            name: "",
            file:""
        });
        commit("setElement",element);
        dispatch("updateMediaSession");
    },
    updateMediaSession({dispatch}) {
        if ('mediaSession' in navigator) {

            // eslint-disable-next-line no-undef
            navigator.mediaSession.metadata = new MediaMetadata({
                title: state.playingElement.name,
                artist: state.playingElement.link,

                artwork: [{
                    src: state.playingElement.image,
                    sizes: '96x96',
                    type: 'image/png'
                },
                {
                    src: state.playingElement.image,
                    sizes: '128x128',
                    type: 'image/png'
                },
                {
                    src: state.playingElement.image,
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: state.playingElement.image,
                    sizes: '256x256',
                    type: 'image/png'
                },
                {
                    src: state.playingElement.image,
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: state.playingElement.image,
                    sizes: '512x512',
                    type: 'image/png'
                },
                ]
            });
        }
        navigator.mediaSession.setActionHandler('previoustrack', function () {
            dispatch("library/playPrevious",null,{root:true});
            //  this.playPrevious();
        });

        navigator.mediaSession.setActionHandler('nexttrack', function () {
            dispatch("library/playNext",null,{root:true});
            // this.playNext();
        });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}