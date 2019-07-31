<template>
  <v-footer dark padless>
    <v-flex lighten-2 py-4 text-center white--text xs12>
      <strong>
        &copy;
        {{ new Date().getFullYear() }} —Taylor Misch. All Rights Reserverd
      </strong>
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
