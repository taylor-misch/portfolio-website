<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center>
      <v-flex xs12 sm10>
        <div
          class="display-2 red--text text--lighten-1 font-weight-medium text-uppercase hidden-sm-and-down"
        >{{title}}</div>
        <div
          class="display-2 red--text text--lighten-1 font-weight-medium text-uppercase text-center hidden-md-and-up"
        >{{title}}</div>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

