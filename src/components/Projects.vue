<template>
  <Module id="projects" title="Projects">
    <v-row>
      <v-col
        cols="6"
        md="4"
        lg="3"
        xl="2"
        v-for="project in projects"
        :key="project.name"
      >
        <v-card color="grey lighten-4" class="text-xs-center ma-3">
          <v-responsive>
            <v-tooltip top color="black">
              <template v-slot:activator="{ on }">
                <a :href="project.url">
                  <v-img
                    :src="require('@/assets/projects/' + project.logo)"
                    aspect-ratio="1"
                    :alt="project.alt"
                    v-on="on"
                  ></v-img>
                </a>
              </template>
              <span>{{ project.alt }}</span>
            </v-tooltip>
          </v-responsive>

          <v-card-text
            class="text-center grey--text text--darken-3 font-weight-medium body-1"
          >
            <a :href="project.url">
              <h4 v-if="$vuetify.breakpoint.mdAndUp">{{ project.name }}</h4>
              <h3 v-else>{{ project.name }}</h3>
            </a>
          </v-card-text>
          <v-card-actions>
            <v-layout class="mb-1 justify-center">
              <v-tooltip bottom color="black">
                <template v-slot:activator="{ on }">
                  <a :href="project.iconLink">
                    <v-icon
                      x-large
                      color="black"
                      v-on="on"
                      :class="project.icon"
                    ></v-icon>
                  </a>
                </template>
                <span>{{ project.label }}</span>
              </v-tooltip>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module,
  },
  data() {
    return {
      projects: [
        {
          name: "Bytepocket",
          logo: "bytepocket.jpg",
          url: "https://taylor-misch.github.io/bytepocket/",
          iconLink: "https://github.com/taylor-misch/bytepocket",
          icon: "fab fa-github",
          alt: "Bytepocket - cryptocurrency wallet tracker",
          label: "Bytepocket's GitHub",
        },
        {
          name: "SoundScript",
          logo: "soundscript.png",
          url: "https://soundscript.netlify.com/",
          iconLink: "https://github.com/taylor-misch/soundscript",
          icon: "fab fa-github",
          alt: "SoundScript - a coding language for music",
          label: "SoundScript's GitHub",
        },
        {
          name: "Portfolio Website",
          logo: "portfolio.png",
          url: "https://taylormisch.com",
          iconLink: "https://github.com/taylor-misch/portfolio-website",
          icon: "fab fa-github",
          alt: "Where I show off and talk about myself",
          label: "Portfolio Website's GitHub",
        },
        {
          name: "Bass Build Project",
          logo: "bass.png",
          url: "https://imgur.com/a/3g41wKj",
          iconLink: "https://imgur.com/a/3g41wKj",
          icon: "fas fa-info-circle",
          alt: "Misch No. 1",
          label: "Bass Build Imgur Album",
        },
      ],
    };
  },
};
</script>

<style scoped>
a,
a:visited,
a:link,
a:hover,
a:active {
  text-decoration: inherit;
  color: inherit;
}
</style>
