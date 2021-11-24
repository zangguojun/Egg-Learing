module.exports = app => {
  app.once('server', server => {
    // websocket
  });
  app.on('error', (err, ctx) => {
    // report error
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
  // app.cache = new Cache();

  // 框架和插件加载的中间件会在应用层配置的中间件之前,框架默认中间件不能被应用层中间件覆盖，
  // 如果应用层有自定义同名中间件，在启动时会报错。
  // app.config.coreMiddleware.unshift('report');
};