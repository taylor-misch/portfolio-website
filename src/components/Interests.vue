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
          <v-card-text class="text-center black--text font-weight-medium body-1">{{interest.body}}</v-card-text>
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
          body: "This is what I love about software Development",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        },
        {
          name: "Music",
          body: "This is what I love about music",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        },
        {
          name: "Reading",
          body: "This is what I love about reading",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        },
        {
          name: "Building Stuff",
          body: "This is what I love about building stuff",
          images: ["flatiron.jpg", "ec_marathon.jpg", "tough_mudder.jpg"]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
