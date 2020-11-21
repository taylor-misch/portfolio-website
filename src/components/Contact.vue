<template>
  <Module id="contact" title="Contact Me">
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <v-row dense class="flex flex-column justify-center">
            <v-col cols="12">
              <v-text-field
                filled
                background-color="white"
                label="Name"
                placeholder="John Doe"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                filled
                background-color="white"
                label="Email"
                placeholder="johndoe@gmail.com"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row dense class="flex flex-column justify-center">
            <v-col cols="12">
              <v-textarea
                v-model="message"
                filled
                background-color="white"
                label="Message"
                placeholder="Hey Taylor, love the website!"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-btn color="blue" @click="sendEmail">Submit</v-btn>
    </v-form>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module,
  },
  data: () => ({
    message: "",
  }),
  methods: {
    sendEmail() {
      console.log(this.message);
    },
  },
};
</script>

<style scoped></style>
