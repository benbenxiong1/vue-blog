import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./api/axios";

import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(ElementPlus).use(store).use(router).use(axios).mount("#app");
