<template>
  <v-dialog v-model="dialog" max-width="1000px" scrollable>
    <slot></slot>
    <v-card color="grey lighten-3">
      <v-row>
        <v-spacer></v-spacer>
        <!-- TODO - update icon to change color on click -->
        <v-col cols="1" class="clickable"
          ><v-icon
            large
            @click="closeDialog"
            class="mx-3 far fa-window-close"
          ></v-icon
        ></v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="3">
          <v-img
            :src="require('@/assets/projects/portfolio.png')"
            class="rounded-xl"
          ></v-img>
        </v-col>
      </v-row>
      <v-card-text>
        Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra
        urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus
        velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue
        aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget
        rhoncus. Amet donec vestibulum mattis vel mattis mollis massa ut dolor
        ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,
        iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim
        pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
        sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci
        pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
        sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci
        lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
        habitasse turpis. +
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
