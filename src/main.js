import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Meta from "vue-meta";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  Meta,
  render: h => h(App)
}).$mount("#app");
