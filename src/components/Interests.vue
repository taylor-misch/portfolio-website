<template>
  <Module id="interests" title="Interests" class="grey darken-3">
    <div class="interest">
      <h3>Hackathons</h3>
      <ul>
        <li>MadHacks 2017 & 2018</li>
        <li>MinneHacks 2018 & 2019</li>
        <li>HuskieHacks 2017</li>
      </ul>
    </div>

    <div class="interest">
      <h3>Software Development</h3>
      <ul>
        <li>Vue.js</li>
        <li>React.js</li>
        <li>Unity Game Developement</li>
      </ul>
    </div>

    <div class="interest">
      <h3>Music</h3>
      <ul>
        <li>Piano</li>
        <li>Guitar</li>
      </ul>
    </div>
  </Module>
</template>

<script>
import Module from "@/components/layout/Module";
export default {
  components: {
    Module
  }
};
</script>

<style scoped>
.interest {
  color: #fff;
}
</style>
