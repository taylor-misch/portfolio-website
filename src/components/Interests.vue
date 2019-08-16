<template>
  <Module id="interests" title="Interests">
    <v-layout wrap>
      <v-flex xs12 md6 v-for="interest in interests" :key="interest.name">
        <v-card color="grey lighten-4" class="text-xs-center ma-3">
          <v-card-text class="text-center">
            <v-icon x-large color="black">{{interest.icon}}</v-icon>
          </v-card-text>
          <v-card-text class="text-center black--text font-weight-medium body-1">
            <h3>{{interest.name}}</h3>
          </v-card-text>
          <v-card-text class="text-justify black--text font-weight-medium body-1">{{interest.body}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
            "When choosing a major, I didn't originally think I was going to go into Computer Science. In fact, until my senior year of high school I believed that I was destined to be an accountant or something in the financial realm. Looking back, I don't know what completely swayed me other than the fact that I wanted to be able to use a computer to its fullest potential. Since that pivotal decision, I've completed three internships in IT, helped get a tech startup off the ground, earned my Bachelor of Science degree in Computer Science, secured my first full time job as Software Developer, and have loved every minute of it. It has been the most fulfilling skill/hobby/passion of mine since I started from scratch in 2015. Currently, I've been looking into Vue JS and other JavaScript frameworks, but I enjoy learning about anything and everything in the realm of tech and development.",
          icon: "fas fa-laptop"
        },
        {
          name: "Music",
          body:
            "Music has always been one of my favorite hobbies. I begged my parents to let me start piano lessons in second grade so I could be like my brothers, and I have been practicing and playing ever since. Recently, because I never had too many opportunites to perform as a kid, I decided I wanted to try and record myself playing some of my favorite songs and post them on YouTube so I could share my talents with my friends and family. I've yet to get a perfect recording of my first song yet, but I'm hoping to have at least two videos posted by the end of 2019. As for other instruments, in 6th grade I saw the movie 'School of Rock' for the first time and begged my parents to let me play electric guitar, they finally relented and got me a starter guitar for Christmas. I started by relentlessing practicing AC/DC covers and the hard work paid off. I love music from the 70s, 80s, and 90s - so being able to play guitar with my favorite songs is a very rewarding.",
          icon: "fas fa-music"
        },
        {
          name: "Building Stuff",
          body:
            "When I was younger I'd always love to make board games and other things to play with out of cardboard. I think I enjoyed making it just as much as playing with the end product. I think that my love for building stuff has translated in to my love for development with a computer - where I build the majority of my projects these days. However, I don't do all my projects on the computer. Recently, I finished building my own bass guitar - Misch No. 1. In the future I might do the whole process again and build my own six-string guitar. Not because the guitar I have now is bad - it's actually quite good (Gibson SG Standard, Heritage Cherry) - but rather because I feel like no money can buy the amount of pride I feel for the bass guitar I built myself.",
          icon: "fas fa-toolbox"
        },

        {
          name: "Reading",
          body:
            "I've been reading for a long time. I attribute this mainly to the fact that my parents read to me when I was younger, but regardless of how I started I don't think it's a hobby I'll ever set aside. Like most kids, the first book series that I really got into was Harry Potter, but I also enjoyed the Percy Jackson books by Rick Riordan. Over the past few years, I have been reading the Jack Reacher series by Lee Child to get my fiction fix, but in general, I mainly stick to non-fiction. My favorite books are Deep Work by Cal Newport, I Will Teach You to be Rich by Ramit Sethi, The 4-Hour Workweek by Timothy Ferris, The Power of Habit by Charles Duhigg, and The 7 Habits of Highly Effective People by Stephen Covey. I'm always looking for another good book though, so if you know any, feel free to send me a recommendation",
          icon: "fas fa-book"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
