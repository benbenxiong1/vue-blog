import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
      isHeard: true,
      isFooter: true,
    },
  },
  {
    path: "/article-list",
    name: "ArticleList",
    meta: {
      title: "文章&技术 | 笨笨小窝",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticleList"),
  },
  {
    path: "/diary-list",
    name: "DiaryList",
    meta: {
      title: "随笔日记 | 笨笨小窝",
    },
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Diary"),
  },
  {
    path: "/message-board",
    name: "MessageBoard",
    meta: {
      title: "留言板 | 笨笨小窝",
    },
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/MessageBoard"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//添加自定义网站title
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
