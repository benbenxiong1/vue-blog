import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { service, serviceForm } from "./api/axios";
// import { ElMessage } from "element-plus";

import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

import Prism from "prismjs";
import Hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

Hljs.registerLanguage("javascript", javascript);

VueMarkdownEditor.use(githubTheme, {
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
  // .use(ElMessage)
  .use(store)
  .use(router)
  .use(VueMarkdownEditor)
  .mount("#app");
