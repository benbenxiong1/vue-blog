<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="20" :offset="2">
      <el-form ref="form" :model="form" label-width="120px">
        <div class="form-item">
          <span>新建博文</span>
        </div>
        <div class="form-item">
          <el-input v-model="form.title" placeholder="请输入博文标题" />
        </div>
        <div class="form-item">
          <v-md-editor v-model="form.content" height="600px"></v-md-editor>
        </div>
        <div class="form-item form-item-btn">
          <el-button type="success" @click="btnClick('submit')">发布</el-button>
          <el-button type="info" @click="btnClick('draft')">保存草稿</el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CreateArticle",
  data() {
    return {
      form: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    btnClick(type) {
      if (type === "submit") {
        console.log(this.form);
      }
      if (type === "draft") {
        console.log(this.form);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  text-align: left;
  .el-col {
    padding: 20px 0;
    background: #ffffff;
    border-radius: 0.5rem;
    .form-item {
      margin-top: 20px;
      span {
        display: block;
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
      }
    }
    .form-item-btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
