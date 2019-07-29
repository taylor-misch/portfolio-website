<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Taylor Misch</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$vuetify.goTo('#home', easeInOutQuart)">Home</v-btn>
    <v-btn text @click="$vuetify.goTo('#about', easeInOutQuart)">About</v-btn>
    <v-btn text @click="$vuetify.goTo('#experience', easeInOutQuart)">Experience</v-btn>
    <v-btn text @click="$vuetify.goTo('#projects', easeInOutQuart)">Projects</v-btn>
    <v-btn text @click="$vuetify.goTo('#interests', easeInOutQuart)">Interests</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
