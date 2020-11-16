<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <ProjectCard :project="project"> </ProjectCard>
      </div>
    </template>
    <div v-if="project.skills.length > 0">
      <TechProjectDialogCard :project="project"></TechProjectDialogCard>
    </div>
    <div v-else>
      <NonTechProjectDialogCard :project="project"></NonTechProjectDialogCard>
    </div>
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
