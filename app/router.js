module.exports = app => {
  const gzip = app.middleware.gzip({ threshold: 1024 });
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user', gzip, controller.user.fetch);
  router.get('/user/:id', controller.user.info);
  router.get('/user/:id/:name', controller.user.detail);
  router.resources('posts', '/api/posts', controller.posts);
  router.get('/search', controller.search.index);
  router.get(/^package\/([\w-.]+\/[\d.]+)$/, controller.package.detail);
  router.post('/form', controller.form.post);
};