import * as body from 'body-parser';
import {Express} from 'express';

export default ((app : Express) => {
  app.use(body.json());
  app.use(body.urlencoded({extended: true}));
});
