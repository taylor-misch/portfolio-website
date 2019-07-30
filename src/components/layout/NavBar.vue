<template>
  <v-app-bar app dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Taylor Misch</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$vuetify.goTo('#home', options)">Home</v-btn>
    <v-btn text @click="$vuetify.goTo('#about', options)">About</v-btn>
    <v-btn text @click="$vuetify.goTo('#experience', options)">Experience</v-btn>
    <v-btn text @click="$vuetify.goTo('#projects', options)">Projects</v-btn>
    <v-btn text @click="$vuetify.goTo('#interests', options)">Interests</v-btn>
    <v-btn text @click="$vuetify.goTo('#contact', options)">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    options() {
      return {
        duration: 1500,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  }
};
</script>

<style scoped>
</style>
