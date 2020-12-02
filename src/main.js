import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faInfoCircle,
  faBars,
  faAddressCard,
  faInfo,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faInfoCircle, faBars, faAddressCard, faInfo, faAngleRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
const requireComponent = require.context(
  // The relative path of the components folder
  './template/components',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\.vue$/
)
// console.log(requireComponent.keys());
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS -- END

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
