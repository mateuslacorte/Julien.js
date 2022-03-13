module.exports = ((app) => {
  app.listen(process.env.APP_PORT, function () {
    console.log('Application is listening at http://%s:%s', process.env.APP_HOST, process.env.APP_PORT);
  });
})