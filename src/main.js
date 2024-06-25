import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Create a Pinia instance
const pinia = createPinia();

// Use Quasar with options
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Use Pinia and Router
app.use(pinia);
app.use(router);

// Mount the app
app.mount("#app");
