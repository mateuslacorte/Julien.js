/*
    Import the Mongoose library
*/
import mongoose, {Schema, Document} from 'mongoose';

/*
  Import the Time utility
*/
import {Time} from '../utils/time';

/*
  Import the History model
*/
import {default as History} from '../model/history';
import { ObjectID } from 'bson';

/*
  Create the Client schema
*/
const schema : Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  client_id: {
    type: ObjectID,
    default: new ObjectID(),
  },
  app_secret: {
    type: ObjectID,
    default: new ObjectID(),
  },
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
  // @ts-expect-error
  let modifiedFields : any = this.getUpdate().$set;
  delete modifiedFields.updated_at;
  Object.keys(modifiedFields).forEach((field) => {
    const history : Document = new History({
      collection_name: 'Client',
      collection_field: field,
      old_value: model[field],
      new_value: modifiedFields[field],
      object_id: model["_id"]
    });
    history.save((err) => {
      if (err) {
        console.error(
          `${Time.now()} - History creation error: `
          +
          err
        );
      }
    });
  })
});

/*
  Export the Client model
*/
export default mongoose.model('Client', schema);