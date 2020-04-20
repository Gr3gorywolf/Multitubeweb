<template>
  <div
    class="preloader-wrapper big active"
    id="progress">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default  {
 name:"preloader"

};
</script>

<style>
#progress{
position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
z-index:9999999 ;
}
</style>