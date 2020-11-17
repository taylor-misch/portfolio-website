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
      <v-row no-gutters class="text-center">
        <v-col class="text-h4 font-weight-bold red--text text--darken-4">{{
          project.name
        }}</v-col>
      </v-row>
      <div v-if="project.skills.length > 0">
        <TechProjectDialogCard :project="project"></TechProjectDialogCard>
      </div>
      <div v-else>
        <NonTechProjectDialogCard :project="project"></NonTechProjectDialogCard>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import TechProjectDialogCard from "@/components/TechProjectDialogCard";
import NonTechProjectDialogCard from "@/components/NonTechProjectDialogCard";
export default {
  components: {
    ProjectCard,
    TechProjectDialogCard,
    NonTechProjectDialogCard,
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
