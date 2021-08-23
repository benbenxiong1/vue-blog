<template>
  <el-row :gutter="20">
    <el-col :span="4" :offset="2">
      <el-menu>
        <el-menu-item index="1">
          <el-image
            style="width: 40px; height: 40px"
            :src="logo"
            fit="contain"
          ></el-image>
          Benbenxiong
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12">
      <el-menu
        default-active="0"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffffff"
        text-color="#000000"
        active-text-color="#d75354"
      >
        <template v-for="(item,index) in data" :key="item.id">
          <el-menu-item :index="index">{{ item.title }}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="" disabled>消息</el-menu-item>
          <el-submenu index="">
            <template #title>
              <el-avatar size="small" :src="circleUrl"></el-avatar>
              笨笨熊</template
            >
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
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
      activeIndex: "1",
      activeIndex2: "1",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl: logo,
      //<el-menu-item index="1">首页</el-menu-item>
      // <el-menu-item index="2">文章</el-menu-item>
      // <el-menu-item index="3">归档</el-menu-item>
      // <el-menu-item index="4">项目</el-menu-item>
      // <el-menu-item index="5">历程</el-menu-item>
      // <el-menu-item index="6">关于</el-menu-item>
      data: [
        {
          id: 1,
          title: "首页",
          router: "Home",
        },
        {
          id: 2,
          title: "文章",
          router: "About",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      const that = this;
      console.log(that.data[key].router);
      that.$router.push({ name: that.data[key].router });
    },
  },
};
</script>

<style lang="scss"></style>
