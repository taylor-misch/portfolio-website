<template>
  <Module id="projects" title="Projects">
    <v-layout wrap>
      <v-flex xs6 md4 lg3 xl2 v-for="project in projects" :key="project.name">
        <v-card color="amber lighten-4" class="text-xs-center ma-3">
          <v-responsive>
            <v-tooltip top color="black">
              <template v-slot:activator="{ on }">
                <a :href="project.url">
                  <v-img
                    :src="require('@/assets/projects/'+project.logo)"
                    aspect-ratio="1"
                    :alt="project.alt"
                    v-on="on"
                  ></v-img>
                </a>
              </template>
              <span>{{project.alt}}</span>
            </v-tooltip>
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
              <v-tooltip bottom color="black">
                <template v-slot:activator="{ on }">
                  <a :href="project.github">
                    <v-icon x-large color="black" v-on="on" class="fab fa-github"></v-icon>
                  </a>
                </template>
                <span>{{project.label}}</span>
              </v-tooltip>
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
          logo: "bytepocket.jpg",
          url: "https://taylor-misch.github.io/bytepocket/",
          github: "https://github.com/taylor-misch/bytepocket",
          alt: "Bytepocket - cryptocurrency wallet tracker",
          label: "Bytepocket's Github"
        },
        {
          name: "SoundScript",
          logo: "soundscript.png",
          url: "https://taylor-misch.github.io/soundscript/",
          github: "https://github.com/taylor-misch/soundscript",
          alt: "SoundScript - a coding language for music",
          label: "SoundScript's Github"
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
