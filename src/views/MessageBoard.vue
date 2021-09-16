<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="2">
      <div></div>
      <div class="message-board-content">
        <div
          class="infinite-list"
          v-infinite-scroll="load"
          :infinite-scroll-disabled="disabled"
        >
          <div
            v-for="(item, index) in count"
            :key="index"
            class="infinite-list-item"
          >
            <el-divider></el-divider>
            <div class="message-board">
              <img src="/avatar.jpg" alt="" />
              <div class="message-board-info">
                <div class="message-board-info-tile">
                  <span class="span-name">benbenxiong</span>
                  <span class="span-time">2021-06-02</span>
                </div>
                <p>
                  想默默問一下，大佬你的WP主題怎麼好像跟開源的那個不太一樣@@(你博客的必較好看呀XXD
                </p>
              </div>
            </div>
          </div>
          <div
            class="loading"
            v-show="!loading"
            v-loading="!loading"
            style="height: 3rem; width: 100%"
          ></div>
        </div>
      </div>
    </el-col>
    <right-list></right-list>
  </el-row>
</template>

<script>
import RightList from "@/components/Right";
export default {
  name: "MessageBoard",
  components: {
    RightList,
  },
  data() {
    return {
      count: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ],
      disabled: false,
      i: 0,
      loading: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    load() {
      const that = this;
      that.loading = false;
      clearTimeout(that.timer);
      that.timer = setTimeout(() => {
        that.loading = true;
        that.i++;
        that.count.push({ id: 5 });
        if (that.i >= 10) {
          that.disabled = true;
        }
        console.log(1);
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.message-board-content {
  background: #ffffff;
  opacity: 0.9;
  height: 100%;
  margin: 20px 10px 20px 10px;
  padding: 2rem 2rem 0 2rem;
  border-radius: 0.5rem;
  .infinite-list {
    .infinite-list-item {
      height: 100%;
      .message-board{
        display: flex;
        justify-content: flex-start;
      img {
        border-radius: 0.1rem;
        width: 3rem;
        height: 3rem;
      }



      .message-board-info {
        .message-board-info-tile {
          display: flex;
          font-size: 14px;
          font-weight: 400;
          align-items: center;
          justify-items: center;
          .span-name {
            color: #0083ff;
            margin-left: 0.5rem;
          }
          .span-time {
            margin-left: 0.5rem;
          }
        }
        p {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
          font-size: 18px;
        }
      }
      }
    }
  }
}
</style>
