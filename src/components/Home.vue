<template>
  <div id="home">
    <div class="pimg1">
      <v-container fill-height>
        <v-layout column fill-height align-center justify-center>
          <v-flex xs1 class="display-1 text-center font-weight-medium">
            <div class="display-4 text-center font-weight-medium mb4 white--text">Taylor Misch</div>
            <a href="https://linkedin.com/in/taylor-misch">
              <v-icon x-large color="blue lighten-2" class="mx-3 fab fa-linkedin"></v-icon>
            </a>
            <a href="https://github.com/taylor-misch">
              <v-icon x-large color="amber lighten-2" class="mx-3 fab fa-github"></v-icon>
            </a>
            <a href="mailto:taylormisch@gmail.com">
              <v-icon x-large color="red lighten-2" class="ma-3 fas fa-envelope"></v-icon>
            </a>
            <br />
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
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.pimg1 {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../assets/background1.jpg");
  height: 100vh;
}
a {
  text-decoration: none;
}
</style>

