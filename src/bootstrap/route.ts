import {FileSystem} from '../utils/filesystem';
import {Express} from 'express';

export default ((app : Express) : Promise<void> => {
  const web : FileSystem = new FileSystem('route/web');
  const api : FileSystem = new FileSystem('route/api');
  return new Promise<void>((resolve) => {
    let api_routes = false
    let web_routes = false;
  
    web.dir((file : File) => {
      if(file.length){
        app.use(require(web.get() + '/' + file));
        web_routes = true;
      }
    });
  
    api.dir((file : File) => {
      if(file.length) {
        app.use(`/api/${process.env.API_VERSION}`, require(api.get() + '/' + file));
        api_routes = true;
      }
    });

    (function routes_loaded(api : boolean, web : boolean, resolve : Function) : void {
      if(api && web) {
        resolve();
      } else {
        setTimeout(routes_loaded, 1000);
      }
    })(api_routes, web_routes, resolve);
  });
});