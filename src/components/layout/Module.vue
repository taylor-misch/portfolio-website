<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm10>
        <h1>{{title}}</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <slot></slot>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Module",
  props: {
    title: String
  }
};
</script>

<style>
</style>
