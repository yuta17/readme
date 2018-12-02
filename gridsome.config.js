module.exports = {
  siteName: 'Hassan',
  siteUrl: 'https://hassansan.me',
  siteDescription: 'hassanの基本情報が書かれたサイト',
  icon: {
    favicon: 'src/images/hassan.png',
    touchicon: 'src/images/hassan.png'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
}
