<template>
  <div class="col s12">
    <div class="grey-text center">
      <i class="material-icons" style="font-size:34px">{{icon}}</i>
      <h5>{{ count }} Elementos</h5>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "library-header",
  props: {
    count: Number,
    icon: String
  }
};
</script>

<style>
</style>