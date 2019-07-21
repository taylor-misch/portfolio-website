<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <h1 id="home">Home</h1>
    <h1 id="about">About Me</h1>
    <p>
      Taylor is a software developer. He graduated from the University of
      Wisconsin - Eau Claire in 2019 with a degree in Computer Science.
      Throughout his college career he learned the fundementals of programming
      through his schoolwork, the inner-workings of business through his
      internships, and how to think entreneaurally during his time a an original
      member of the Clearwater Labs student run software development company
      startup during his senior year.
    </p>
    <p>
      This website features some his professional experinece, projects, and
      interests. Feel free to look around, explore his GitHub, or reach out to
      him on LinkedIn.
    </p>
    <h1 id="professional">Professional</h1>
    <h1 id="projects">Projects</h1>
    <h1 id="interests">Interests</h1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
