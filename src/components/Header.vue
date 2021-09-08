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
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffffff"
        text-color="#000000"
        active-text-color="#d75354"
      >
        <template v-for="(item, index) in data" :key="item.id">
          <el-menu-item :index="index">{{ item.title }}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <el-menu
          default-active="10"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelectClick"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#ffd04b"
        >
          <template v-if="bool">
            <el-menu-item index="">消息</el-menu-item>
            <el-submenu index="">
              <template #title>
                <el-avatar size="small" :src="userInfo.avatar"></el-avatar>
                {{ userInfo.nickname }}
              </template>
              <el-menu-item index="info">个人中心</el-menu-item>
              <el-menu-item index="logout" @click="logoutClick"
                >退出</el-menu-item
              >
            </el-submenu>
          </template>

          <template v-if="!bool">
            <el-button type="success" @click="dialogFormVisible = true"
              >登录</el-button
            >
            <el-button type="danger">注册</el-button>
          </template>
        </el-menu>
      </div>
    </el-col>
  </el-row>

  <el-dialog title="登录" v-model="dialogFormVisible" width="500px">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginClick">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import logo from "../assets/benbenxiong.png";
export default {
  name: "Header",
  data() {
    return {
      logo: logo,
      activeIndex: "0",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl: logo,
      bool: false,
      dialogFormVisible: false,
      userInfo: {},
      form: {
        name: "",
        password: "",
      },
      formLabelWidth: "60px",
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
    handleSelect(key) {
      this.activeIndex = key;
      const that = this;
      that.$router.push({ name: that.data[key].router });
    },
    //登录
    loginClick() {
      const that = this;
      if (!that.form.name.length) {
        that.$message.error("用户名不能为空");
        return "";
      }
      if (!that.form.password.length) {
        that.$message.error("密码不能为空");
        return "";
      }
      that.$axios.post("/api/login", that.form).then((res) => {
        if (res.code === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data.info));
          that.userInfo = res.data.info;
          that.bool = true;
          that.$message({
            message: "登录成功",
            type: "success",
          });
          that.dialogFormVisible = false;
        } else {
          that.$message.error(res.message);
        }
      });
    },
    //退出
    handleSelectClick(key) {
      if (key === "logout") {
        localStorage.setItem("token", "");
        localStorage.setItem("userInfo", "");
        this.$router.go(0);
      }
      if (key === "info") {
        this.$router.push({ name: "Info" });
      }
    },
  },
  created() {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    this.bool = !!(token && userInfo);
    if (userInfo.length) {
      this.userInfo = JSON.parse(userInfo);
    }
  },
};
</script>

<style lang="scss"></style>
