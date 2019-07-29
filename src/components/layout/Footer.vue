<template>
  <v-footer padless>
    <v-flex primary lighten-2 py-4 text-center white--text xs12>
      {{ new Date().getFullYear() }} —
      <strong>Taylor Misch</strong>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>
