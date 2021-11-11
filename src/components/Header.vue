<template>
  <div class="head-box" ref="head">
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
          <div class="nav-menu" v-if="bool">
            <template v-for="(item, index) in nav" :key="index">
              <div class="nav-title" @click="handleClick(index)">
                <span>{{ item.title }}</span>
              </div>
            </template>
            <div class="nav-title" @click="search(false)">
              <el-icon size="20">
                <search />
              </el-icon>
            </div>
          </div>
          <div class="nav-menu-search" v-if="!bool">
            <el-input
              v-model="input"
              placeholder="search"
              style="width: 20rem"
            />
            <div class="search-icon">
              <el-icon size="20">
                <search />
              </el-icon>
            </div>
            <div>
              <el-icon size="20" @click="search(true)">
                <close />
              </el-icon>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from "../assets/benbenxiong.png";
import { Search, Close } from "@element-plus/icons";
export default {
  name: "Header",
  components: {
    Search,
    Close,
  },
  data() {
    return {
      logo: logo,
      activeIndex: "0",
      bool: true,
      nav: [
        {
          title: "技术&文章",
          path: "/article-list",
        },
        {
          title: "时间轴",
          path: "/diary-list",
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
    search(bool) {
      this.bool = bool;
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
      cursor: pointer;
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
      cursor: pointer;
    }
    .nav-menu-search {
      width: 30rem;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      .el-input {
        width: 20rem;
        margin-right: 1rem;
      }
      .search-icon {
        width: 5rem;
      }
    }
  }
}
</style>
