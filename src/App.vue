<template>
  <v-app>
    <NavBar />
    <v-content>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Interests />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";

export default {
  name: "App",
  components: {
    Home,
    About,
    Experience,
    Projects,
    Interests,
    NavBar
  },
  data: () => ({
    //
  })
};
</script>
