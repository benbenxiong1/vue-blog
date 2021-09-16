<template>
  <div class="head-box">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <div class="box-nav">
          <div class="nav-img" @click="logoClick()">
            <el-image
              style="width: 40px; height: 40px"
              :src="logo"
              fit="contain"
            ></el-image>
            <span>benbenxiong</span>
          </div>
          <div class="nav-menu">
            <template v-for="(item, index) in nav" :key="index">
              <div class="nav-title" @click="handleClick(index)">
                <span>{{ item.title }}</span>
              </div>
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from "../assets/benbenxiong.png";
export default {
  name: "Header",
  data() {
    return {
      logo: logo,
      activeIndex: "0",
      nav: [
        {
          title: "技术&文章",
          path: "/article-list",
        },
        {
          title: "随笔日志",
          path: "/diary-list",
        },
        {
          title: "留言板",
          path: "/message-board",
        },
        {
          title: "个人中心",
          path: "/article-list",
        },
      ],
    };
  },
  methods: {
    handleClick(key) {
      this.activeIndex = key;
      const that = this;
      that.$router.push({ path: that.nav[key].path });
    },
    logoClick() {
      this.$router.push({ path: "/" });
    },
  },
  created() {},
};
</script>

<style lang="scss">
.head-box {
  background: #ffffff;
  opacity: 0.9;
  .box-nav {
    display: flex;
    justify-content: space-between;
    .nav-img {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 15px 20px 15px 20px;
      span {
        margin: 10px;
      }
    }
    .nav-menu {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 15px 20px 15px 20px;
    }
    .nav-title {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0 0 0 50px;
    }

  }
}
</style>
