/*
Import the Express types
*/
import express, { Request, Response, NextFunction } from 'express';

/*
  Import the JWT library
*/
import * as jwt from 'jsonwebtoken';

/*
Export the AccountMiddleware class
*/
export class AccountMiddleware {
    static authenticate(req: Request, res: Response, next: NextFunction) {
        let credentials = req.header('x-auth-token') || null;
        try {
            if(!!credentials) {
                jwt.verify(credentials!, process.env.USER_JWT_SECRET);
                next();
            } else {
                throw new Error('Session token was null, please provide a valid Account token on the API call.')
            }
        } catch {
            res.status(401);
            res.json({
                'status': 401,
                'response': {
                  'error': 'invalid account session.'
                }
            });
        }
    }
}