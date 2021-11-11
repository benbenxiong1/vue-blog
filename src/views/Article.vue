<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="4" :offset="2" style="position: relative">
      <div :span="4" class="box-article left-box" id="nav-left" ref="nav_left">
        <div
          v-for="anchor in titles"
          :key="anchor.title"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="box-article">
        <v-md-editor v-model="value" mode="preview" ref="preview"></v-md-editor>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Article",
  components: {},
  data() {
    return {
      value: "",
      titles: [],
      headHeight: "",
    };
  },
  watch: {
    value: function () {
      this.$nextTick(() => {
        this.changeView();
      });
    },
  },
  created() {
    const param = this.$route.query;
    this.getEdit(param.id);
  },
  mounted() {
    this.headHeight = document.getElementById('nav-left').offsetTop;
    //监听滚动条高度
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //点击左侧目录滚动到对应行
    handleAnchorClick(anchor) {
      const that = this;
      const { preview } = that.$refs;
      const { lineIndex } = anchor;
      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );
      if (heading) {
        heading.scrollIntoView({ behavior: "smooth" });
      }
    },
    //获取文章详情
    getEdit(id) {
      const that = this;
      that.$axios
        .post("/api/article/edit", {
          id: id,
        })
        .then((res) => {
          that.value = res.data.content;
        });
    },
    //获取页面markdown并解析成左侧目录
    changeView() {
      const anchors =
        this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      const titles = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );
      if (!titles.length) {
        this.titles = [];
        return;
      }
      const hTags = Array.from(
        new Set(titles.map((title) => title.tagName))
      ).sort();

      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    },
    handleScroll() {
      const scroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      const height = this.headHeight - scroll;
      if (height > 0) {
        this.$refs.nav_left.style.top = height + "px";
      }else {
        this.$refs.nav_left.style.top = 0;
      }
      console.log(height,this.headHeight)
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  text-align: left;
  .el-col {
    .left-box {
      width: 12%;
      position: fixed;
    }
    .box-article {
      background: #ffffff;
      border-radius: 0.5rem;
      padding: 20px;
    }
  }
}
</style>
