<template>
  <v-container class="fluid grid-list-lg">
    <v-row class="justify-center" cols="12">
      <v-col xs="12" sm="10">
        <!-- TODO Clean up double logic for section lables-->
        <div
          class="body-1 red--text text--lighten-1 font-weight-medium text-uppercase hidden-sm-and-down"
        >
          <h1>{{title}}</h1>
        </div>
        <div
          class="body-1 red--text text--lighten-1 font-weight-medium text-uppercase text-center hidden-md-and-up"
        >
          <h1>{{title}}</h1>
        </div>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center" cols="12">
      <v-col xs="12" sm="10">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

