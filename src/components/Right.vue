<template>
  <!--右边栏目-->
  <el-col :span="4">
    <div class="grid-content user-right">
      <div class="user-info-top"></div>
      <div class="user-info-content">
        <img :src="userInfo.avatar" alt="" />
        <div>
          <span>{{ userInfo.name }}</span>
          <p>
            <el-tag
              v-for="value in userInfo.tag"
              :key="value.label"
              :type="value.type"
              effect="dark"
            >
              {{ value.label }}
            </el-tag>
          </p>
        </div>
      </div>
    </div>
    <div class="tag-right">
      <span>标签</span>
      <p>
        <el-tag
          v-for="value in userInfo.tag"
          :key="value.label"
          :type="value.type"
          effect="dark"
        >
          {{ value.label }}
        </el-tag>
      </p>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "RightList",
  components: {},
  data() {
    return {
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
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.user-right {
  margin: 20px 10px 20px 10px;
  padding: 0 0 0.5rem 0;
  background: #ffffff;
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
  border-radius: 0.5rem;
}
</style>
