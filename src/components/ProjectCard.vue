<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      color="grey lighten-4"
      class="text-xs-center ma-3 rounded-lg"
    >
      <v-tooltip bottom color="black">
        <template v-slot:activator="{ on }">
          <v-img
            :src="require('@/assets/projects/' + project.logo)"
            aspect-ratio="1"
            :alt="project.alt"
            v-on="on"
            class="rounded-lg"
          ></v-img>
        </template>
        <span>{{ project.name }}</span>
      </v-tooltip>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
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
