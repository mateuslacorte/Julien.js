/*
Import the client controller
*/
import {ClientController} from '../../controller/client';

/*
    Import the Express library
*/
import express, {Request, Response, Router} from 'express';

/*
  Create a new router for Client
*/
const router : Router = express.Router();

/*
  Create Client
*/
router.post('/client', function(req : Request, res : Response) {
  let clientInstance : ClientController = new ClientController(req.body);
  let result : Promise<unknown> = clientInstance.create();
  result.then((result : any)=>{
    res.status(result.status);
    res.json(result.response);
  });
});

/*
  Return not allowed method
*/
router.get('/client', function(req : Request, res : Response) {
  res.setHeader('Allow', 'POST');
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
router.delete('/client', function(req : Request, res : Response) {
  res.setHeader('Allow', 'POST');
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
router.put('/client', function(req : Request, res : Response) {
  res.setHeader('Allow', 'POST');
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
router.post('/client/:id', function(req : Request, res : Response) {
  res.setHeader('Allow', 'PUT, DELETE, GET');
  res.status(405);
  res.json({
      "status": 405,
      "message": 'Unsuported method used!',
      "allowedMethods": 'PUT, DELETE, GET'
  });
});

/*
  List Client
*/
router.get('/client/:id', function(req : Request, res : Response) {
  let clientInstance : ClientController = new ClientController();
  let result : Promise<unknown> = clientInstance.getById(req.params.id);
  result.then((result : any)=>{
    res.status(result.status);
    res.json(result.response);
  });
});

/*
  Delete Client
*/
router.delete('/client/:id', function(req : Request, res : Response) {
  let clientInstance : ClientController = new ClientController();
  let result : Promise<unknown> = clientInstance.delete(req.params.id);
  result.then((result : any)=>{
    res.status(result.status);
    res.json(result.response);
  });
});

/*
  Update Client
*/
router.put('/client/:id', function(req : Request, res : Response) {
  let clientInstance : ClientController = new ClientController();
  let result : Promise<unknown> = clientInstance.update(req.params.id, req.body);
  result.then((result : any)=>{
    res.status(result.status);
    res.json(result.response);
  });    
});

/*
  Export the Client router
*/
module.exports = router;