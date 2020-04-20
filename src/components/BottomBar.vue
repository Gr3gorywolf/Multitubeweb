<template>
<div style="width:100vw">
<footer class="page-footer red" style="position: fixed;bottom:0px;width:100%;">
  <div class="col s12" style="padding-left:0px!important;padding-right:0px!important;">
    <ul class="tabs tabs-fixed-width transparent white-text" id="tabs" >
      <li class="tab col s3" v-for="sec in sections" :key="sec.id">
        <a  style="cursor: pointer;" class="white-text" @click="setType(sec)">
          <i class="material-icons" >{{ sec.icon }}</i><br>
        </a>
      </li>
    </ul>
  </div>
</footer>
</div>

</template>

<script>
import M from 'materialize-css'
import {mapGetters,mapActions} from 'vuex'
export default  {
name:"bottom-bar",
data:()=>{
  return{ 
    sections:[
       {
         id:0,
         icon:"library_music",
         title:"Musica"
       },
        {
         id:1,
         icon:"video_library",
         title:"Videos"
       }

    ]
  }
},
computed:{
 ...mapGetters("library",["selectedType"])
},
mounted() {
    // eslint-disable-next-line no-unused-vars
    var instance = M.Tabs.init(document.getElementById("tabs"), {});
},
methods: {
  ...mapActions("library",["selectType"]),
  setType(section){
    if(section.id == 0){
      this.selectType('mp3');
    }
    if(section.id == 1){
      this.selectType('mp4');
    }
   
  }
},
}
</script>

<style>
.viewport {
    width: 100%;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
</style>