<template>
  <Module id="home" title>
    <div id="home">
      <div class="pimg1">
        <div class="ptext"></div>
      </div>
    </div>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  name: "Home",
  components: {
    Module
  }
};
</script>

<style scoped>
#home {
  background-color: black;
}
.pimg1 {
  position: relative;
  opacity: 0.3;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.pimg1 {
  background-image: url("../assets/background.jpg");
  min-height: 1000px;
}
</style>

