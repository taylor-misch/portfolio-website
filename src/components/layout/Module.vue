<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" xl="10">
        <!-- TODO Clean up double logic for section lables-->
        <div
          class="body-1 red--text text--lighten-1 font-weight-medium text-uppercase hidden-sm-and-down"
        >
          <h1>{{ title }}</h1>
        </div>
        <div
          class="body-1 red--text text--lighten-1 font-weight-medium text-uppercase text-center hidden-md-and-up"
        >
          <h1>{{ title }}</h1>
        </div>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="12" xl="10">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

