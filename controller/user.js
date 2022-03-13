/*
Import the user service
*/
const UserService = require('../service/user');

/*
Import the Time utility
*/
const Time = require('../utils/time');

/*
Export the UserController class
*/
module.exports = class UserController {
    constructor(user = null) {
    /*
    Set the user as this.user
    */
    this.user = user;
    }

    /*
    Return an item from user by given id
    */
    getById(id) {
        userService = new UserService();
        result = userInstance.getById(id)
        result.then((result)=>{
            return result;
        });
    }

    /*
    Create an item from user by the user passed on the constructor
    */
    create(data) {
        userService = new UserService(data);
        result = userInstance.create()
        result.then((result)=>{
            return result;
        });
    }

    /*
    Update an item from user by the user passed on the constructor
    */
    update(id, fields) {
        userService = new UserService();
        result = userInstance.getById(id, fields)
        result.then((result)=>{
            return result;
        })
    }

    /*
    Delete an item from user by the user passed on the constructor
    */
    delete(id) {
        userService = new UserService();
        result = userInstance.delete(id)
        result.then((result)=>{
            return result;
        });
    }
}