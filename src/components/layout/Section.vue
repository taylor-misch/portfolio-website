<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div>{{title}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String
  }
};
</script>

<style>
</style>
