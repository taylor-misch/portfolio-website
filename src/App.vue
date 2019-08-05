<template>
  <v-app>
    <NavBar />
    <v-content class="grey lighten-1">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

export default {
  components: {
    Home,
    About,
    Experience,
    Projects,
    Interests,
    NavBar,
    Contact,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style>
</style>

