<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="16" :offset="2">
      <div class="grid-content bg-white">
        <div class="content-box">
          <el-timeline>
            <el-timeline-item
              v-for="(item, index) in activities"
              :key="index"
              :timestamp="item.timestamp"
              placement="top"
            >
              <el-card>
                <h4 v-if="!item.bool">{{ item.content }}</h4>
                <p>{{ item.timestamp }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
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
    <right-list />
  </el-row>
</template>

<script>
import RightList from "@/components/Right";
export default {
  name: "DiaryList",
  components: {
    // 或者以缩写的方式,
    RightList,
  },
  data() {
    return {
      page: 1,
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          bool: true,
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "支持空心点",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
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
  background: #ffffff;
  opacity: 0.9;
  text-align: left;
  padding: 2rem 2rem 2rem 0;
  border-radius: 0.5rem;
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
</style>
