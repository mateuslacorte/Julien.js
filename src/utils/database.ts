/*
  Import the TypeORM library
*/
import { DataSource } from "typeorm";
    
/*
  Import the Time utility
*/
import {Time} from '../utils/time';

/*
  Export the Database utility
*/
export class Database {

  sqlite : DataSource;

   constructor()  { 

    this.sqlite = new DataSource({
      type: process.env.SQLITE_TYPE,
      database: process.env.SQLITE_PATH
    });

    this.sqlite.initialize().then(() => {
      console.warn.bind(
        console,
        `${Time.now()} - SQLITE3 is operational.`
      )
    }).catch((err) => {
      console.error.bind(
        console,
        `${Time.now()} - MongoDB connection error.`
      )
    })
    
    /*
      TODO: Log close calls on connection
    */
  }
}