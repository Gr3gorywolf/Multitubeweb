<template>
  <header>
    <nav class="nav-extended">
      <div class="nav-wrapper red">
        <div class="input-field">
          <input
            id="search"
            type="search"
            autocomplete="off"
            oninput="filtrar()"
            style="height: 54px;"
          />
          <label class="label-icon" for="search">
            <i
              class="material-icons"
              id="lupita"
              onclick="quitarvideo();"
              style="cursor:default;"
              href="#"
            >search</i>
          </label>
        </div>
      </div>
     <div class="nav-content">
      <ul class="tabs red">
        <li class="tab" @click="shared.selectedType='mp3'">
          <a style="color:white;">Musica</a>
        </li>
        <li class="tab" @click="shared.selectedType='mp4'">
          <a class="active" style="color:white;">Videos</a>
        </li>
      </ul>
    </div>
    </nav>
  </header>
</template>

<script>
module.exports = {
  name: "nav-bar",
  data:()=>{
    return{
     shared:store.state
    }
  }
};
</script>

<style>
header{
z-index:5000;
 position: fixed;
 width:100%;
 height: 20px;
 bottom:0px;
 top:0px;
 -webkit-backface-visibility: hidden; 
}

</style>