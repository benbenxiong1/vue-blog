<template>
  <div class="md_box">
    <v-md-editor v-model="text" height="600px"></v-md-editor>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
.md_box {
  text-align: left;
}
</style>
