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
              :timestamp="item.created_at"
              placement="top"
              @click="darkClick(item.id)"
            >
              <el-card>
                <h4 v-if="!item.bool">{{ item.title }}</h4>
                <p>{{ item.created_at }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
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
      paginate: {
        total:0,
        page:1,
      },
      activities: [],
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
      this.getList(page)
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
    getList(page) {
      const that = this;
      that.$axios
        .post("/api/article/list", {
          page: page,
        })
        .then((res) => {
          that.paginate.page = res.data.current_page;
          that.paginate.total = res.data.total;
          that.activities = res.data.data;
        });
    },
    darkClick: function (id) {
      this.$router.push({ path: "/article", query: { id: id } });
    },
  },
};
</script>

<style lang="scss">
.bg-white {
  margin: 20px 10px 20px 10px;
  background: #ffffff;
  text-align: left;
  padding: 2rem 2rem 2rem 0;
  border-radius: 0.5rem;
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
