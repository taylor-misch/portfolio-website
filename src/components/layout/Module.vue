<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" xl="10">
        <div
          class="body-1 red--text text--darken-4"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-uppercase text-center'
              : 'text-uppercase'
          "
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

