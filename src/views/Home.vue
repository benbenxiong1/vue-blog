<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="2">
      <div class="grid-content bg-white">
        <div class="content-head">
          <div class="content-head-item is_active"><span>最新</span></div>
          <div class="content-head-item"><span>周榜</span></div>
          <div class="content-head-item"><span>月榜</span></div>
        </div>
        <div class="content-box">
          <div class="box" v-for="item in data" v-bind="item.id" key="item.id">
            <div class="box-head">
              <div class="title-label">
                <el-tag :type="item.tag">随笔</el-tag>
                <span>我是一个标题{{ item.id }}</span>
              </div>
              <div>
                <span>笨笨熊</span>
                <span>2021-08-23 15:00:24</span>
              </div>
            </div>
            <div class="box-cont">
              <p>
                通过阅读本教程，你将学到如 RESTFul 设计风格、PostMan
                的使用、OAuth 流程，JWT 概念及使用 和 API
                开发相关的进阶知识。不仅如此，本书还会对这些基础知识点进行延伸扩展，为你讲解一些在
                API 开发中更为专业、实用的技能，如使用微信测试公众号调试 OAuth
                流程、图片验证码等。这些知识将为你未来的编程开发奠定下坚实的基础。使你不论是在做自己的个人项目，或是构建一个伟大的商业产品时，都能得心应手。
              </p>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-white"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      activeIndex: "1",
      data: [{ id: 1, tag:"success" }, { id: 2, tag:"info" }, { id: 3 , tag:"warning"}, { id: 4, tag:"warning" }, { id: 5,tag:"danger" }, { id: 6,tag:"info" }],
    };
  },
};
</script>

<style lang="scss">
.bg-white {
  background: #ffffff;
  .content-head {
    padding: 0 0 10px 0;
    display: flex;
    border-bottom: 1px solid #cccccc;
    .content-head-item {
      margin: 5px 20px 0 20px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      span {
        padding: 5px;
        border-radius: 10px;
      }
    }
    .is_active {
      span {
        background: #cccccc;
      }
    }
  }
  .content-box {
    margin: 10px;
    .box {
      .el-main {
        line-height: 20px;
      }
      .box-head {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        span {
          font-size: 14px;
          font-weight: 700;
          margin: 0 10px;
        }
      }
      .box-cont {
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        text-align: left;
        line-height: 24px;
      }
    }
  }
}
</style>
