<template>
  <Module id="about" title="About">
    <v-layout md6>
      <v-flex class="title text-left">
        <p>Hi, I'm Taylor Misch. This site has been a bit of a passion project of mine for a long time now. As a software developer I've always thought it is a rite of passage to create your own website - so here's mine.</p>
        <p>On this site I post projects that I've worked on (inside and outside the realm of software development), things I'm interested in, and pictures from my latest adventure - whatever that may be. Feel free to look around or reach out to me if you think I can help you in anyway or would just like to talk about something you see here.</p>
      </v-flex>
    </v-layout>
    <v-layout md6 justify-center>
      <v-flex grow-shrink-0 class="xs12 md8 xl6">
        <v-responsive aspect-ratio="16/9">
          <v-carousel height="auto" hide-delimiters cycle interval="7000">
            <v-carousel-item
              v-for="image in images"
              :key="image.id"
              :src="require('@/assets/carousel/'+image.src)"
            ></v-carousel-item>
          </v-carousel>
        </v-responsive>
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
      images: [
        {
          id: 1,
          src: "cathedral_rock.jpg",
          alt: "Cathedral Rock"
        },
        {
          id: 2,
          src: "eaa.jpg",
          alt: "Experimental Aircraft Association 2019"
        },
        {
          id: 3,
          src: "tough_mudder.jpg",
          alt: "Tough Mudder Post-Race"
        },
        {
          id: 4,
          src: "flatiron.jpg",
          alt: "Flatiron in the Arizona"
        },
        {
          id: 5,
          src: "sutherland.jpg",
          alt: "Sutherland hall last day of junior year"
        },
        {
          id: 6,
          src: "taylors_falls.jpg",
          alt: "Taylor's Falls with Rachel and Leah"
        }
      ]
    };
  }
};
</script>
