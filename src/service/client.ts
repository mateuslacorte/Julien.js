/*
    Import the client model
*/
import { default as Client } from '../model/client';

/*
  Import the Mongoose library
*/
import { Document } from 'mongoose';

/*
  Import the Time utility
*/
import { Time } from '../utils/time';

/*
  Import the ObjectId type from Mongoose library
*/
import { ObjectId } from 'bson';

/*
  Export the Client class
*/
export class ClientService {
  client: any;
  constructor(client: any = null) {
    /*
      Set the client as this.client
    */
    this.client = client;
  }

  /*
    Return an item from User by given id
  */
  signin(): Promise<boolean> {
    return new Promise((res: any) => {
      let client : any = this.client
      Client.findOne(
        {
          'client_id': client.client_id,
          'secret': client.app_secret
        },
        (err: any, result: any) => {
          if (err) {
            console.error(
              `${Time.now()} - client get error: `
              +
              err
            );
            if (err instanceof TypeError) {
              res({
                'status': 400,
                'response': {
                  'error': 'client get error.'
                }
              });
            } else {
              res({
                'status': 500,
                'response': {
                  'error': 'client get error.'
                }
              });
            }
          }
          console.log("app login log: "+result.toString())
          if (result) {
            return true;
          } else {
            return false;
          }
        }
      );
    });
  }

  /*
    Return an item from Client by given id
  */
  getById(id: string): Promise<unknown> {
    return new Promise((res: any) => {
      Client.findOne(
        {
          '_id': new ObjectId(id)
        },
        (err: any, result: any) => {
          if (err) {
            console.error(
              `${Time.now()} - client get error: `
              +
              err
            );
            if (err instanceof TypeError) {
              res({
                'status': 400,
                'response': {
                  'error': 'client get error.'
                }
              });
            } else {
              res({
                'status': 500,
                'response': {
                  'error': 'client get error.'
                }
              });
            }
          }
          res({
            'status': 200,
            'response': result
          });
        }
      );
    });
  }

  /*
    Create an item from Client by the client passed on the constructor
  */
  create(): Promise<unknown> {
    let client: Document = new Client(this.client);
    return new Promise((res: any) => {
      client.save((err: any) => {
        if (err) {
          if (err.code === 11000) {
            res({
              'status': 409,
              'response': {
                'error': 'client already exists.'
              }
            });
          }
          console.error(
            `${Time.now()} - client creation error: `
            +
            err
          );
          if (err instanceof TypeError) {
            res({
              'status': 400,
              'response': {
                'error': 'client creation error.'
              }
            });
          } else {
            res({
              'status': 500,
              'response': {
                'error': 'client creation error.'
              }
            });
          }
        }
        res({
          'status': 201,
          'response': {
            'message': 'client creation completed.'
          }
        });
      });
    });
  }

  /*
    Update an item from client by the client passed on the constructor
  */
  update(id: string, fields: any): Promise<unknown> {
    return new Promise((res: any) => {
      Client.findOneAndUpdate(
        {
          '_id': new ObjectId(id)
        },
        fields,
        {},
        (err: any) => {
          if (err) {
            console.error(
              `${Time.now()} - client update error: `
              +
              err
            );
            if (err instanceof TypeError) {
              res({
                'status': 400,
                'response': {
                  'error': 'client update error.'
                }
              });
            } else {
              res({
                'status': 500,
                'response': {
                  'error': 'client update error.'
                }
              });
            }
          }
          res({
            'status': 200,
            'response': {
              'message': 'client update completed.'
            }
          });
        }
      );
    });
  }

  /*
    Delete an item from client by the client passed on the constructor
  */
  delete(id: string): Promise<unknown> {
    return new Promise((res: any) => {
      Client.findOneAndDelete(
        {
          '_id': new ObjectId(id)
        },
        {},
        (err: any) => {
          if (err) {
            console.error(
              `${Time.now()} - client delete error: `
              +
              err
            );
            if (err instanceof TypeError) {
              res({
                'status': 400,
                'response': {
                  'error': 'client delete error.'
                }
              });
            } else {
              res({
                'status': 500,
                'response': {
                  'error': 'client delete error.'
                }
              });
            }
          }
          res({
            'status': 200,
            'response': {
              'message': 'client delete completed.'
            }
          });
        }
      );
    });
  }
}