<template>
  <Module id="about" title="About">
    <div class="headline">
      Taylor is a software developer. He graduated from the University of Wisconsin - Eau Claire in 2019 with a degree in Computer Science. Throughout his college career he learned the fundementals of programming through his schoolwork, the inner-workings of business through his internships, and how to think entreneaurally during his time as an original member of Clearwater Labs (a student run software development company startup) during his senior year.
      This website features some his professional experinece, projects, and interests. Feel free to look around, explore his GitHub, or reach out to him on LinkedIn.
    </div>
    <v-layout justify-center >
      <v-responsive max-width="750">
        <v-carousel>
          <v-carousel-item
            v-for="image in images"
            :key="image.id"
            :src="require('@/assets/'+image.src)"
          ></v-carousel-item>
        </v-carousel>
      </v-responsive>
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
