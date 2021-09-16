<template>
  <!--轮播图-->
  <el-row :gutter="20">
    <el-col :span="20" :offset="2">
      <el-carousel
        :interval="5000"
        indicator-position="none"
        arrow="never"
        style="border-radius: 0.5rem; margin: 10px"
      >
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <el-image :src="item.url"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="16" :offset="2">
      <div class="grid-content bg-white">
        <div class="content-box">
          <div
            class="content-box-article"
            v-for="item in data"
            v-bind="item.id"
            :key="item.id"
          >
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="box-img">
                  <el-image :src="item.img"></el-image>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="content-box-content">
                  <span>我是一个标题{{ item.id }}</span>
                  <div class="content-box-info">
                    <el-icon :size="16">
                      <alarm-clock />
                    </el-icon>
                    <span>{{ item.time }}</span>
                    <el-icon :size="16">
                      <star />
                    </el-icon>
                    <span>{{ item.number }}</span>
                  </div>
                  <p>
                    通过阅读本教程，你将学到如 RESTFul 设计风格、PostMan
                    的使用、OAuth 流程，JWT 概念及使用 和 API
                    开发相关的进阶知识。不仅如此，本书还会对这些基础知识点进行延伸扩展，为你讲解一些在
                    API 开发中更为专业、实用的技能，如使用微信测试公众号调试
                    OAuth
                    流程、图片验证码等。这些知识将为你未来的编程开发奠定下坚实的基础。使你不论是在做自己的个人项目，或是构建一个伟大的商业产品时，都能得心应手。
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="content-box-foot">
                  <div class="content-box-tag">
                    <el-tag
                      v-for="value in item.tag"
                      :key="value.label"
                      :type="value.type"
                      effect="dark"
                    >
                      {{ value.label }}
                    </el-tag>
                  </div>
                  <div class="content-box-tag-right">
                    <el-tag type="info" effect="dark"> 阅读全文 </el-tag>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="article-page">
        <el-pagination
          :background="true"
          :current-page="page"
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next"
          @current-change="currentChange"
          :total="1000"
        >
        </el-pagination>
      </div>
    </el-col>
    <!--右边栏目-->
    <RightList />
  </el-row>
</template>

<script>
import { AlarmClock, Star } from "@element-plus/icons";
import RightList from "@/components/Right";
export default {
  name: "ArticleList",
  components: {
    // 或者以缩写的方式,
    AlarmClock,
    Star,
    RightList,
  },
  data() {
    return {
      activeIndex: "1",
      page: 1,
      data: [
        {
          id: 1,
          tag: [
            { type: "", label: "标签一" },
            { type: "success", label: "标签二" },
            { type: "info", label: "标签三" },
            { type: "danger", label: "标签四" },
            { type: "warning", label: "标签五" },
          ],
          img: "/1.jpg",
          time: "2021-09-08",
          number: 20,
        },
        {
          id: 2,
          tag: [
            { type: "", label: "标签一" },
            { type: "success", label: "标签二" },
            { type: "info", label: "标签三" },
            { type: "danger", label: "标签四" },
            { type: "warning", label: "标签五" },
          ],
          img: "/2.jpg",
          time: "2021-09-08",
          number: 20,
        },
        {
          id: 3,
          tag: [
            { type: "", label: "标签一" },
            { type: "success", label: "标签二" },
            { type: "info", label: "标签三" },
            { type: "danger", label: "标签四" },
            { type: "warning", label: "标签五" },
          ],
          img: "/3.jpg",
          time: "2021-09-08",
          number: 20,
        },
        {
          id: 4,
          tag: [
            { type: "", label: "标签一" },
            { type: "success", label: "标签二" },
            { type: "info", label: "标签三" },
            { type: "danger", label: "标签四" },
            { type: "warning", label: "标签五" },
          ],
          img: "/2.jpg",
          time: "2021-09-08",
          number: 20,
        },
      ],
      banner: [
        {
          url: "/1.jpg",
        },
        {
          url: "/2.jpg",
        },
        {
          url: "/3.jpg",
        },
      ],
      userInfo: {
        name: "benbenxiong",
        avatar: "/avatar.jpg",
        tag: [
          { type: "", label: "标签一" },
          { type: "success", label: "标签二" },
          { type: "info", label: "标签三" },
          { type: "danger", label: "标签四" },
          { type: "warning", label: "标签五" },
        ],
      },
    };
  },
  created() {
    this.pageInfo();
  },
  methods: {
    pageInfo(page) {
      if (!page) {
        page = this.$route.query.page ? this.$route.query.page : 1;
      }
      this.page = parseInt(page);
    },
    currentChange(page) {
      this.page = page;
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: page,
        },
      });
      this.pageInfo(page);
    },
  },
};
</script>

<style lang="scss">
.bg-white {
  margin: 20px 10px 20px 10px;
  .content-box-article {
    background: #ffffff;
    opacity: 0.9;
    margin: 10px 0;
    border-radius: 0.5rem;
    padding: 20px;
    .el-row {
      .box-img {
        border-radius: 0.5rem;
      }
      .content-box-content {
        text-align: left;
        span {
          font-size: 24px;
        }
        p {
          text-indent: 2em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          font-size: 16px;
          line-height: 30px;
        }
        .content-box-info {
          display: flex;
          align-items: center;
          margin-top: 10px;
          span {
            font-size: 16px;
            margin: 0 20px 0 5px;
          }
        }
      }
      .content-box-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .content-box-tag {
          text-align: left;
          .el-tag {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
.article-page {
  background: #ffffff;
  margin: 10px;
  border-radius: 0.5rem;
  padding: 20px;
  opacity: 0.9;
  .el-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
}
.user-right {
  margin: 20px 10px 20px 10px;
  padding: 0 0  0.5rem 0;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 0.5rem;
  .user-info-top {
    border-radius: 0.5rem 0.5rem 0 0;
    height: 5rem;
    width: 100%;
    opacity: 1;
    background-image: url("/1.jpg");
  }
  .user-info-content {
    img {
      width: 4rem;
      border-radius: 2rem;
      margin-top: -2rem;
    }
    .el-tag {
      margin: 0.2rem;
    }
  }
}
.tag-right {
  margin: 20px 10px 20px 10px;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 0.5rem;
}
</style>
