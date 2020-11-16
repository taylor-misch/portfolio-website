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
      </v-col>
    </v-row>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
import ProjectDialog from "@/components/ProjectDialog";

export default {
  components: {
    Module,
    ProjectDialog,
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
              name: "GitHub Repo",
              url: "https://github.com/taylor-misch/bytepocket",
              icon: "fab fa-github",
            },
            {
              name: "Bytepocket Website",
              url: "https://taylor-misch.github.io/bytepocket/",
              icon: "mdi mdi-information",
            },
          ],
          skills: [
            {
              name: "HTML",
              icon: "mdi mdi-language-html5",
              color: "orange",
            },
            {
              name: "CSS",
              icon: "mdi mdi-language-css3",
              color: "blue lighten-1",
            },
            {
              name: "JavaScript",
              icon: "mdi mdi-language-javascript",
              color: "yellow darken-1",
            },
          ],
          summary:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita odio tempore ratione nulla aspernatur suscipit odit eligendi aliquid qui quibusdam itaque ipsa quae dolor accusamus, magni amet. Optio libero voluptatem eveniet eum maxime adipisci modi ratione nam iusto harum, consectetur, repellat, sunt corporis quisquam magnam officia nulla laudantium amet quis dolor rerum. Ut atque deleniti odit, quia obcaecati officia omnis voluptas maiores veritatis nulla. Voluptatibus, architecto ratione alias illo vero nostrum accusamus dicta eos laboriosam at sequi error maxime aperiam quis nam dolore veniam eveniet corporis. Quasi alias eveniet officia rerum pariatur explicabo similique, minima vel animi, fugit tenetur.",
        },
        {
          name: "SoundScript",
          logo: "soundscript.png",
          alt: "SoundScript - a coding language for music",
          links: [
            {
              name: "GitHub Repo",
              url: "https://github.com/taylor-misch/soundscript",
              icon: "fab fa-github",
            },
            {
              name: "SoundScript Website",
              url: "https://soundscript.netlify.com/",
              icon: "mdi mdi-information",
            },
          ],
          skills: [
            {
              name: "Vue.js",
              icon: "mdi mdi-vuejs",
              color: "green",
            },
            {
              name: "Vuetify",
              icon: "mdi mdi-vuetify",
              color: "blue lighten-2",
            },
            {
              name: "HTML",
              icon: "mdi mdi-language-html5",
              color: "orange",
            },
            {
              name: "CSS",
              icon: "mdi mdi-language-css3",
              color: "blue lighten-1",
            },
            {
              name: "JavaScript",
              icon: "mdi mdi-language-javascript",
              color: "yellow darken-1",
            },
          ],
          summary:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita odio tempore ratione nulla aspernatur suscipit odit eligendi aliquid qui quibusdam itaque ipsa quae dolor accusamus, magni amet. Optio libero voluptatem eveniet eum maxime adipisci modi ratione nam iusto harum, consectetur, repellat, sunt corporis quisquam magnam officia nulla laudantium amet quis dolor rerum. Ut atque deleniti odit, quia obcaecati officia omnis voluptas maiores veritatis nulla. Voluptatibus, architecto ratione alias illo vero nostrum accusamus dicta eos laboriosam at sequi error maxime aperiam quis nam dolore veniam eveniet corporis. Quasi alias eveniet officia rerum pariatur explicabo similique, minima vel animi, fugit tenetur.",
        },
        {
          name: "Portfolio Website",
          logo: "portfolio.png",
          alt: "Where I show off and talk about myself",
          links: [
            {
              name: "GitHub Repo",
              url: "https://github.com/taylor-misch/portfolio-website",
              icon: "fab fa-github",
            },
            {
              name: "Portfolio Website",
              url: "https://taylormisch.com",
              icon: "mdi mdi-information",
            },
          ],
          skills: [
            {
              name: "Vue.js",
              icon: "mdi mdi-vuejs",
              color: "green",
            },
            {
              name: "Vuetify",
              icon: "mdi mdi-vuetify",
              color: "blue lighten-2",
            },
            {
              name: "HTML",
              icon: "mdi mdi-language-html5",
              color: "orange",
            },
            {
              name: "CSS",
              icon: "mdi mdi-language-css3",
              color: "blue lighten-1",
            },
            {
              name: "JavaScript",
              icon: "mdi mdi-language-javascript",
              color: "yellow darken-1",
            },
          ],
          summary:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita odio tempore ratione nulla aspernatur suscipit odit eligendi aliquid qui quibusdam itaque ipsa quae dolor accusamus, magni amet. Optio libero voluptatem eveniet eum maxime adipisci modi ratione nam iusto harum, consectetur, repellat, sunt corporis quisquam magnam officia nulla laudantium amet quis dolor rerum. Ut atque deleniti odit, quia obcaecati officia omnis voluptas maiores veritatis nulla. Voluptatibus, architecto ratione alias illo vero nostrum accusamus dicta eos laboriosam at sequi error maxime aperiam quis nam dolore veniam eveniet corporis. Quasi alias eveniet officia rerum pariatur explicabo similique, minima vel animi, fugit tenetur.",
        },
        {
          name: "Bass Build Project",
          logo: "bass.png",
          alt: "Misch No. 1",
          links: [
            {
              name: "Imgur Page",
              url: "https://imgur.com/a/3g41wKj",
              icon: "mdi mdi-information",
            },
          ],
          skills: [],
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita odio tempore ratione nulla aspernatur suscipit odit eligendi aliquid qui quibusdam itaque ipsa quae dolor accusamus, magni amet. Optio libero voluptatem eveniet eum maxime adipisci modi ratione nam iusto harum, consectetur, repellat, sunt corporis quisquam magnam officia nulla laudantium amet quis dolor rerum. Ut atque deleniti odit, quia obcaecati officia omnis voluptas maiores veritatis nulla. Voluptatibus, architecto ratione alias illo vero nostrum accusamus dicta eos laboriosam at sequi error maxime aperiam quis nam dolore veniam eveniet corporis. Quasi alias eveniet officia rerum pariatur explicabo similique, minima vel animi, fugit tenetur.",
        },
      ],
    };
  },
};
</script>
