<template>
  <Module id="about" title="About">
    <v-layout xs12 md6>
      <v-flex class="headline text-left">
        <p>Hi, I'm Taylor Misch. This site has been a bit of a passion project of mine for a long time now. As a software developer I've always though it is a rite of passage to create your own website - so here's mine.</p>
        <p>On this site I post projects that I've worked on (inside and outside the realm of software development), things I'm interested in, and pictures from my latest adventure - whatever that may be.</p>
        <p>Feel free to look around or reach out to me if you think I can help you in anyway or just would like to talk about something you see here.</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md6>
        <v-responsive aspect-ratio="16/9">
          <v-carousel>
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
          src: "cathedral_rock.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
