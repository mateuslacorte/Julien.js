/*
    Create the Framework defaults
*/
module.exports = {
    modelDefault: `/*
    Import the Mongoose library
*/
const mongoose = require('mongoose');

/*
  Import the Time utility
*/
const Time = require('../utils/time');

/*
  Import the History model
*/
const History = require('../model/history');

/*
  Create the MODEL__NAME_CAPITALIZED schema
*/
const schema = mongoose.Schema({
  // Your schema goes here
}, {
  versionKey: 'version_key',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});
  
/*
  Add the change to history after updating
*/
schema.post('findOneAndUpdate', function(model) {
  const modifiedFields = this.getUpdate().$set;
  delete modifiedFields.updated_at;
  Object.keys(modifiedFields).forEach((field) => {
    const history = new History({
      collection_name: 'MODEL__NAME_CAPITALIZED',
      collection_field: field,
      old_value: model[field],
      new_value: modifiedFields[field],
      object_id: model["_id"]
    });
    history.save((err) => {
      if (err) {
        console.error(
          \`\${Time.now()} - History creation error: \`
          +
          err
        );
      }
    });
  })
});

/*
  Export the MODEL__NAME_CAPITALIZED model
*/
module.exports = mongoose.model('MODEL__NAME_CAPITALIZED', schema);`,
    routeDefault: `/*
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
router.post('/ENDPOINT_NAME', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController(req.body);
  result = MODEL_NAMEInstance.create()
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Return not allowed method
*/
router.get('/ENDPOINT_NAME/', function(req, res) {
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
router.delete('/ENDPOINT_NAME', function(req, res) {
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
router.put('/ENDPOINT_NAME', function(req, res) {
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
router.post('/ENDPOINT_NAME', function(req, res) {
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
router.get('/ENDPOINT_NAME/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.get(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Delete MODEL__NAME_CAPITALIZED
*/
router.delete('/ENDPOINT_NAME/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.delete(req.params.id)
  res.status(result[1]);
  res.json(result[0]);
});

/*
  Update MODEL__NAME_CAPITALIZED
*/
router.put('/ENDPOINT_NAME/:id', function(req, res) {
  MODEL_NAMEInstance = new MODEL__NAME_CAPITALIZEDController();
  result = MODEL_NAMEInstance.update(req.params.id, req.body)
  res.status(result[1]);
  res.json(result[0]);    
});

/*
  Export the MODEL__NAME_CAPITALIZED router
*/
module.exports = router;`,
    serviceDefault: `/*
    Import the MODEL_NAME model
*/
const MODEL_NAME = require('../model/MODEL_NAME');

/*
  Import the Time utility
*/
const Time = require('../utils/time');

/*
  Import the ObjectId type from Mongoose library
*/
const ObjectId = require('mongoose').Types.ObjectId;

/*
  Export the MODEL__NAME_CAPITALIZED class
*/
module.exports = class MODEL__NAME_CAPITALIZEDService {
  constructor(MODEL_NAME = null) {
    /*
      Set the MODEL_NAME as this.MODEL_NAME
    */
    this.MODEL_NAME = MODEL_NAME;
  }

  /*
    Return an item from MODEL_NAME by given id
  */
  getById(id) {
    return new Promise((res) => {
      MODEL_NAME.findOne(
        {
          '_id': new ObjectId(id)
        },
        (err, result) => {
          if (err) {
            console.error(
              \`\${Time.now()} - MODEL_NAME get error: \`
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'MODEL_NAME get error.'
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
    Create an item from MODEL_NAME by the MODEL_NAME passed on the constructor
  */
  create() {
    let MODEL_NAME = new MODEL_NAME(this.MODEL_NAME);
    return new Promise((res) => {
      post.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res({
              'status': 409,
              'response': {
                'error': 'MODEL_NAME already exists.'
              }
            });
          }
          console.error(
            \`\${Time.now()} - MODEL_NAME creation error: \`
            +
            err
          );
          res({
            'status': 500,
            'response': {
              'error': 'MODEL_NAME creation error.'
            }
          });
        }
        res({
          'status': 201,
          'response': {
            'error': 'MODEL_NAME creation completed.'
          }
        });
      });
    });
  }

  /*
    Update an item from MODEL_NAME by the MODEL_NAME passed on the constructor
  */
  update(id, fields) {
    return new Promise((res) => {
      MODEL_NAME.findOneAndUpdate(
        {
          '_id': new ObjectId(id)
        },
        fields,
        {},
        (err) => {
          if (err) {
            console.error(
              \`\${Time.now()} - MODEL_NAME update error: \`
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'MODEL_NAME update error.'
              }
            });
          }
          res({
            'status': 200,
            'response': {
              'error': 'MODEL_NAME update completed.'
            }
          });
        }
      );
    });
  }

  /*
    Delete an item from MODEL_NAME by the MODEL_NAME passed on the constructor
  */
  delete(id) {
    return new Promise((res) => {
      MODEL_NAME.findOneAndDelete(
        {
          '_id': new ObjectId(id)
        },
        {},
        (err) => {
          if (err) {
            console.error(
              \`\${Time.now()} - MODEL_NAME delete error: \`
              +
              err
            );
            res({
              'status': 500,
              'response': {
                'error': 'MODEL_NAME delete error.'
              }
            });
          }
          res({
            'status': 200,
            'response': {
              'error': 'MODEL_NAME delete completed.'
            }
          });
        }
      );
    });
  }
}`,
controllerDefault: `/*
Import the MODEL_NAME service
*/
const MODEL__NAME_CAPITALIZEDService = require('../service/MODEL_NAME');

/*
Import the Time utility
*/
const Time = require('../utils/time');

/*
Export the MODEL__NAME_CAPITALIZEDController class
*/
module.exports = class MODEL__NAME_CAPITALIZEDController {
    constructor(MODEL_NAME = null) {
    /*
    Set the MODEL_NAME as this.MODEL_NAME
    */
    this.MODEL_NAME = MODEL_NAME;
    }

    /*
    Return an item from MODEL_NAME by given id
    */
    getById(id) {
        MODEL_NAMEService = new MODEL__NAME_CAPITALIZEDService();
        result = MODEL_NAMEInstance.getById(id)
        result.then((result)=>{
            return result;
        });
    }

    /*
    Create an item from MODEL_NAME by the MODEL_NAME passed on the constructor
    */
    create(data) {
        MODEL_NAMEService = new MODEL__NAME_CAPITALIZEDService(data);
        result = MODEL_NAMEInstance.create()
        result.then((result)=>{
            return result;
        });
    }

    /*
    Update an item from MODEL_NAME by the MODEL_NAME passed on the constructor
    */
    update(id, fields) {
        MODEL_NAMEService = new MODEL__NAME_CAPITALIZEDService();
        result = MODEL_NAMEInstance.getById(id, fields)
        result.then((result)=>{
            return result;
        })
    }

    /*
    Delete an item from MODEL_NAME by the MODEL_NAME passed on the constructor
    */
    delete(id) {
        MODEL_NAMEService = new MODEL__NAME_CAPITALIZEDService();
        result = MODEL_NAMEInstance.delete(id)
        result.then((result)=>{
            return result;
        });
    }
}`
}