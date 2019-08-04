<template>
  <v-conainter grid-list-lg>
    <v-layout justify-center>
      <v-flex px-4 mt-10 xs12 sm10>
        <div class="display-1 font-weight-medium text-uppercase">{{title}}</div>
      </v-flex>
    </v-layout>
    <v-layout px-4 mb-10 align-center justify-center>
      <v-flex xs12 sm10>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-conainter>
</template>

<script>
export default {
  name: "Module",
  props: {
    title: String
  }
};
</script>

