<template>
  <v-container>
    <div id="projects">
      <h1>Projects</h1>

      <v-container>
        <v-layout xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name">
          <v-card color="light-blue lighten-4" class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="project.logo" aspect-ratio="1" max-width="200px"></v-img>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subheading">{{project.name}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey lighten-1">
                <v-icon class="fab fa-github">github-box</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import bytepocket from "../assets/projects/bytepocket.jpg";
import soundscript from "../assets/projects/soundscript.png";
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Bytepocket",
          logo: bytepocket,
          url: "https://tmisch.github.io/bytepocket/",
          github: "https://github.com/TMisch/bytepocket"
        },
        {
          name: "SoundScript",
          logo: soundscript,
          url: "https://tmisch.github.io/soundscript/",
          github: "https://github.com/TMisch/soundscript"
        }
      ]
    };
  }
};
</script>

<style scoped>
.project-logo {
  position: relative;
}
</style>
