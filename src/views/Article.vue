<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="4" :offset="2">
      <div></div>
    </el-col>
    <el-col :span="16">
      <v-md-editor v-model="value" mode="preview"></v-md-editor>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Article",
  components: {},
  data() {
    return {
      value: '```json\n' +
          '{\n' +
          '  "key": "value"\n' +
          '}\n' +
          '```',
    };
  },
  created() {
    const param = this.$route.query;
    console.log(param);
  },
};
</script>

<style scoped lang="scss">
.el-row{
  text-align: left;
}
</style>
