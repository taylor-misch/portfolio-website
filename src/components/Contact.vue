<template>
  <Module id="contact" title="Contact Me">
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <v-row dense class="flex flex-column justify-center">
            <v-col cols="12">
              <v-text-field
                v-model="params.fromName"
                filled
                background-color="white"
                label="Name"
                placeholder="John Doe"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="params.replyEmail"
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
                v-model="params.message"
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
import emailjs from "emailjs-com";

export default {
  components: {
    Module,
  },
  data() {
    return {
      params: {
        message: "",
        toName: "Taylor",
        fromName: "",
        replyEmail: "",
      },
    };
  },
  methods: {
    sendEmail: function () {
      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          this.params,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            // eslint-disable-next-line
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            // eslint-disable-next-line
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped></style>
