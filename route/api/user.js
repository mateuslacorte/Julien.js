/*
    Import the Express library
*/
const express = require('express');

/*
  Create a new router for MODEL__NAME_CAPITALIZED
*/
const router = express.Router();

/*
  Create MODEL__NAME_CAPITALIZED
*/
router.post('/user', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController(req.body);
  result = MODEL_NAMEInstance.create()
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
router.post('/user', function(req, res) {
  res.setHeader('Allow', 'PUT, DELETE, GET')
  res.status(405);
  res.json({
      "status": 405,
      "message": 'Unsuported method used!',
      "allowedMethods": 'PUT, DELETE, GET'
  });
});

/*
  List MODEL__NAME_CAPITALIZED
*/
router.get('/user/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.get(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Delete MODEL__NAME_CAPITALIZED
*/
router.delete('/user/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.delete(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Update MODEL__NAME_CAPITALIZED
*/
router.put('/user/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.update(req.params.id, req.body)
  res.status(result[1]);
  res.json(result[0]);    
});

/*
  Export the MODEL__NAME_CAPITALIZED router
*/
module.exports = router;