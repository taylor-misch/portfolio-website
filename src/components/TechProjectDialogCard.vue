<template>
  <div>
    <v-row dense class="mx-2">
      <v-col cols="12" md="6">
        <v-row class="justify-center">
          <v-col cols="8" sm="5" md="8">
            <a :href="project.url">
              <v-img
                :src="require('@/assets/projects/' + project.logo)"
                class="rounded-xl"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row
          class="text-h5 font-weight-bold red--text text--darken-4 my-4"
          :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : ''"
          >Skills:
        </v-row>
        <v-row
          class="my-4"
          :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : ''"
        >
          <div v-for="skill in project.skills" :key="skill.name">
            <v-chip medium color="grey darken-2" class="white--text ma-1">
              <v-avatar tile class="mr-1">
                <v-icon
                  medium
                  :color="skill.color"
                  :class="skill.icon"
                ></v-icon>
              </v-avatar>
              {{ skill.name }}
            </v-chip>
          </div>
        </v-row>
        <v-row
          class="text-h5 font-weight-bold red--text text--darken-4 my-4"
          :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : ''"
          >Links:
        </v-row>
        <v-row
          class="my-4"
          :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : ''"
        >
          <div v-for="link in project.links" :key="link.name">
            <v-chip
              large
              label
              link
              :href="link.url"
              color="blue darken-3"
              class="white--text ma-1"
            >
              <v-icon large class="mr-2" :class="link.icon"> </v-icon>
              {{ link.name }}
            </v-chip>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-3 text-justify">
      <v-col>
        {{ project.summary }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: row;
}
</style>
