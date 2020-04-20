<template>
  <header>
    <nav class="nav-extended">
      <div class="nav-wrapper red">
          <a class="brand-logo center">
      <form class="center">
        <div class="input-field">
          <input id="search"   type="search" name="search"
            placeholder="Buscar" style="background-color: white;color: black;">
          <label class="label-icon" for="search"><i class="material-icons black-text"
              style="margin-top: 0px">search</i></label>

        </div>
      </form>
    </a>
      </div> 
    </nav>
  </header>
</template>

<script>
export default  {
  name: "nav-bar",
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
.searchbar{
  background-color: white;
  color: black;
  border-radius:15px;
  height:30px;
}
.nav-wrapper form{
  margin: auto;
  width: 85vw;
}

.nav-wrapper .input-field{
  padding-top: 13px;
}

.nav-wrapper form #search{
  height: 35px;
  border-radius:15px;
}
@media(min-width:900px){
  .nav-wrapper form{
  width: 40vw;
}
}

</style>