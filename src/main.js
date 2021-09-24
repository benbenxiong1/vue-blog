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
import Hljs from "highlight.js";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  Hljs,
  // extend(md) {
  //   // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  //   // md.set(option).use(plugin);
  // },
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
