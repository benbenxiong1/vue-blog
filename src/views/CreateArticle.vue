<template>
  <div>
    <v-md-editor v-model="text" height="600px"></v-md-editor>
  </div>
</template>

<script>
export default {
  name: "CreateArticle",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style scoped>

</style>