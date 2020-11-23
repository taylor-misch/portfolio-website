<template>
  <Module id="about" title="About">
    <v-row>
      <v-col lass="body-1 text-left grey--text text--darken-3">
        <h3>
          Hi, I'm Taylor Misch. This site has been a bit of a passion project of
          mine for a long time now. As a software developer, I've always thought
          it is a rite of passage to create your own website - so here's mine.
        </h3>
        <br />
        <h3>
          On this site I post projects that I've worked on (inside and outside
          the realm of software development), things I'm interested in, and
          pictures from my latest adventure - whatever that may be. Feel free to
          look around or reach out to me if you think I can help you in anyway
          or would just like to talk about something you see here.
        </h3>
      </v-col>
    </v-row>
    <!-- TODO About - Add a skeleton loader for the image -->
    <v-row md6 class="justify-center">
      <v-col cols="11" md="8" xl="6">
        <v-img
          :src="require('@/assets/carousel/' + imageSource)"
          contain
          max-height="700px"
        ></v-img>
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
  computed: {
    imageSource() {
      return this.images[new Date().getDay()].src;
    },
  },
  data() {
    return {
      images: [
        {
          src: "eaa.jpg",
          alt: "Experimental Aircraft Association 2019",
        },
        {
          src: "tough_mudder.jpg",
          alt: "Tough Mudder Post-Race",
        },
        {
          src: "flatiron.jpg",
          alt: "Flatiron in the Arizona",
        },
        {
          src: "sutherland.jpg",
          alt: "Sutherland hall last day of junior year",
        },
        {
          src: "taylors_falls.jpg",
          alt: "Taylor's Falls with Rachel and Leah",
        },
        {
          src: "state_fair.jpg",
          alt: "Minnesota State Fair 2019",
        },
        {
          src: "parasailing.jpg",
          alt: "Parasailing in Fort Meyers with Rachel and Leah",
        },
      ],
    };
  },
};
</script>
