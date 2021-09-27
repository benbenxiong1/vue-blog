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
      title: "文章&技术",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticleList"),
  },
  {
    path: "/article",
    name: "Article",
    meta: {
      title: "文章&技术-详情",
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Article"),
  },
  {
    path: "/article-add",
    name: "CreateArticle",
    meta: {
      title: "文章&技术-添加",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateArticle"),
  },
  {
    path: "/diary-list",
    name: "DiaryList",
    meta: {
      title: "随笔日记-列表",
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/DiaryList"),
  },
  {
    path: "/diary",
    name: "Diary",
    meta: {
      title: "随笔日记-详情",
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Diary"),
  },
  {
    path: "/message-board",
    name: "MessageBoard",
    meta: {
      title: "留言板",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MessageBoard"),
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      title: "个人简介",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Info"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//添加自定义网站title
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title + " | 笨笨小窝";
  }
});

export default router;
