<template>
  <Module id="contact" title="Contact Me">
    <v-form>
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <v-text-field
            filled
            background-color="white"
            label="Name"
            placeholder="John Doe"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            filled
            background-color="white"
            label="Email"
            placeholder="johndoe@gmail.com"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-textarea
        filled
        background-color="white"
        label="Message"
        placeholder="Hey Taylor, love the website!"
      ></v-textarea>
      <v-btn color="blue">Submit</v-btn>
    </v-form>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module,
  },
  data() {},
};
</script>

<style scoped></style>
