<template>
  <el-container>
    <el-affix target="#app" :offset="0">
      <el-header>
        <Header></Header>
      </el-header>
    </el-affix>
    <el-main>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Page",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>