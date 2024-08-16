import Vue from "vue";
import Home from "./components/Home.vue";
import vuetify from "@/plugins/vuetify";
import router from "./router/index";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(Home),
}).$mount("#app");
