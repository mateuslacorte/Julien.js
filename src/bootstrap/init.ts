import {Express} from 'express';
import {default as ErrorRoute} from './error_route';
import {default as Mail} from './mail';
import {default as Body} from './body';
import {default as Cors} from './cors';
import {default as Route} from './route';
import {default as Library} from './library';
import {default as Session} from './session';
import {default as Database} from './database';
import {default as Environment} from './environment';

export default (async () : Promise<Express> => {
  const app : Express = Library();
  Environment();
  Database();
  Body(app);
  Session(app);
  Cors(app);
  await Route(app);
  ErrorRoute(app);
  global.mail = Mail();
  return app;
});