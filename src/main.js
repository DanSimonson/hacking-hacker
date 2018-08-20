// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
/* Here we import our store from our newly defined index.js file */
import { store } from "./store/index.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store: store /* Here we ensure our Vue instance uses our store */,
  components: { App },
  template: "<App/>"
});
