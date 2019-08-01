<template>
  <Module id="about" title="About" class="orange lighten-3">
    <v-container>
      <v-layout>
        <v-flex>
          <!-- <v-carousel>
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="require('@/assets/' + image)"
            ></v-carousel-item>
          </v-carousel>-->
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <p>
            Taylor is a software developer. He graduated from the University of Wisconsin - Eau Claire in 2019 with a degree in Computer Science. Throughout his college career he learned the fundementals of programming through his schoolwork, the inner-workings of business through his internships, and how to think entreneaurally during his time as an original member of Clearwater Labs (a student run software development company startup) during his senior year.
            This website features some his professional experinece, projects, and interests. Feel free to look around, explore his GitHub, or reach out to him on LinkedIn.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  name: "About",
  components: {
    Module
  }
  // data() {
  //   images: ["cathedral_rock.jpg", "portrait_large.jpg"];
  // }
};
</script>

<style scoped>
</style>
