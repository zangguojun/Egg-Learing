exports.keys = 'buchiyu';

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 10,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.robot = {
  ua: [
    /pre/i,
  ]
};

