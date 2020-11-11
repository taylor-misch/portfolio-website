<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <ProjectCard :project="project"> </ProjectCard>
      </div>
    </template>
    <v-card color="grey lighten-3" class="remove-scroll rounded-lg">
      <v-row class="justify-center">
        <v-col cols="5" sm="4" md="3">
          <v-img
            :src="require('@/assets/projects/' + project.logo)"
            class="rounded-xl"
          ></v-img>
        </v-col>
        <!-- <v-col cols="3" sm="1" class="clickable">
          <v-icon
            large
            @click="dialog = false"
            class="mx-3 far fa-window-close"
          >
          </v-icon>
        </v-col> -->
      </v-row>
      <v-card-text>
        <ul>
          <li><b>Project Name:</b> {{ project.name }}</li>
          <li><b>Project URL:</b><a :href="project.url">Visit</a></li>
          <li><b>Built With:</b> {{ project.label }}</li>
          <li><b>Project Description:</b> {{ project.alt }}</li>
        </ul>
      </v-card-text>
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
