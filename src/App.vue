<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-1">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Interests />
    </v-main>
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
import Footer from "./components/layout/Footer";

export default {
  components: {
    Home,
    About,
    Experience,
    Projects,
    Interests,
    NavBar,
    Footer,
  },
  metaInfo: {
    title: "Taylor Misch",
    titleTemplate: "%s | Portfolio",
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

