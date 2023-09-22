import {Express, Request} from 'express';
import cors from 'cors';

export default ((app: Express) : void => {
  app.use(cors<Request>());
  app.options(`/api/${process.env.API_VERSION}`, cors<Request>());
});