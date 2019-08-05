<template>
  <v-app-bar app dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Taylor Misch</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text @click="$vuetify.goTo('#home', options)">Home</v-btn>
      <v-btn text @click="$vuetify.goTo('#about', options)">About</v-btn>
      <v-btn text @click="$vuetify.goTo('#experience', options)">Experience</v-btn>
      <v-btn text @click="$vuetify.goTo('#projects', options)">Projects</v-btn>
      <v-btn text @click="$vuetify.goTo('#interests', options)">Interests</v-btn>
      <v-btn text @click="$vuetify.goTo('#contact', options)">Contact</v-btn>
    </v-toolbar-items>
    <v-menu
      dark
      v-model="value"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    >
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title @click="$vuetify.goTo(item.id, options)">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    items: [
      { title: "Home", id: "#home" },
      { title: "About", id: "#about" },
      { title: "Experience", id: "#experience" },
      { title: "Projects", id: "#projects" },
      { title: "Interests", id: "#interests" },
      { title: "Contacts", id: "#contacts" }
    ],
    absolute: false,
    openOnHover: false,
    value: false,
    closeOnClick: true,
    closeOnContentClick: true,
    offsetX: false,
    offsetY: true
  }),
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
