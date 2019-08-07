<template>
  <Module id="contact" class="amber lighten-4">
    <v-layout justify-center>
      <v-flex xs1 v-for="icon in icons" :key="icon.url">
        <a :href="icon.url">
          <v-icon large color="black" :class="icon.class">{{icon.text}}</v-icon>
        </a>
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
      icons: [
        {
          url: "https://linkedin.com/in/taylor-misch",
          class: "fab fa-linkedin fa-2x",
          text: "linkedin-box"
        },
        {
          url: "https://github.com/taylor-misch",
          class: "fab fa-github",
          text: "github-box"
        },
        {
          url: "mailto:taylormisch@gmail.com",
          class: "",
          text: "email"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
