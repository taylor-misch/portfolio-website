<template>
  <div id="projects">
    <h1>Projects</h1>

    <!-- <div class="project">
      <h3>Bytepocket</h3>
      <v-card>
        <a href="img/projects/bytepocket.jpg">
          <img class="project-logo" src="img/projects/bytepocket.jpg" alt="project" />
        </a>
        <a href="https://tmisch.github.io/bytepocket/" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/TMisch/bytepocket" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </v-card>
    </div>-->

    <!-- <div class="project">
      <h3>SoundScript</h3>
      <v-card>
        <a href="../assets/projects/soundscript.png">
          <img src="../assets/projects/soundscript.png" alt="soundscript" />
        </a>
        <a href="https://tmisch.github.io/soundscript/" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/TMisch/soundscript" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </v-card>
    </div>-->

    <v-container>
      <v-layout xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name">
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4"></v-responsive>
          <v-card-text>
            <div class="subheading">{{project.name}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>github-box</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      project: [
        {
          name: "Bytepocket",
          logo: "../assets/projects/bytepocket.jpg",
          url: "https://tmisch.github.io/bytepocket/",
          github: "https://github.com/TMisch/bytepocket"
        },
        {
          name: "SoundScript",
          logo: "../assets/projects/soundscript.png",
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
