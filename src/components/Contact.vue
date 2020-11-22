<template>
  <Module id="contact" title="Contact Me">
    <v-col v-if="alert" cols="12" md="5">
      <v-alert v-model="alert" :type="messageStatus">
        <v-row no-gutters
          ><v-col class="grow">{{ alertMessage }}</v-col>
          <v-col class="shrink">
            <v-btn @click="alert = false">Send another message</v-btn>
          </v-col></v-row
        ></v-alert
      >
    </v-col>
    <v-form v-else>
      <v-row dense>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="params.fromName"
            filled
            background-color="white"
            label="Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="params.replyEmail"
            filled
            background-color="white"
            label="Email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="8">
          <v-textarea
            v-model="params.message"
            filled
            background-color="white"
            label="Message"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="8">
          <v-btn color="blue" @click="sendEmail">Submit</v-btn>
        </v-col>
      </v-row>
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
      messageStatus: "info",
      alert: false,
      alertMessage: "",
    };
  },
  // TODO Contact - Add validation to contact form
  // TODO Contact - Reset fields to "" when Send Another Message is clicked
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
            this.messageStatus = "success";
            this.alertMessage = "Message Sent";
            // eslint-disable-next-line
            console.log("SUCCESS!", result.status, result.text);
            this.alert = true;
          },
          (error) => {
            this.messageStatus = "error";
            this.alertMessage = "Something went wrong";
            // eslint-disable-next-line
            console.log("FAILED...", error);
            this.alert = true;
          }
        );
    },
  },
};
</script>

<style scoped></style>
