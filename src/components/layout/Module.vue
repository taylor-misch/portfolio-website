<template>
  <v-container>
    <v-row>
      <v-col v-if="$vuetify.breakpoint.xl" no-gutters cols="0" xl="1"></v-col>
      <v-col cols="12" md="5" class="flex-grow-0 flex-shrink-1">
        <div
          class="body-1 red--text text--darken-4"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-uppercase text-center'
              : 'text-uppercase'
          "
        >
          <h1>{{ title }}</h1>
        </div>
      </v-col>
      <v-col
        v-if="action"
        cols="12"
        md="3"
        style="max-width: 100%"
        class="d-flex flex-grow-1 flex-shrink-0"
        :class="
          $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
        "
      >
        <v-chip
          label
          @click="downloadWithAxios(action.file, action.downloadName)"
          color="blue darken-2"
          class="white--text"
        >
          <v-icon :class="action.icon"></v-icon>
          <div class="body-2 mx-2">
            {{ action.name }}
          </div>
        </v-chip>
      </v-col>

      <v-col v-if="$vuetify.breakpoint.xl" no-gutters cols="0" xl="1"></v-col>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="12" xl="10">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: {
    title: String,
    action: {
      type: Object,
      required: false,
    },
  },
  methods: {
    forceFileDownload(response, title) {
      // eslint-disable-next-line
      console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        // eslint-disable-next-line
        .catch(() => console.log("error occured"));
    },
  },
};
</script>
