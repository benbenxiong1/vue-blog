<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="20" :offset="2">
      <el-form ref="form" :model="form" label-width="120px">
        <div class="form-item">
          <span class="title">新建博文</span>
        </div>
        <div class="form-item">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-upload
                class="div-uploader"
                action="/api/public/img"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                name="img"
              >
                <img v-if="form.img" :src="form.img" class="avatar" />
                <div v-else class="uploader-icon">
                  <i class="el-icon-plus"></i>
                  <span class="uploader-span">请上传封面图片</span>
                </div>
              </el-upload>
            </el-col>
            <el-col :span="18">
              <el-input v-model="form.title" placeholder="请输入博文标题" />
              <el-select v-model="form.label" multiple placeholder="请选择标签">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
              <el-input v-model="form.desc" placeholder="暂时不知道放啥" />
            </el-col>
          </el-row>
        </div>
        <div class="form-item">
          <v-md-editor :disabled-menus="[]" @upload-image="handleUploadImage" v-model="form.content" height="600px"></v-md-editor>
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
        label: "",
        img: "",
        desc: ""
      },
      options: [],
    };
  },
  created() {
    this.getLabel();
  },
  methods: {
    getLabel() {
      const that = this;
      that.$axios.post("/api/article/label").then((res) => {
        if (res.code === 200) {
          that.options = res.data;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      this.form.img = res.data.path;
      console.log(file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleUploadImage(event, insertImage, files) {
      const that = this
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);
      let formdata = new FormData()
      formdata.append('img', files)
      that.$axios.servgiceForm.post("/api/public/img", formdata).then((res) => {
        if (res.code === 200) {
          that.$message.success("操作成功");
          // 此处只做示例
          insertImage({
            url:res.data.path,
            desc:"",
            width: 'auto',
            height: 'auto',
          });
        } else {
          that.$message.success(res.msg);
        }
      });


    },
    btnClick(type) {
      const that = this;
      that.form.type = type === "submit" ? 0 : 1;
      const loadingInstance = that.$loading({
        fullscreen: true,
        text: "Loading",
        background: "rgba(255, 255, 255, 0.5)",
      });
      that.$axios.post("/api/article/add", that.form).then((res) => {
        loadingInstance.close();
        if (res.code === 200) {
          that.$message.success("操作成功");
          that.$router.push({ path: "/article-list" });
        } else {
          that.$message.success(res.msg);
        }
      });
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
      .el-select {
        width: 100%;
      }
      .title {
        display: block;
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
      }
      .el-row {
        .el-col {
          .div-uploader {
            width: 100%;
            text-align: center;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            &:hover {
              border-color: #409eff;
            }
            .el-upload {
              .uploader-icon {
                display: flex;
                font-size: 28px;
                color: #8c939d;
                width: 100%;
                height: 200px;
                flex-direction: column;
                align-content: space-around;
                justify-content: center;
                align-items: center;
                .uploader-span {
                  font-size: 1rem;
                  font-weight: 0;
                }
              }
              .avatar {
                width: 100%;
                height: 200px;
                display: block;
                border-radius: 6px;
              }
            }
          }
        }
      }
    }
    .form-item-btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
