<template>
  <v-card color="grey lighten-2" class="remove-scroll rounded-lg">
    <v-system-bar color="rgba(0, 0, 0, 0)">
      <v-spacer></v-spacer>
      <v-icon large @click="dialog = false" class="pt-3 mdi mdi-close"></v-icon>
    </v-system-bar>
    <v-row no-gutters class="text-center">
      <v-col class="text-h4 font-weight-bold red--text text--darken-4">{{
        project.name
      }}</v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6" sm="4">
        <v-img
          :src="require('@/assets/projects/' + project.logo)"
          class="rounded-xl"
        ></v-img>
      </v-col>
    </v-row>
    <v-row no-gutters class="flex flex-column justify-center text-center">
      <v-col class="d-flex flex-row flex-wrap justify-center">
        <div v-for="link in project.links" :key="link.name">
          <v-chip
            large
            label
            link
            :href="link.url"
            medium
            color="blue darken-3"
            class="white--text ma-1"
          >
            <v-icon large v-on="on" class="mr-2" :class="link.icon"> </v-icon>
            {{ link.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row dense class="mx-2">
      <v-col>
        <v-row class="flex flex-column">
          <v-col class="text-h5 font-weight-bold red--text text--darken-4">
            Summary :
          </v-col>
          <v-col>
            {{ project.summary }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style></style>
