<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="2">
      <div class="message-board-head">
        <div class="message-board-img">
          <img src="/1.jpg" alt="" />
        </div>
        <div class="message-board-desc">
          <span class="span-title">留言板</span>
          <span class="span-desc">
            有问题和想说的都可以在这里面评论。(^_^)ノ但请遵守本站
            <a href="#">评论规则</a>
          </span>
        </div>
      </div>
      <div class="message-board-content">
        <div class="box-reply">
          <el-form ref="form" :model="form" label-width="120px">
            <div class="reply-editor-header">
              <input type="text" :model="form.name" placeholder="昵称" />
              <input type="text" :model="form.email" placeholder="邮箱" />
              <input type="text" :model="form.url" placeholder="网址" />
            </div>
            <div class="reply-editor-comment">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="reply-editor-bottom">
              <el-button type="primary">发送评论</el-button>
            </div>
          </el-form>
        </div>
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
                  <span class="span-name">benbenxiong-{{ item.id }}</span>
                  <span class="span-time">2021-06-02</span>
                </div>
                <p>
                  想默默問一下，大佬你的WP主題怎麼好像跟開源的那個不太一樣@@(你博客的必較好看呀XXD阿萨大大
                </p>
                <div class="message-board-reply">
                  <span>回复</span>
                </div>
                <div class="message-board-child">
                  <div class="message-board">
                    <img src="/avatar.jpg" alt="" />
                    <div class="message-board-info">
                      <div class="message-board-info-tile">
                        <span class="span-name">benbenxiong</span>
                        <span class="span-time">2021-06-02</span>
                      </div>
                      <p>
                        想默默問一下，大佬你的WP主題怎麼好像跟開源的那個不太一樣@@(你博客的必較好看呀XXD阿萨大大
                      </p>
                      <div class="message-board-reply">
                        <span>回复</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="loadings" v-if="loadings">拼命加载中...</div>
          <div class="loadings" v-if="disabled">没有了更多了...</div>
        </div>
      </div>
    </el-col>
    <right-list></right-list>
  </el-row>
</template>

<script>
import RightList from "@/components/Right";
import { ElInfiniteScroll, ElLoading } from "element-plus";
export default {
  name: "MessageBoard",
  directives: {
    "infinite-scroll": ElInfiniteScroll,
    loading: ElLoading,
  },
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
      loadings: false,
      form: {
        name: "",
        email: "",
        url: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    load() {
      const that = this;
      that.loadings = true;
      clearTimeout(that.timer);
      that.timer = setTimeout(() => {
        that.loadings = false;
        that.i++;
        that.count.push({ id: 5 });
        if (that.i >= 10) {
          that.disabled = true;
        }
        console.log(1);
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
.message-board-head {
  margin: 20px 10px 20px 10px;
  background: #ffffff;
  border-radius: 0.5rem;
  .message-board-img {
    img {
      width: 100%;
      height: 20rem;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
  .message-board-desc {
    .span-title {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
    }
    .span-desc {
      display: block;
      line-height: 100px;
      a {
        color: #5755d9;
        text-decoration: none;
      }
    }
  }
}
.message-board-content {
  text-align: left;
  background: #ffffff;
  height: auto;
  margin: 20px 10px 20px 10px;
  padding: 2rem 2rem 0 2rem;
  border-radius: 0.5rem;
  .box-reply {
    border: #cccccc 1px solid;
    border-radius: 5px;
    padding: 20px;
    .reply-editor-header {
      display: flex;
      input {
        font-size: 1rem;
        border: none;
        outline: none;
        height: 1rem;
        width: 30%;
      }
    }
    .reply-editor-comment {
      margin-top: 1rem;
      textarea {
        font-size: 1rem;
        border: none;
        outline: none;
        height: 6rem;
        width: 100%;
        resize: none;
      }
    }
    .reply-editor-bottom {
      display: flex;
      justify-content: flex-end;
    }
  }
  .infinite-list {
    .infinite-list-item {
      height: 100%;
      .message-board {
        display: flex;
        justify-content: flex-start;
        img {
          border-radius: 0.1rem;
          width: 3rem;
          height: 3rem;
        }

        .message-board-info {
          margin-left: 1rem;
          .message-board-info-tile {
            display: flex;
            font-size: 0.8rem;
            font-weight: 400;
            align-items: center;
            justify-items: center;
            .span-name {
              color: #0083ff;
            }
            .span-time {
              margin-left: 0.5rem;
              color: #757e91;
            }
          }
          p {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 1rem;
          }
        }
        .message-board-reply {
          font-size: 0.8rem;
          color: #757e91;
          cursor: pointer;
        }
      }
      .message-board-child {
        margin-top: 1rem;
      }
    }
    .loadings {
      height: 2rem;
      width: 100%;
      text-align: center;
      line-height: 2rem;
      color: #cccccc;
    }
  }
}
</style>
