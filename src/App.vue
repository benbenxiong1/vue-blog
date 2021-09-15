<template>
  <div class="common-layout" id="box">
    <el-container>
      <el-header v-if="!$route.meta.isHeard">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer v-if="!$route.meta.isFooter">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#box {
  width: 100%;
  height: 100%;
  background-image: url("./assets/backgroun.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: 0.5;
  background-attachment: fixed;
  padding: 0;
  margin: 0;
  .el-main {
    padding: 0;
    margin: 30px 10px;
  }
}
</style>
