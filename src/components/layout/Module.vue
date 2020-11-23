<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" lg="10">
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
      <v-spacer></v-spacer>
      <v-col v-if="action" cols="12" lg="2">
        <a
          class="body-1 red--text text--darken-4"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-uppercase text-center'
              : 'text-uppercase'
          "
          :href="action.file"
          download
        >
          <v-chip>
            <v-icon :class="action.icon"></v-icon>
            <div class="body-2 mx-3">
              {{ action.name }}
            </div>
          </v-chip>
        </a>
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
    action: {
      type: Object,
      required: false,
    },
  },
};
</script>
