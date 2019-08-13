<template>
  <Module id="projects" title="Projects">
    <v-layout wrap>
      <v-flex xs6 md4 lg3 xl2 v-for="project in projects" :key="project.name">
        <v-card color="amber lighten-4" class="text-xs-center ma-3">
          <v-responsive>
            <a :href="project.url">
              <v-img :src="require('@/assets/projects/'+project.logo)" aspect-ratio="1"></v-img>
            </a>
          </v-responsive>

          <v-card-text class="text-center black--text font-weight-medium title hidden-md-and-up">
            <a :href="project.url">{{project.name}}</a>
          </v-card-text>
          <v-card-text
            class="text-center black--text font-weight-medium headline hidden-sm-and-down"
          >
            <a :href="project.url">{{project.name}}</a>
          </v-card-text>
          <v-card-actions>
            <v-layout mb-1 justify-center>
              <a :href="project.github">
                <v-icon large color="black" class="fab fa-github">github-box</v-icon>
              </a>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module
  },
  data() {
    return {
      projects: [
        {
          name: "Bytepocket",
          logo: "bytepocket1.jpg",
          url: "https://taylor-misch.github.io/bytepocket/",
          github: "https://github.com/taylor-misch/bytepocket"
        },
        {
          name: "SoundScript",
          logo: "soundscript1.png",
          url: "https://taylor-misch.github.io/soundscript/",
          github: "https://github.com/taylor-misch/soundscript"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: inherit;
}
a:visited {
  color: inherit;
}
</style>
