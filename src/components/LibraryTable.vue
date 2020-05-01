<template>
  <div class="col s12">
    <!--
    <ul class="collection">
      <li class="collection-item avatar" v-for="elem in elements" :key="elem.link">
        <img :src="elem.image" alt class="circle" />
        <span class="title"></span>
        <p>
          {{ elem.name }}
        </p>
        <h6 class="right">
          <i class="material-icons red-text" 
          style="margin-right:20px;"
           @click="openLink(elem)">link</i>
          <i
            class="material-icons red-text"
            style="margin-right:20px;"
            @click="playElement(elem)"
          >play_arrow</i>
        </h6>
      </li>
    </ul>-->

    <div class="row">
      <div class="col  s12 m6 l3" v-for="elem in elements" :key="elem.link">
        <div class="card hoverable">
          <div class="card-image card-background">
            <img :src="elem.image" class="card-background-image" />
            <h6 class="center">
              <span class="card-title card-background-title" style>{{getElementTitle(elem)}}</span>
              <div v-if="getElementSubtitle(elem) != null">
                <h6 class="card-title card-background-subtitle" style>{{getElementSubtitle(elem)}}</h6>
              </div>
              <h6 class="card-title card-background-actions">
              <i
                class="material-icons"
                style="margin-right:10px;"
               
              >link</i>
              <i
                class="material-icons"
                @click="playElement(elem)"
              >play_arrow</i>
            </h6>
            </h6>
          </div> 
        </div>
      </div>
    </div>

    <!--
    <table class="bordered highlight">
      <tbody>
        <tr v-for="elem in elements" :key="elem.link">
          <td>
            <img :src="elem.image" class="tbl-image" />
          </td>
          <td class="truncated">{{elem.name}}</td>
          <td>
            <h6 class="right">
              <i
                class="material-icons red-text"
                style="margin-right:20px;"
                @click="openLink(elem)"
              >link</i>
              <i
                class="material-icons red-text"
                style="margin-right:20px;"
                @click="playElement(elem)"
              >play_arrow</i>
            </h6>
          </td>
        </tr>
      </tbody>
    </table>-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "library-table",
  props: {
    elements: Array
  },
  data: () => {
    return {
      libraryElements: []
    };
  },
  beforeMount() {
    console.log(this.elements);
  },
  mounted() {},
  methods: {
    ...mapActions("current", ["playElement"]),
    isMobileDevice() {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    },
    getElementTitle(element) {
      if (element.name.includes("-")) {
        return element.name.split("-")[1];
      } else {
        return element.name;
      }
    },
    getElementSubtitle(element) {
      if (element.name.includes("-")) {
        return element.name.split("-")[0];
      } else {
        return null;
      }
    },
    openLink(element) {
      window.open(element.link, "_blank");
    },

    // eslint-disable-next-line no-unused-vars
    canShow(element) {
      //return element.name.toLowerCase().includes(this.shared.filter);
      return true;
    }
  }
};
</script>

<style scoped>
.red-text {
  cursor: pointer;
}
.card-action i {
  font-size: 5555px !important;
  cursor: pointer;
}
.tbl-image {
  height: 25px;
  width: 25px;
}


.card-background-actions {
  margin-bottom: 33px;
  font-size: 16px !important;
  font-style: bold;
  left: 0px;
  right: 0px;
  top: 60px;
  bottom: 0px;
  display: none;
}

.card-background-actions i {
   cursor: pointer;
   font-size: 35px;
}

.card-background-image {
  height:200px;
  filter: brightness(35%);
}

.card-background:hover .card-background-image  {

  filter: brightness(50%);
}


.card-background:hover .card-background-title  {
  display: none;
}

.card-background:hover .card-background-subtitle  {
  display: none;
}


.card-background:hover .card-background-actions  {
  display: initial;
}


.card-background-title {
  margin-bottom: 33px;
  font-size: 18px !important;
  font-style: bold;
  left: 0px;
  right: 0px;
  top: 45px;
  bottom: 0px;
}
.card-background-subtitle {
  font-size: 12px !important;
  left: 0px;
  right: 0px;
  top: 121px;
}
</style>