<template>
  <v-card color="grey lighten-4" class="text-xs-center ma-3">
    <v-tooltip top color="black">
      <template v-slot:activator="{ on }">
        <v-img
          :src="require('@/assets/projects/' + project.logo)"
          aspect-ratio="1"
          :alt="project.alt"
          v-on="on"
        ></v-img>
      </template>
      <span>{{ project.alt }}</span>
    </v-tooltip>
    <v-card-text
      class="text-center grey--text text--darken-3 font-weight-medium body-1"
    >
      <a :href="project.url">
        <h3 v-if="$vuetify.breakpoint.mdAndUp">{{ project.name }}</h3>
        <h4 v-else>{{ project.name }}</h4>
      </a>
    </v-card-text>
    <v-card-actions>
      <v-row class="mb-1 justify-center">
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
      </v-row>
    </v-card-actions>
  </v-card>
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
