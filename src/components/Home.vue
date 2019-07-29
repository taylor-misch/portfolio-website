<template>
  <div id="home">
    <div id="dimmed">
      <v-parallax id="background" height="1500" src="../assets/background.jpg">
        <h1 id="heading">Welcome. Have a look around.</h1>
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
#heading {
  color: red;
  align-self: auto;
}
#dimmed {
  background-color: red;
  opacity: 90%;
  z-index: 200;
}
v-parallax {
  z-index: -1;
}
</style>

