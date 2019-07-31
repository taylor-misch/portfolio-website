<template>
  <v-container>
    <div id="experience">
      <h1>Experience</h1>
      <v-expansion-panels>
        <v-expansion-panel v-for="experience in experiences" :key="experience.dates">
          <v-expansion-panel-header>
            <v-layout style="width: 100%">
              <v-flex xs4 class="text-left">
                <strong>{{experience.title}}</strong>
              </v-flex>
              <v-flex xs4 class="text-center text--secondary">
                <i>{{experience.company}}</i>
              </v-flex>
              <v-flex xs4 pr-3 class="text-right text--secondary">
                <i>{{experience.dates}}</i>
              </v-flex>
            </v-layout>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul>
              <li v-for="(outcome, index) in experience.outcomes" :key="index">{{outcome}}</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experiences: [
        {
          company: "University of Wisconsin - Eau Claire",
          title: "Bachelor of Science, Computer Science",
          dates: "(August 2015 - May 2019)",
          outcomes: [
            "Graduated Summa Cum Laude, 4.0 GPA",
            "Univerisity Honors Program",
            "2019's Outstanding Business Communication Student Award",
            "Mathematics Minor",
            "Advanced Business Communication Certificate"
          ]
        },
        {
          company: "Church Mutual Insurance Company",
          title: "Associate Developer",
          dates: "(June 2019 - Present)",
          outcomes: [
            "Spring Framework",
            "Vue JS, Vuetify, Vuex, and Vue-Router",
            "Completed assigned units of work before scheduled releases"
          ]
        },

        {
          company: "Clearwater Labs",
          title: "Software Engineer",
          dates: "(September 2018 - May 2019)",
          outcomes: [
            "Create software solution that improve campus life for students and faculty",
            "Develop Parking Notifier API using React, Twillio, and MongoDB",
            "Work in a loosely based Agile methodology using GitHub, Slack,Waffle, and Travis CI"
          ]
        },
        {
          company: "Travelers Insurance",
          title: "IT Intern, Business Insurance Infrastructure Architecture",
          dates: "(June - August 2018)",
          outcomes: [
            "Constructed and analyzed financial charts and graphs related to Travelers IT department's spending",
            " Explored new technologies that improved application scalability and reduced cost",
            "Planned and accomplished units of work using a Personal Kanban approach",
            "Prepared presentation materials for senior leadership team members"
          ]
        },
        {
          company: "Church Mutual Insurance Company",
          title: "IT Intern, Java Developer",
          dates: "(May - August 2017)",
          outcomes: [
            "Worked in an Agile environment as an active member of a Scrum Team",
            "Developed a Spring Framework MVC application to streamline business processes",
            "Completed assigned units of work before scheduled releases",
            "Communicated and presented completed bodies of work during bi-weekly sprint reviews"
          ]
        },
        {
          company: "Ashley Furniture Industries, Inc.",
          title: "IT Intern, Distribution",
          dates: "(May - August 2016) & (December 2016 - January 2017)",
          outcomes: [
            "Resolved database incidents that arose during the distribution process",
            "Performed new user setups and server promotes for the end-user distribution application",
            "Organized and submitted regular updates to the team's Sharepoint resource site"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
