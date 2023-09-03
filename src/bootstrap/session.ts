let Redis = require('redis');
import {v4 as uuid} from 'uuid';
import {Time} from '../utils/time';
import {Express, Request} from 'express';
let Session = require("express-session")
let Store = require("connect-redis")(Session)

export default ((app : Express) : void => {
    let client : any = Redis.createClient({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      },
      legacyMode: true
    });
    client.on('error', (err : Error) : void => {
      console.error(
        `${Time.now()} - Redis connection error.`
      );
    });
    client.on('connect', (err : Error) : void => {
      console.info(
        `${Time.now()} - Redis connection success.`
      );
    });
    client.connect();
    app.use(Session({
      name: process.env.SESSION_COOKIE, 
      genid: (request : Request) => {
        return uuid()
      },
      store: new Store({
        client: client
      }),
      secret: process.env.REDIS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
          secure: process.env.APP_PROTOCOL === 'https' ? true : false,
          httpOnly: true,
          maxAge: process.env.SESSION_DURATION
      }
  }));
});