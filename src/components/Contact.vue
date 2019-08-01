<template>
  <Module id="contact" title="Contact" class="red lighten-4">
    <v-container>
      <div class="icons">
        <a href="https://linkedin.com/in/taylor-misch">
          <v-icon large color="black" class="fab fa-linkedin fa-2x">linkedin-box</v-icon>
        </a>
        <a href="https://github.com/taylor-misch">
          <v-icon large color="black" class="fab fa-github">github-box</v-icon>
        </a>
        <a href="mailto:taylormisch@gmail.com">
          <v-icon large color="black">email</v-icon>
        </a>
      </div>
    </v-container>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  name: "Contact",
  components: {
    Module
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
