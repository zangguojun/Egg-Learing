module.exports = app => {
  return class UserController extends app.Controller {
    async fetch() {
      const { app, ctx } = this;
      const id = ctx.request.query.id;
      const user = app.cache?.get(id) || 110;
      ctx.body = ctx.helper.formatUser(user);
    }
    async info() {
      const { ctx } = this;
      ctx.body = {
        name: `hello ${ctx.params.id}`,
      };
    }
    async detail() {
      const { ctx } = this;
      ctx.body = {
        name: `user: ${ctx.params.id}, ${ctx.params.name}`,
      };
    }
  }
}
