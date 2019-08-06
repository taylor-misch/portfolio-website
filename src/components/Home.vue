<template>
  <div id="home">
    <div class="pimg1">
      <v-container fill-height>
        <v-layout column fill-height align-center justify-center>
          <v-flex pb-6 xs1 class="display-4 text-center font-weight-medium white--text">Taylor Misch</v-flex>
          <v-divider></v-divider>
          <v-flex xs1 class="display-1 text-center font-weight-medium">
            <span class="blue--text text--lighten-3">Full Stack Developer</span>
            <br />
            <span class="amber--text text--lighten-3">Hobbiest Musician</span>
            <br />
            <span class="red--text text--lighten-3">Lifelong Learner</span>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style scoped>
.pimg1 {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../assets/background2.jpg");
  height: 100vh;
}
</style>

