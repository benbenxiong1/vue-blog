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
      <div class="grid-content bg-white1">
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
                  <span>{{ item.title }}</span>
                  <div class="content-box-info">
                    <el-icon :size="16">
                      <alarm-clock />
                    </el-icon>
                    <span>{{ item.created_at }}</span>
                    <el-icon :size="16">
                      <star />
                    </el-icon>
                    <span>{{ item.star }}</span>
                  </div>
                  <p>
                    {{ item.content }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="content-box-foot">
                  <div class="content-box-tag">
                    <el-tag
                      v-for="value in item.label"
                      :key="value.title"
                      type="warning"
                    >
                      {{ value.title }}
                    </el-tag>
                  </div>
                  <div class="content-box-tag-right">
                    <el-tag
                      type="info"
                      @click="darkClick(item.id)"
                      effect="dark"
                    >
                      阅读全文
                    </el-tag>
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
          :current-page="paginate.page"
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next"
          @current-change="currentChange"
          :total="paginate.total"
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
      paginate: {
        total:0,
        page:1,
      },
      data: [
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
      this.paginate.page = parseInt(page);
      this.getList(page);
    },
    currentChange(page) {
      this.paginate.page = page;
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: page,
        },
      });
      this.pageInfo(page);
    },
    darkClick: function (id) {
      this.$router.push({ path: "/article", query: { id: id } });
    },
    getList(page) {
      const that = this;
      that.$axios
        .post("/api/article/list", {
          page: page,
        })
        .then((res) => {
          that.paginate.page = res.data.current_page;
          that.paginate.total = res.data.total;
          that.data = res.data.data
          console.log(res)
        });
    },
  },
};
</script>

<style lang="scss">
.bg-white1 {
  margin: 20px 10px 20px 10px;
  .content-box-article {
    background: #ffffff;
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
          cursor: pointer;
        }
        p {
          cursor: pointer;
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
        .content-box-tag-right {
          cursor: pointer;
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
  .el-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
}
</style>
