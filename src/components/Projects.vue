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
          alt: "Bytepocket - cryptocurrency wallet tracker",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/taylor-misch/bytepocket",
              icon: "fab fa-github",
            },
            {
              name: "Project",
              url: "https://taylor-misch.github.io/bytepocket/",
              icon: "fas fa-info-circle",
            },
          ],
          skills: [
            {
              name: "JavaScript",
              icon: "fab fa-js",
            },
            {
              name: "HTML",
              icon: "fab fa-html5",
            },
            {
              name: "CSS",
              icon: "fab fa-css3-alt",
            },
            {
              name: "Vue.js",
              icon: "fab fa-vuejs",
            },
            {
              // material design icons has a vuetify icon
              name: "Vuetify",
              icon: "fab fa-vuejs",
            },
          ],
          summary:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita odio tempore ratione nulla aspernatur suscipit odit eligendi aliquid qui quibusdam itaque ipsa quae dolor accusamus, magni amet. Optio libero voluptatem eveniet eum maxime adipisci modi ratione nam iusto harum, consectetur, repellat, sunt corporis quisquam magnam officia nulla laudantium amet quis dolor rerum. Ut atque deleniti odit, quia obcaecati officia omnis voluptas maiores veritatis nulla. Voluptatibus, architecto ratione alias illo vero nostrum accusamus dicta eos laboriosam at sequi error maxime aperiam quis nam dolore veniam eveniet corporis. Quasi alias eveniet officia rerum pariatur explicabo similique, minima vel animi, fugit tenetur.",
        },
        // {
        //   name: "SoundScript",
        //   logo: "soundscript.png",
        //   url: "https://soundscript.netlify.com/",
        //   iconLink: "https://github.com/taylor-misch/soundscript",
        //   icon: "fab fa-github",
        //   alt: "SoundScript - a coding language for music",
        //   label: "SoundScript's GitHub",
        // },
        // {
        //   name: "Portfolio Website",
        //   logo: "portfolio.png",
        //   url: "https://taylormisch.com",
        //   iconLink: "https://github.com/taylor-misch/portfolio-website",
        //   icon: "fab fa-github",
        //   alt: "Where I show off and talk about myself",
        //   label: "Portfolio Website's GitHub",
        // },
        // {
        //   name: "Bass Build Project",
        //   logo: "bass.png",
        //   url: "https://imgur.com/a/3g41wKj",
        //   iconLink: "https://imgur.com/a/3g41wKj",
        //   icon: "fas fa-info-circle",
        //   alt: "Misch No. 1",
        //   label: "Bass Build Imgur Album",
        // },
      ],
    };
  },
};
</script>
