<template>
  <Module id="contact" title="Contact Me">
    <v-col v-if="alert" cols="12" md="5">
      <v-alert v-model="alert" :type="messageStatus">
        <v-row no-gutters
          ><v-col class="grow">{{ alertMessage }}</v-col>
          <v-col class="shrink">
            <v-btn @click="resolveForm"> {{ buttonMessage }}</v-btn>
          </v-col></v-row
        ></v-alert
      >
    </v-col>
    <v-form v-else v-model="form">
      <v-row dense>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="params.fromName"
            :rules="[rules.length(1)]"
            filled
            background-color="white"
            label="Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="params.replyEmail"
            :rules="[rules.length(1), rules.email]"
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
            :rules="[rules.length(1)]"
            filled
            background-color="white"
            label="Message"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="8">
          <v-btn color="blue" @click="sendEmail" :disabled="!form"
            >Submit</v-btn
          >
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
      form: false,
      messageStatus: "info",
      alert: false,
      alertMessage: "",
      buttonMessage: "",
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        length: (len) => (v) =>
          (v || "").length >= len || `This field is required`,
      },
    };
  },
  // TODO Contact - Add validation to contact form
  // TODO Contact - Reset fields to "" when Send Another Message is clicked
  methods: {
    sendEmail: function() {
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
            this.buttonMessage = "Send Another Message";
            // eslint-disable-next-line
            console.log("SUCCESS!", result.status, result.text);
            this.alert = true;
          },
          (error) => {
            this.messageStatus = "error";
            this.alertMessage = "Something went wrong";
            this.buttonMessage = "Try Again";
            // eslint-disable-next-line
            console.log("FAILED...", error);
            this.alert = true;
          }
        );
    },
    resolveForm: function() {
      this.alert = false;
      if ("success" === this.messageStatus) {
        this.params.fromName = "";
        this.params.message = "";
        this.params.replyEmail = "";
      }
    },
  },
};
</script>

<style scoped></style>
