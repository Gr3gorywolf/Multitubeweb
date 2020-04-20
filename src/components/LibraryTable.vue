<template>
  <div class="col s12">
    <ul class="collection">
      <li class="collection-item avatar" v-for="elem in elements" :key="elem.link">
        <img :src="elem.image" alt class="circle" />
        <span class="title"></span>
        <p>
          {{ elem.name }}
          <br />
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
    </ul>

    <!--
    <table class="bordered highlight">
      <tbody>
        <tr >
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
  cursor: pointer;
}
.tbl-image {
  height: 25px;
  width: 25px;
}
</style>