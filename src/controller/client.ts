/*
Import the client service
*/
import {ClientService} from '../service/client';

/*
Export the ClientController class
*/
export class ClientController {
    client : any;
    constructor(client = null) {
      /*
      Set the client as this.client
      */
      this.client = client;
    }

    /*
    Return an item from client by given id
    */
    getById(id : string) : Promise<unknown> {
        let clientInstance : ClientService = new ClientService();
        let result : Promise<unknown> = clientInstance.getById(id);
        return result;
    }

    /*
    Create an item from client by the client passed on the constructor
    */
    create() : Promise<unknown> {
        let clientInstance : ClientController = new ClientService(this.client);
        let result : Promise<unknown> = clientInstance.create();
        return result;
    }

    /*
    Update an item from client by the client passed on the constructor
    */
    update(id : string, fields : object) : Promise<unknown> {
        let clientInstance : ClientService = new ClientService();
        let result : Promise<unknown> = clientInstance.update(id, fields);
        return result;
    }

    /*
    Delete an item from client by the client passed on the constructor
    */
    delete(id : string) : Promise<unknown> {
        let clientInstance : ClientService = new ClientService();
        let result : Promise<unknown> = clientInstance.delete(id);
        return result;
    }
}