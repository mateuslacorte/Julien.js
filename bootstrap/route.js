module.exports = ((app) => {
  /*
    Import the File System utility
  */
  const FileSystem = require('../utils/filesystem');
  
  /*
    Instantiate the FileSystem class to route/web
  */
  const web = new FileSystem('../route/web');
  
  /*
    Instantiate the FileSystem class to route/api
  */
  const api = new FileSystem('../route/api');
  
  /*
    Load route/web routes
  */
  web.dir((file) => {
    app.use(require(web.get() + "/" + file));
  });

  /*
    Load route/api routes
  */
  api.dir((file) => {
    app.use(`/api/${process.env.API_VERSION}`, require(api.get() + "/" + file));
  });
});

//