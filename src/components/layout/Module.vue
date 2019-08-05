<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center>
      <v-flex xs12 sm10>
        <div class="display-1 font-weight-medium text-uppercase">{{title}}</div>
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

