
 # Julien.js
## The easiest project approach to NodeJS
![King Julien](logo.png "King Julien")
### Julien commands
Generate a new model with the following command:
```
node julien make:model <name of the model>
```

Generate a new service with the following command:
```
node julien make:service <name of the service>
```

Generate a new controller with the following command:
```
node julien make:controller <name of the controller>
```

Generate a new route with the following command:
```
node julien make:route <name of the route> <type of the route, allowed types: web, api> <path of the route>
```

List all the routes with the following command:
```
node julien route:list
```

Run the app with the following command:
```
node julien serve
```
or
```
npm run serve
```
or
```
npm start
```

_*Note that for a same resource all itens should be named the same, be it a model, service, controller or route!*_