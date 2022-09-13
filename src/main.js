import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//import { library } from '@fortawesome/fontawesome-svg-core'
/*import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
/*import { faStar, faUndo, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'*/

/* add icons to the library */
/*library.add(faStar, faStarRegular, faUndo, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false*/

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

