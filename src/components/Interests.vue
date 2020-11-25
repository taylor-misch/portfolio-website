<template>
  <Module id="interests" title="Interests">
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="interest in interests"
        :key="interest.name"
      >
        <v-card color="grey lighten-4" class="text-xs-center ma-3">
          <v-card-text class="text-center">
            <v-icon x-large color="black">{{ interest.icon }}</v-icon>
          </v-card-text>
          <v-card-text
            class="text-center black--text font-weight-medium body-1"
          >
            <h3>{{ interest.name }}</h3>
          </v-card-text>
          <v-card-text
            class="text-justify black--text font-weight-medium body-1"
          >
            {{ interest.body }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module,
  },
  data() {
    return {
      interests: [
        {
          name: "Software Development",
          body:
            "I didn’t write a line of code until my freshman year of college. So when it comes to Software Development, you could say I got lucky by blindly choosing a career path and not regretting that choice for a day since. So far in my career, I’ve focused on the Web Development space - mostly working with JavaScript frameworks and RESTful APIs. I hope to someday learn Game Development as well as explore some of the more advanced topics in Computer Science like Web Assembly, Machine Learning, and Artificial Intelligence.",
          icon: "fas fa-laptop",
        },
        {
          name: "Music",
          body:
            "Playing musical instruments has always been one of my favorite hobbies. I begged my parents to let me start piano lessons in second grade, and I have been practicing and playing ever since. As for other instruments, in 6th grade I saw the movie 'School of Rock' for the first time and, once again, begged my parents to let me play electric guitar. They relented and got me a starter guitar for Christmas. I began with AC/DC covers, and over time I’ve gotten better and better. I hope to continue playing both piano and guitar the rest of my life.",
          icon: "fas fa-music",
        },
        {
          name: "Building Stuff",
          body:
            "When I was younger I'd always loved to make board games and other things out of cardboard to play with. I think my love for crafting things as a kid has translated into a love for development with a computer - where I build the majority of my projects these days. However, not all of my projects are on the computer. Recently, I finished building my own bass guitar. In the future, I might do the whole process again and build my own six-string guitar. While it’s definitely easier to buy something, money cannot buy the sense of pride I feel while using something I made myself.",
          icon: "fas fa-toolbox",
        },

        {
          name: "Reading",
          body:
            "I've been reading for a long time. Like most kids, one of the first book series that I really got into was Harry Potter, but I also enjoyed the Percy Jackson books by Rick Riordan. Lately, I’ve been hopping between genres quite a bit. I like mysteries, thrillers, and fantasy, but I’m just as likely to read non-fiction as I am fiction. My current favorite authors are Lee Child, John Sandford, and Cal Newport. I'm always looking for another good book though, so if you have a favorite book you think I’d like, feel free to send me a recommendation.",
          icon: "fas fa-book",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
