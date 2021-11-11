<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="15" :offset="1" >
      <div style="width: 100%">
        <img src="http://r16fgewve.hn-bkt.clouddn.com/uploads/image_aa2fa60d648bd39f250cef99507a1705.jpg"  style="width: 100%" alt="">
      </div>
    </el-col>
    <el-col :span="5" >
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    }
  },
}
</script>

<style scoped>

</style>