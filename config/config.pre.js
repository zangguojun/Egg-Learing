module.exports = {
  keys: 'buchiyu',

  news: {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  },

  // 添加 view 配置
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    }
  },

  csrf: false,
  // 框架自身中间件
  bodyParser: {
    jsonLimit: '10mb',
  },

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  middleware: [ 'robot', 'gzip', 'compress' ],

  robot: {
    enable: false,
    ua: [
      /buchiyu/i,
      /curl/i,
    ]
  },

  // 配置 gzip 中间件的配置
  gzip: {
    match(ctx) {
      // 只有 ios 设备才开启
      const reg = /iphone|ipad|ipod/i;
      return reg.test(ctx.get('user-agent'));
    },
    threshold: 1024, // 小于 1k 的响应体不压缩
  },

  compress: {
    enable: false,
    match: '/news',
    threshold: 2048,
  },
};

