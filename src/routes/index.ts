import authRouter from './authRouter';

module.exports = function (app, appVersion) {
  app.use(`/api/${appVersion}/auth`, authRouter);
}