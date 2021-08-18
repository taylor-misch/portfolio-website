<template>
  <div id="home">
    <div class="pimg1">
      <!-- TODO fill-height does not appear in the newer documentation -->
      <v-container fill-height>
        <v-row>
          <v-col class="display-4 text-center font-weight-medium">
            <div
              class="new-font text-center font-weight-medium mb4 white--text"
            >
              Taylor Misch
            </div>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <a href="https://linkedin.com/in/taylor-misch">
                  <v-icon
                    x-large
                    color="blue lighten-2"
                    v-on="on"
                    class="mx-3 fab fa-linkedin"
                  ></v-icon>
                </a>
              </template>
              <span>LinkedIn</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <a href="https://github.com/taylor-misch">
                  <v-icon
                    x-large
                    color="amber lighten-4"
                    v-on="on"
                    class="mx-3 fab fa-github"
                  ></v-icon>
                </a>
              </template>
              <span>GitHub</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-icon
                  x-large
                  color="red lighten-3"
                  v-on="on"
                  class="mx-2 mdi mdi-file-account"
                  @click="downloadWithAxios(action.file, action.downloadName)"
                ></v-icon>
              </template>
              <span>Resume</span>
            </v-tooltip>
            <!-- TODO try to come up with a way to not have to use breakpoint -->
            <div class="display-1">
              <span class="new-font blue--text text--lighten-3"
                >Full Stack Developer</span
              >
              <br />
              <span class="new-font amber--text text--lighten-4"
                >Hobbiest Musician</span
              >
              <br />
              <span class="new-font red--text text--lighten-3"
                >Lifelong Learner</span
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      action: {
        name: "Download Resume",
        file: "/TaylorMischWebsiteResume.pdf",
        downloadName: "Taylor Misch - Resume.pdf",
        icon: "mdi mdi-file-account",
      },
    };
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

<style scoped>
.pimg1 {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../assets/background.jpg");
  height: 100vh;
}
.new-font {
  font-family: "Lexend Deca", sans-serif;
}
</style>

