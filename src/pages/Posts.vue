<template>
  <Layout>
    <article>
      <div>
        <h2>記事一覧</h2>
        <div v-for="item in $page.allPost.edges">
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query posts {
  allPost{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>
