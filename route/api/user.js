/*
    Import the Express library
*/
const express = require('express');

/*
  Create a new router for User
*/
const router = express.Router();

/*
  Create User
*/
router.post('/user', function(req, res) {
  userInstance = new UserController(req.body);
  result = userInstance.create()
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Return not allowed method
*/
router.get('/user/', function(req, res) {
  res.setHeader('Allow', 'POST')
  res.status(405);
  res.json({
      "status": 405,
      "message": 'Unsuported method used!',
      "allowedMethods": 'POST'
  });  
});

/*
  Return not allowed method
*/
router.delete('/user', function(req, res) {
  res.setHeader('Allow', 'POST')
    res.status(405);
    res.json({
      "status": 405,
      "message": 'Unsuported method used!',
        "allowedMethods": 'POST'
    });  
});

/*
  Return not allowed method
*/
router.put('/user', function(req, res) {
  res.setHeader('Allow', 'POST')
    res.status(405);
    res.json({
        "status": 405,
        "message": 'Unsuported method used!',
        "allowedMethods": 'POST'
  });       
});

/*
  Return not allowed method
*/
router.post('/user/:id', function(req, res) {
  res.setHeader('Allow', 'PUT, DELETE, GET')
  res.status(405);
  res.json({
      "status": 405,
      "message": 'Unsuported method used!',
      "allowedMethods": 'PUT, DELETE, GET'
  });
});

/*
  List User
*/
router.get('/user/:id', function(req, res) {
  userInstance = new UserController();
  result = userInstance.get(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Delete User
*/
router.delete('/user/:id', function(req, res) {
  userInstance = new UserController();
  result = userInstance.delete(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Update User
*/
router.put('/user/:id', function(req, res) {
  userInstance = new UserController();
  result = userInstance.update(req.params.id, req.body)
  res.status(result[1]);
  res.json(result[0]);    
});

/*
  Export the User router
*/
module.exports = router;