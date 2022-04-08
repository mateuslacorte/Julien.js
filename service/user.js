/*
    Import the user model
*/
const User = require('../model/user');

/*
  Import the Time utility
*/
const Time = require('../utils/time');

/*
  Import the ObjectId type from Mongoose library
*/
const ObjectId = require('mongoose').Types.ObjectId;

/*
  Export the User class
*/
module.exports = class UserService {
  constructor(user = null) {
    /*
      Set the user as this.user
    */
    this.user = user;
  }

  /*
    Return an item from User by given id
  */
  getById(id) {
    return new Promise((res) => {
      User.findOne(
        {
          '_id': new ObjectId(id)
        },
        (err, result) => {
          if (err) {
            console.error(
              `${Time.now()} - user get error: `
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'user get error.'
              }
            });
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
    Create an item from User by the user passed on the constructor
  */
  create() {
    let user = new User(this.user);
    return new Promise((res) => {
      user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res({
              'status': 409,
              'response': {
                'error': 'user already exists.'
              }
            });
          }
          console.error(
            `${Time.now()} - user creation error: `
            +
            err
          );
          res({
            'status': 500,
            'response': {
              'error': 'user creation error.'
            }
          });
        }
        res({
          'status': 201,
          'response': {
            'error': 'user creation completed.'
          }
        });
      });
    });
  }

  /*
    Update an item from user by the user passed on the constructor
  */
  update(id, fields) {
    return new Promise((res) => {
      User.findOneAndUpdate(
        {
          '_id': new ObjectId(id)
        },
        fields,
        {},
        (err) => {
          if (err) {
            console.error(
              `${Time.now()} - user update error: `
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'user update error.'
              }
            });
          }
          res({
            'status': 200,
            'response': {
              'error': 'user update completed.'
            }
          });
        }
      );
    });
  }

  /*
    Delete an item from user by the user passed on the constructor
  */
  delete(id) {
    return new Promise((res) => {
      User.findOneAndDelete(
        {
          '_id': new ObjectId(id)
        },
        {},
        (err) => {
          if (err) {
            console.error(
              `${Time.now()} - user delete error: `
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'user delete error.'
              }
            });
          }
          res({
            'status': 200,
            'response': {
              'error': 'user delete completed.'
            }
          });
        }
      );
    });
  }
}