import {Express, Request, Response} from 'express';
import {View} from '../utils/view';
import {parse as url} from 'url';

export default ((app : Express) => {
    app.use((req : Request, res : Response) => {
        if(url(req.originalUrl).pathname?.includes(`/api`)) {
          res.status(404);
          res.json({
            status: 404,
            message: 'Not Found'
          });
        } else {
          let view : View = new View('web', '404');
          res.status(404);
          res.send(view.parse({
            app: {
              email: process.env.MAIL_USER
            }
          }));
        }
    });
});