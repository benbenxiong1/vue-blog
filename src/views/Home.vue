<template>
  <div class="box-start" :style="styleChange">
    <div class="box-nav">
      <div class="nav-title nav-img">
        <el-image
          style="width: 40px; height: 40px"
          :src="logo"
          fit="contain"
        ></el-image>
        <span>benbenxiong</span>
      </div>
      <template v-for="(item, index) in nav" :key="index">
        <div class="nav-title">
          <span
            ><router-link :to="item.path">{{ item.title }}</router-link></span
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/benbenxiong.png";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      logo: logo,
      nav: [
        {
          title: "技术&文章",
          path: "/article-list",
        },
        {
          title: "时间轴",
          path: "/article-list",
        },
        {
          title: "留言板",
          path: "/message-board",
        },
        {
          title: "个人介绍",
          path: "/info",
        },
      ],
      styleChange: {
        height: "",
        width: "",
      },
    };
  },
  mounted() {
    const that = this;
    that.styleChange.width = window.innerWidth + "px"; // 高
    that.styleChange.height = window.innerHeight + "px"; // 宽
    // document.body.style.overflow = "hidden";
    // var mo = function (e) {
    //   e.preventDefault();
    // };
    // document.addEventListener("touchmove", mo, false); //禁止页面滑动
  },
};
</script>

<style lang="scss">
.box-start {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  a {
    text-decoration: none;
    color: #333333;
  }
  .box-nav {
    display: flex;
    justify-items: center;
    background: #ffffff;
    border-radius: 10px;
    opacity: 0.5;
    .nav-img {
      display: flex;
      justify-content: left;
      align-items: center;
    }
    .nav-title {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 20px 20px;
      cursor: pointer;
      span {
        margin: 10px;
      }
    }
  }
}
</style>
