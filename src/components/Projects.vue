<template>
  <Module id="projects" title="Projects">
    <v-row>
      <v-col
        cols="6"
        md="4"
        lg="3"
        xl="2"
        v-for="project in projects"
        :key="project.name"
      >
        <ProjectDialog :project="project"> </ProjectDialog>
        <!-- <ProjectCard :project="project"></ProjectCard> -->
      </v-col>
    </v-row>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
import ProjectDialog from "@/components/ProjectDialog";
// import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    Module,
    ProjectDialog,
    // ProjectCard,
  },
  data() {
    return {
      dialog: false,
      projects: [
        {
          name: "Bytepocket",
          logo: "bytepocket.jpg",
          url: "https://taylor-misch.github.io/bytepocket/",
          iconLink: "https://github.com/taylor-misch/bytepocket",
          icon: "fab fa-github",
          alt: "Bytepocket - cryptocurrency wallet tracker",
          label: "Bytepocket's GitHub",
        },
        {
          name: "SoundScript",
          logo: "soundscript.png",
          url: "https://soundscript.netlify.com/",
          iconLink: "https://github.com/taylor-misch/soundscript",
          icon: "fab fa-github",
          alt: "SoundScript - a coding language for music",
          label: "SoundScript's GitHub",
        },
        {
          name: "Portfolio Website",
          logo: "portfolio.png",
          url: "https://taylormisch.com",
          iconLink: "https://github.com/taylor-misch/portfolio-website",
          icon: "fab fa-github",
          alt: "Where I show off and talk about myself",
          label: "Portfolio Website's GitHub",
        },
        {
          name: "Bass Build Project",
          logo: "bass.png",
          url: "https://imgur.com/a/3g41wKj",
          iconLink: "https://imgur.com/a/3g41wKj",
          icon: "fas fa-info-circle",
          alt: "Misch No. 1",
          label: "Bass Build Imgur Album",
        },
      ],
    };
  },
};
</script>
