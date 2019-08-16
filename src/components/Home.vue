<template>
  <div id="home">
    <div class="pimg1">
      <v-container fill-height>
        <v-layout column fill-height align-center justify-center>
          <v-flex xs1 class="display-4 text-center font-weight-medium">
            <div class="new-font text-center font-weight-medium mb4 white--text">Taylor Misch</div>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <a href="https://linkedin.com/in/taylor-misch">
                  <v-icon x-large color="blue lighten-2" v-on="on" class="mx-3 fab fa-linkedin"></v-icon>
                </a>
              </template>
              <span>LinkedIn</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <a href="https://github.com/taylor-misch">
                  <v-icon x-large color="amber lighten-4" v-on="on" class="mx-3 fab fa-github"></v-icon>
                </a>
              </template>
              <span>GitHub</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <a href="mailto:taylormisch@gmail.com">
                  <v-icon x-large color="red lighten-3" v-on="on" class="ma-3 fas fa-envelope"></v-icon>
                </a>
              </template>
              <span>Email</span>
            </v-tooltip>
            <div class="display-1">
              <span class="new-font blue--text text--lighten-3">Full Stack Developer</span>
              <br />
              <span class="new-font amber--text text--lighten-4">Hobbiest Musician</span>
              <br />
              <span class="new-font red--text text--lighten-3">Lifelong Learner</span>
            </div>
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
  background-image: url("../assets/background.jpg");
  height: 100vh;
}
a {
  text-decoration: none;
}
.new-font {
  font-family: "Lexend Deca", sans-serif;
}
</style>

