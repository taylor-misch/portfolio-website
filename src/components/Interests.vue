<template>
  <Module id="interests" title="Interests">
    <v-layout wrap>
      <v-flex xs12 md6 v-for="interest in interests" :key="interest.name">
        <v-card color="amber lighten-4" class="text-xs-center ma-3">
          <v-responsive aspect-ratio="16/9">
            <v-carousel
              :height="{'300': $vuetify.breakpoint.mdAndDown}"
              hide-delimiters
              cycle
              interval="10000"
            >
              <v-carousel-item
                v-for="(image, index) in interest.images"
                :key="index"
                :src="require('@/assets/interests/'+image)"
              ></v-carousel-item>
            </v-carousel>
          </v-responsive>
          <v-card-text
            class="text-center black--text font-weight-medium title hidden-md-and-up"
          >{{interest.name}}</v-card-text>
          <v-card-text
            class="text-center black--text font-weight-medium headline hidden-sm-and-down"
          >{{interest.name}}</v-card-text>
          <v-card-text class="text-justify black--text font-weight-medium body-1">{{interest.body}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <div class="interest">
      <h3>Hackathons</h3>
      <ul>
        <li>MadHacks 2017 & 2018</li>
        <li>MinneHacks 2018 & 2019</li>
        <li>HuskieHacks 2017</li>
      </ul>
    </div>

    <div class="interest">
      <h3>Software Development</h3>
      <ul>
        <li>Vue.js</li>
        <li>React.js</li>
        <li>Unity Game Developement</li>
      </ul>
    </div>

    <div class="interest">
      <h3>Music</h3>
      <ul>
        <li>Piano</li>
        <li>Guitar</li>
      </ul>
    </div>-->
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module
  },
  data() {
    return {
      interests: [
        {
          name: "Software Development",
          body:
            "When choosing a major, I didn't originally think I was going to go into Computer Science. In fact, until my senior year of high school I believed that I was destined to be an accountant or something in the financial realm. Looking back, I don't know what completely swayed me other than the fact that I wanted to be able to use a computer to its fullest potential. Since that pivotal decision, I've completed my B.S. in Computer Science and have loved what I do inside the office and on my own time. It has been the most fulfilling skill/hobby/passion of mine since I started from scratch in 2015. Currently, I've been looking into Vue JS and other JavaScript frameworks more, but I enjoy learning about video game development during my free time.",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        },
        {
          name: "Music",
          body:
            "Music has always been one of my favorite hobbies. I started piano lessons in second grade and have been practicing and playing since then. In 5th grade, I saw the movie 'School of Rock' for the first time and begged my parents to let me play electric guitar, they finally relented and got me a guitar for Christmas that year. Over the next couple years I taught myself to play it and have been doing so ever since.",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        },
        {
          name: "Reading",
          body:
            "I've been reading for a long time. Like most kids, the first book series that I really got into was Harry Potter, but I also enjoyed the Percy Jackson books by Rick Riordan. Over the past few years, I have been reading the Jack Reacher series by Lee Child to get my fiction fix. Otherwise, I mainly stick to non-fiction. My favorite books are Deep Work by Cal Newport, I Will Teach You to be Rich by Ramit Sethi, The 4-Hour Workweek by Timothy Ferris, The Power of Habit by Charles Duhigg, and The 7 Habits of Highly Effective People by Stephen Covey",
          images: [
            "books/harry_potter.jpg",
            "books/percy_jackson.jpg",
            "books/jack_reacher.jpg",
            "books/deep_work.jpg",
            "books/to_be_rich.jpg",
            "books/4-hour.jpg",
            "books/habit.jpg",
            "books/7_habits.jpg"
          ]
        },
        {
          name: "Building Stuff",
          body:
            "When I was younger I'd always love to make board games and other things to play with out of cardboard. I think I enjoyed making it just as much as playing with the end product. I'm happy to say that side of me has never gone away. Recently, I finished building my own kit bass guitar, and I have to say it turned out looking really good.",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
