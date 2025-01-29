import { createApp } from "vue";
import App from "./App.vue";
import router from "./adapters/router/index.js"; // Ensure the relative path is correct

createApp(App).use(router).mount("#app");
