<template>
  <div>
    <header>
      <nav class="nav-extended">
        <div class="nav-wrapper red">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-medium-and-up">
            <i class="material-icons">menu</i>
          </a>
          <a class="brand-logo center">
            <form class="center">
              <div class="input-field">
                <input
                  id="search"
                  type="search"
                  name="search"
                  placeholder="Buscar"
                  style="background-color: white;color: black;"
                />
                <label class="label-icon" for="search">
                  <i class="material-icons black-text" style="margin-top: 0px">search</i>
                </label>
              </div>
            </form>
          </a>
        </div>
      </nav>
    </header>
    <ul id="mobile-demo" class="sidenav red">
      <li>
        <a @click="closeSideNav" class="white-text">
          <i class="material-icons white-text">arrow_back</i>
          Cerrar menu
        </a>
      </li>
      <li>
        <h6 class="center">
          <img class="nbar-logo" src="/imgs/multitube-logo.png" alt />
        </h6>
      </li>
      <li @click="closeSideNav()">
        <router-link to="/library/mp3"  class="waves-effect white-text" >
          <i class="material-icons white-text">library_music</i>
          Musica
        </router-link>
      </li>
      <li @click="closeSideNav()">
        <router-link to="/library/mp4" class="waves-effect white-text">
          <i class="material-icons white-text">video_library</i>
          Videos
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "nav-bar",
  data() {
    return {
      mInst: {}
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      var elems = document.querySelectorAll(".sidenav");
      var elm = M.Sidenav.init(elems, {});
      console.log(elm[0]);
      this.mInst = elm[0];
    });
  },
  methods: {
    closeSideNav() {
      this.mInst.close();
    }
  }
};
</script>

<style>
header {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 20px;
  bottom: 0px;
  top: 0px;
  -webkit-backface-visibility: hidden;
}
.searchbar {
  background-color: white;
  color: black;
  border-radius: 15px;
  height: 30px;
}
.nav-wrapper form {
  margin: auto;
  width: calc(85vw - 60px);
}

.nav-wrapper .input-field {
  padding-top: 13px;
}

.nav-wrapper form #search {
  height: 35px;
  border-radius: 15px;
}
@media (min-width: 900px) {
  .nav-wrapper form {
    width: 40vw;
  }
}
</style>