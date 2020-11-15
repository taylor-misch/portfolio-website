<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <ProjectCard :project="project"> </ProjectCard>
      </div>
    </template>
    <v-card color="grey lighten-2" class="remove-scroll rounded-lg">
      <v-system-bar color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-icon
          large
          @click="dialog = false"
          class="pt-3 mdi mdi-close"
        ></v-icon>
      </v-system-bar>
      <v-row class="text-center">
        <v-col class="text-h4 font-weight-bold red--text text--darken-4">{{
          project.name
        }}</v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="12" md="6">
          <v-row class="flex flex-column justify-center">
            <v-col class="text-h5 font-weight-bold red--text text--darken-4"
              >Skills:</v-col
            >
            <v-col class="d-flex flex-row flex-wrap">
              <div v-for="skill in project.skills" :key="skill.name">
                <v-chip medium color="grey darken-2" class="white--text ma-1">
                  <v-avatar tile class="mr-1">
                    <v-icon
                      medium
                      v-on="on"
                      :color="skill.color"
                      :class="skill.icon"
                    ></v-icon>
                  </v-avatar>
                  {{ skill.name }}
                </v-chip>
              </div>
            </v-col>
            <v-col class="text-h5 font-weight-bold red--text text--darken-4"
              >Links:</v-col
            >
            <v-col class="d-flex flex-row flex-wrap">
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
                  <v-icon large v-on="on" class="mr-2" :class="link.icon">
                  </v-icon>
                  {{ link.name }}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row class="justify-center">
            <v-col cols="10">
              <v-img
                :src="require('@/assets/projects/' + project.logo)"
                class="rounded-xl"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mx-2">
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
  </v-dialog>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    ProjectCard,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
.remove-scroll {
  overflow-x: hidden;
}
</style>
