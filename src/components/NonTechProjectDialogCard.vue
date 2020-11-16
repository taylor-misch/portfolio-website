<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="6" sm="5" md="4">
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
            <v-icon large class="mr-2" :class="link.icon"> </v-icon>
            {{ link.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-3 text-justify">
      <v-col>
        {{ project.summary }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style></style>
