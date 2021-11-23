<template>
  <Module id="projects" title="Projects & Certifications">
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
          name: "AWS Certified Cloud Practitioner",
          logo: "aws-cloud-practitioner.png",
          url:
            "https://aws.amazon.com/certification/certified-cloud-practitioner/",
          links: [
            {
              name: "Validation Page",
              url: "http://aws.amazon.com/verification",
              icon: "mdi mdi-information",
            },
          ],
          skills: [],
          summary:
            "At the beginning of 2021, I found myself wanting to learn more about cloud computing and DevOps. AWS is an industry leader in both of those spaces, and their certification program caught my eye. After studying for about a month, I took the exam for the AWS Certified Cloud Practitioner and passed on February 3, 2021. My validation number is 6JBG994BJNFQ1Z96, which can be verified by clicking on the above button.",
        },
        {
          name: "Bytepocket",
          logo: "bytepocket.jpg",
          url: "https://taylor-misch.github.io/bytepocket/",
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
            "Bytepocket allows you to enter the public address for any supported cryptocurrency account and see that wallet's current value in both its cryptocurrency and USD. Currently, the site supports three of the most popular crytocurrencies: Bitcoin (BTC), Etherium (ETH), and Ripple (XRP). Bytepocket consumes both BlockCypher and Cryptonator's APIs to provide accurate wallet values and conversions based on current cyrptocurrency prices. This site was created as an entry to the 2018 MinneHacks Hackathon at the University of Minnesota Twin Cities. I, along with my team, built Bytepocket within the 24-hour competition period and presented it to judges and other Hackathon participants.",
        },
        {
          name: "SoundScript",
          logo: "soundscript.png",
          url: "https://soundscript.netlify.com/",
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
            "SoundScript is both a language and a online sandbox that allows you to write code that makes music. SoundScript is built on top of JavaScript and uses common coding conventions like variables and methods as well as logic operators like loops and if statements to allow users to code short music 'programs'. The language was initially created in 2018 as a part of my Programming Languages class at the University of Wisconsin - Eau Claire. Later in 2019, I created the SoundScript website to provide more documentation and examples of what the SoundScript language is capable of.",
        },
        {
          name: "Portfolio Website",
          logo: "portfolio.png",
          url: "https://taylormisch.com",
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
            "Taylormisch.com is the website you are currently on. This portfolio website acts as my 'live' resume and is where I post my professional expereinces, projects I have worked on in the past, as well as my interests and hobbies. Taylormisch.com is ever-evolving. Originally designed and developed in summer 2019, I continually update it and add more experiences, pictures, and projects over time. Feel free to continue looking around or contact me if you have any specific questions.",
        },
        {
          name: "Bass Build Project",
          logo: "bass.png",
          url: "https://imgur.com/a/3g41wKj",
          links: [
            {
              name: "Imgur Page",
              url: "https://imgur.com/a/3g41wKj",
              icon: "mdi mdi-information",
            },
          ],
          skills: [],
          summary:
            "In 2017, after almost a decade of playing 6-string guitar, I started to have interest in exploring the bass guitar. I looked around for potential bass guitars to purchase but eventually settled on purchasing an electric bass guitar kit that I could build and paint myself. With school and internships, it wasn't until winter break (2018) that I got around to finally putting the bass guitar together. Over the course of a month I sanded the body, shaped the headstock, applied the primer and paint coats, added and polished the clear coat lacquer, and wired up the bass guitar. This was an awesome DIY project, and I hope to do it again someday by building a 6-string electric guitar. Check out the Imgur page for the project to see the guitar come together over time.",
        },
      ],
    };
  },
};
</script>
