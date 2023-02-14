---
id: algolia
title: algolia 接入文档网站
---

## 1. algolia 介绍

> [algolia 官网](https://www.algolia.com/developers/?utm_content=powered_by&utm_source=zxuqian.cn&utm_medium=referral&utm_campaign=docsearch)

`algolia` 是一家法国巴黎的初创公司，他们的主要产品是提供搜索即服务的 SaaS，对于 `algolia` 提供的搜索服务，简单说，就是开发者可以将数据以 JSON 形式传到他们的服务器上。之后，用户可以进行在线的搜索服务。
![用户图片](https://www.algolia.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fhilnmyskv%2Fimage%2Fupload%2Fv1634726007%2FAlgolia_com_Website_assets%2Fimages%2Fdevelopers%2Ffrontend-experiences-illu.png&w=2048&q=75)

## 2. algolia 接入方式

### 2.1 创建索引

## 3. docusaurus 接入 algolia

`docusaurus`集成了`algolia`,只需要少量配置即可生成**文档搜索**功能。

### 3.1 docusaurus.config.js

```javascript
module.exports = {
  // ...
  themeConfig: {
    // ...
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
  },
}
```

### 3.2 接入效果

头部搜索框

展开搜索框

## 4. 其他待优化的地方

> algolia github [https://github.com/algolia/algoliasearch-client-go](https://github.com/algolia/algoliasearch-client-go)
