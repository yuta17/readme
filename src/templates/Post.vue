<template>
  <Layout>
    <article class='post-content' v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang='scss' scoped>
.post-content {
  margin: 2rem 0;
}
</style>
