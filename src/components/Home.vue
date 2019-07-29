<template>
  <div id="home">
    <!-- <div class="pimg1">
      <div class="ptext">
        <span class="border">Parallax Image</span>
      </div>
    </div>-->
    <div id="dimmed">
      <v-parallax id="background" height="1500" src="../assets/background.jpg">
        <!-- <h1 id="heading">Welcome. Have a look around.</h1> -->
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* #home {
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
  min-height: 1200px;
} */
/* #heading {
  color: red;
  align-self: auto;
}
#dimmed {
  opacity: 0.3;
  z-index: 200;
} 
v-parallax {
  z-index: -1;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>

