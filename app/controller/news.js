const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    const someList = await ctx.service.some.list();
    console.log('🚀 ~ NewsController ~ list ~ someList', someList)
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;