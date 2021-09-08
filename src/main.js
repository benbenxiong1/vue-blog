import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { service, serviceForm } from "./api/axios";

import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import "element-plus/lib/theme-chalk/index.css";
import "mavon-editor/dist/css/index.css";

import Prism from "prismjs";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

app.config.globalProperties.$axios = service;
app.config.globalProperties.$axiosForm = serviceForm;

app
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueMarkdownEditor)
  .mount("#app");
