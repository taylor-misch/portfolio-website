<template>
  <Module id="experience" title="Experience" :action="action">
    <v-expansion-panels>
      <v-expansion-panel
        class="grey lighten-4"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <v-expansion-panel-header>
          <v-row>
            <v-col
              :cols="$vuetify.breakpoint.mdAndUp ? '4' : '5'"
              :class="
                $vuetify.breakpoint.mdAndUp
                  ? 'body-1 text-left'
                  : 'body-2 text-left'
              "
            >
              <strong>{{ experience.title }}</strong>
            </v-col>
            <v-col cols="4" class="body-1 text-center hidden-sm-and-down">
              <i>{{ experience.dates }}</i>
            </v-col>
            <v-col cols="4" class="pr-3 body-1 text-right hidden-sm-and-down">
              <strong>{{ experience.company }}</strong>
            </v-col>

            <v-col cols="7" pr-3 class="body-2 text-center hidden-md-and-up">
              <strong>{{ experience.company }}</strong>
              <br />
              <i>({{ experience.dates }})</i>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul>
            <li
              :class="$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2'"
              v-for="(outcome, index) in experience.outcomes"
              :key="index"
            >
              {{ outcome }}
            </li>
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
    Module,
  },
  data() {
    return {
      action: {
        name: "Download Resume",
        file: "/TaylorMischResume-Blackout.pdf",
        downloadName: "Taylor Misch - Resume.pdf",
        icon: "mdi mdi-file-account",
      },
      experiences: [
        {
          id: 1,
          company: "Church Mutual Insurance Company, S.I.",
          title: "Associate Developer",
          dates: "June 2019 - Present",
          outcomes: [
            "Develop RESTful services using the Spring Framework to support the implementation of the company’s first external facing customer and broker portal",
            "Technical lead on a project to create a RESTful service that generates certificate of liability insurance and evidence of property documents",
            "Design and develop frontend enhancements for internal systems built with Vue.js and Vuetify frameworks",
            "Suggest and introduce Apache PDFBox as an open-source solution for generating and editing PDFs",
          ],
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
            "Advanced Business Communication Certificate",
          ],
        },
        {
          id: 3,
          company: "Clearwater Labs",
          title: "Software Engineer",
          dates: "September 2018 - May 2019",
          outcomes: [
            "One of five founding members of student-run software development company with a focus to make software that improves campus life",
            "Developed applications using Node.js, Express, React, and MongoDB",
            "Created a 'winter-rules' parking notification service that let students know what side of the street they should park on when the city of Eau Claire needed to plow the streets",
            "Built a messaging service and admin dashboard that consumed Twilio’s REST APIs for the University of Wisconsin - Eau Claire's fundraising foundation",
            "Leveraged Kanban boards and agile methodology along with GitHub for version control to complete work items while also studying as a full-time student",
          ],
        },
        {
          id: 4,
          company: "Travelers Insurance",
          title: "IT Intern, Business Insurance Infrastructure Architecture",
          dates: "June - August 2018",
          outcomes: [
            "Constructed and analyzed financial charts and graphs related to Travelers IT department's spending",
            "Explored new technologies that improved application scalability and reduced cost",
            "Competed in and won a summer-long company-wide (interns) innovation jam creating and pitching an idea for an internal onboarding app",
            "Planned and accomplished units of work using a Personal Kanban approach",
          ],
        },
        {
          id: 5,
          company: "Church Mutual Insurance Company, S.I.",
          title: "IT Intern, Java Developer",
          dates: "May - August 2017",
          outcomes: [
            "Developed a Spring Framework MVC application to streamline internal business processes",
            "Worked in an Agile environment as an active member of a Scrum Team",
            "Delivered an end-of-summer results presentation to senior leadership IT staff",
            "Communicated and presented completed bodies of work during bi-weekly sprint reviews",
          ],
        },
        {
          id: 6,
          company: "Ashley Furniture Industries, Inc.",
          title: "IT Intern, Distribution",
          dates: "May 2016 - January 2017",
          outcomes: [
            "Resolved database incidents that arose during the distribution process",
            "Performed new user setups and server promotes for the end-user distribution application",
            "Organized and submitted regular updates to the team's Sharepoint resource site",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-color {
  background-color: #000f08;
}
</style>
