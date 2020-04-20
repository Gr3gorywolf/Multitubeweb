
import Vuex from 'vuex';
import Vue from 'vue';
import  currentElement from './modules/CurrentElement'
import library from './modules/Library';
Vue.use(Vuex);
export default  new Vuex.Store({
    modules:{
      current:currentElement,
      library:library
    },
    strict: false,
   namespaced: true
  })