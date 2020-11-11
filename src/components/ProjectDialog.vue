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
        <v-row>
          <v-col cols="4" align-self="start">
            <b>Links:</b>
            <div v-for="link in project.links" :key="link.name">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <a :href="link.url">
                    <v-icon
                      x-large
                      v-on="on"
                      class="mx-3"
                      :class="link.icon"
                    ></v-icon>
                  </a>
                </template>
                <span>{{ link.name }}</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="4" align-self="center">
            <b>Name:</b> {{ project.name }}
          </v-col>
          <v-col cols="4" align-self="end">
            <b>Skills:</b>
            <div v-for="skill in project.skills" :key="skill.name">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon
                    x-large
                    v-on="on"
                    class="mx-3"
                    :class="skill.icon"
                  ></v-icon>
                </template>
                <span>{{ skill.name }}</span>
              </v-tooltip>
            </div>
          </v-col>
        </v-row>
        <!-- <ul>
          <li><b>Project Name:</b> {{ project.name }}</li>
          <li><b>Project URL:</b><a :href="project.url">Visit</a></li>
          <li><b>Built With:</b> {{ project.label }}</li>
          <li><b>Project Description:</b> {{ project.alt }}</li>
        </ul> -->
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
