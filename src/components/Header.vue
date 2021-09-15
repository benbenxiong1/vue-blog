<template>
  <el-row :gutter="20">
    <el-col :span="20" :offset="2">
      <div class="box-nav">
        <div class="nav-title nav-img">
          <el-image
            style="width: 40px; height: 40px"
            :src="logo"
            fit="contain"
          ></el-image>
          <span>Benbenxiong</span>
        </div>
        <template v-for="(item, index) in nav" :key="index">
          <div class="nav-title" @click="handleClick(index)">
            <span>{{ item.title }}</span>
          </div>
        </template>
      </div>
    </el-col>
  </el-row>
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
          title: "首页",
          path: "/",
        },
        {
          title: "技术&文章",
          path: "/article-list",
        },
        {
          title: "随笔日志",
          path: "/article-list",
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
  },
  created() {},
};
</script>

<style lang="scss">
.box-nav {
  display: flex;
  justify-items: center;
  background: #cccccc;
  border-radius: 10px;
  opacity: 0.8;
  .nav-img {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .nav-title {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 20px 50px;
    span {
      margin: 5px;
    }
  }
}
</style>
