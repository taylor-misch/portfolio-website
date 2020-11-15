<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <ProjectCard :project="project"> </ProjectCard>
      </div>
    </template>
    <v-card color="grey lighten-3" class="remove-scroll rounded-lg">
      <v-system-bar color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-icon
          large
          @click="dialog = false"
          class="pt-3 mdi mdi-close"
        ></v-icon>
      </v-system-bar>
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
        <v-row class="text-center">
          <v-col cols="4"><h2>Links:</h2></v-col>
          <v-col cols="4"><h2>Name:</h2></v-col>
          <v-col cols="4"><h2>Skills:</h2></v-col>
        </v-row>
        <v-row align="start" justify="center">
          <v-col cols="4" class="d-flex flex-row">
            <div v-for="link in project.links" :key="link.name">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a :href="link.url">
                    <v-icon large v-on="on" :class="link.icon"></v-icon>
                  </a>
                </template>
                <span>{{ link.name }}</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="4" class="text-center">
            <h3>{{ project.name }}</h3>
          </v-col>
          <v-col cols="4">
            <div class="d-flex flex-row">
              <div v-for="skill in project.skills" :key="skill.name">
                <v-chip medium color="grey darken-2" class="white--text mx-1"
                  ><v-avatar tile
                    ><v-icon
                      medium
                      v-on="on"
                      :color="skill.color"
                      :class="skill.icon"
                    >
                    </v-icon></v-avatar
                  >{{ skill.name }}
                </v-chip>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <b>Summary:</b>
          <br />
          {{ project.summary }}
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
