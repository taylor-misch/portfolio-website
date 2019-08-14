<template>
  <Module id="experience" title="Experience">
    <v-expansion-panels>
      <v-expansion-panel
        class="amber lighten-4"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <v-expansion-panel-header>
          <v-layout>
            <v-flex class="xs4 body-1 text-left hidden-sm-and-down">
              <strong>{{experience.title}}</strong>
            </v-flex>
            <v-flex class="xs4 body-1 text-center hidden-sm-and-down">
              <i>{{experience.dates}}</i>
            </v-flex>
            <v-flex class="pr-3 xs4 body-1 text-right hidden-sm-and-down">
              <strong>{{experience.company}}</strong>
            </v-flex>
            <v-flex class="xs5 body-2 text-left hidden-md-and-up">
              <strong>{{experience.title}}</strong>
            </v-flex>
            <v-flex pr-3 class="xs7 body-2 text-center hidden-md-and-up">
              <strong>{{experience.company}}</strong>
              <br />
              <i>({{experience.dates}})</i>
            </v-flex>
          </v-layout>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul>
            <li
              class="body-1 hidden-sm-and-down"
              v-for="(outcome, index) in experience.outcomes"
              :key="index"
            >{{outcome}}</li>
            <li
              class="body-2 hidden-md-and-up"
              v-for="(outcome, index) in experience.outcomes"
              :key="index"
            >{{outcome}}</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module
  },
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: "Church Mutual Insurance Company",
          title: "Associate Developer",
          dates: "June 2019 - Present",
          outcomes: [
            "Develop proof of concept applications using the Spring and Vue.js frameworks",
            "Explore frontend solutions with Vuetify, Vuex, and Vue-Router"
          ]
        },
        {
          id: 2,
          company: "University of Wisconsin - Eau Claire",
          title: "Bachelor of Science, Computer Science",
          dates: "August 2015 - May 2019",
          outcomes: [
            "Graduated Summa Cum Laude, 4.0 GPA",
            "Univerisity Honors Program",
            "2019's Outstanding Business Communication Student Award",
            "Mathematics Minor",
            "Advanced Business Communication Certificate"
          ]
        },
        {
          id: 3,
          company: "Clearwater Labs",
          title: "Software Engineer",
          dates: "September 2018 - May 2019",
          outcomes: [
            "Designed and developed a texting service software for the University of Wisconin - Eau Claire's fundraising foundation",
            "Developed Parking Notifier API using React, Twillio, and MongoDB",
            "Worked in a loosely based Agile methodology using GitHub, Slack, Waffle, and Travis CI",
            "Created software solutions that improved campus life for students and faculty"
          ]
        },
        {
          id: 4,
          company: "Travelers Insurance",
          title: "IT Intern, Business Insurance Infrastructure Architecture",
          dates: "June - August 2018",
          outcomes: [
            "Constructed and analyzed financial charts and graphs related to Travelers IT department's spending",
            "Explored new technologies that improved application scalability and reduced cost",
            "Competed in and won a summer long company wide (interns) innovation jam creating and pitching an idea for an internal onboarding app",
            "Planned and accomplished units of work using a Personal Kanban approach"
          ]
        },
        {
          id: 5,
          company: "Church Mutual Insurance Company",
          title: "IT Intern, Java Developer",
          dates: "May - August 2017",
          outcomes: [
            "Developed a Spring Framework MVC application to streamline internal business processes",
            "Worked in an Agile environment as an active member of a Scrum Team",
            "Delivered an end-of-summer results presentation to senior leadership IT staff",
            "Communicated and presented completed bodies of work during bi-weekly sprint reviews"
          ]
        },
        {
          id: 6,
          company: "Ashley Furniture Industries, Inc.",
          title: "IT Intern, Distribution",
          dates: "May 2016 - January 2017",
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
.experience-color {
  background-color: #000f08;
}
</style>
