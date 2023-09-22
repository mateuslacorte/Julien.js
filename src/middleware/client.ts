/*
Import the Express types
*/
import {Request, Response, NextFunction} from 'express';

/*
Import the client service
*/
import { ClientService } from '../service/client';

/*
Import the ObjectId type
*/
import { ObjectId } from 'bson';

/*
Export the ClientController class
*/
export class ClientMiddleware {
    static authenticate(req : Request, res : Response, next : NextFunction) {
        let credentials = req.headers.authorization || null;
        if (credentials) {
            Buffer.from(credentials, "base64").toString('utf-8').split(':');
            let client = {
                client_id: new ObjectId(credentials[0]!),
                app_secret: new ObjectId(credentials[1]!)
            }
            let authorized : Promise<boolean> = new ClientService(client).signin();
            authorized.then(r=>next())
        } else {
            res.status(403);
            res.json({
                "status": 401,
                "message": 'Unauthorized!'
            });
        }
    }
}