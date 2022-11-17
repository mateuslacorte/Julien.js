const Args = require('./utils/arguments').get();
const Default = require('./bootstrap/default');
const FileSystem = require('./utils/filesystem');
const String = require('./utils/string');
switch(Args[0]) {
  case 'make:model':
    if(Args[1]) {
      dir = new FileSystem('../model/');
      let content = Default.modelDefault.replaceAll('MODEL_NAME', Args[1].toLowerCase());
      content = content.replaceAll('MODEL__NAME_CAPITALIZED', String.capitalize(Args[1].replaceAll("_", " ")).replaceAll(" ", ""));
      dir.create(Args[1].toLowerCase() + '.js', content, 'Model was created successfully!');
    } else {
      console.error('Lacking model name!');
    }
    break;
  case 'make:service':
    if(Args[1]) {
      const dir = new FileSystem('../service/');
      let content = Default.serviceDefault.replaceAll('MODEL_NAME', Args[1].toLowerCase());
      content = content.replaceAll('MODEL__NAME_CAPITALIZED', String.capitalize(Args[1].replaceAll("_", " ")).replaceAll(" ", ""));
      dir.create(Args[1].toLowerCase() + '.js', content, 'Service was created successfully!');
    } else {
      console.error('Lacking service name!');
    }
    break;
  case 'make:controller':
    if(Args[1]) {
      const dir = new FileSystem('../controller/');
      let content = Default.controllerDefault.replaceAll('MODEL_NAME', Args[1].toLowerCase());
      content = content.replaceAll('MODEL__NAME_CAPITALIZED', String.capitalize(Args[1].replaceAll("_", " ")).replaceAll(" ", ""));
      dir.create(Args[1].toLowerCase() + '.js', content, 'Controller was created successfully!');
    } else {
      console.error('Lacking controller name!');
    }
    break;
  case 'make:route':
    if(Args[1]) {
      if(Args[2]) {
        const dir = new FileSystem('../route/' + Args[2].toLowerCase() + "/");
        if(Args[3]) {
          let content = Default.routeDefault.replaceAll('ENDPOINT_NAME', Args[3].toLowerCase());
          content = content.replaceAll('MODEL_NAME', Args[1].toLowerCase());
          content = content.replaceAll('MODEL__NAME_CAPITALIZED', String.capitalize(Args[1].replaceAll("_", " ")).replaceAll(" ", ""));
          dir.create(Args[1].toLowerCase() + '.js', content, 'Route was created successfully!');
        } else {
          console.error('Lacking endpoint path!');
        }
      } else {
        console.error('Lacking type of endpoint! Please select one of the allowed types: api, web.');
      }
    } else {
      console.error('Lacking route name!');
    }
    break;
  case "serve":
    const library = require("./bootstrap/init");
    require("./bootstrap/serve")(library);
    break;
  case "route:list":
    const web = new FileSystem('../route/web');
    const api = new FileSystem('../route/api');
    let routes = {
      "post": [],
      "put": [],
      "get": [],
      "delete": []
    }, web_routes = false, api_routes = false;
    web.dir(async (file) => {
      if(file.length){
        routes_raw = web.read(web.get() + "/" + file).match(/(?<=router.)(.*)(?=',)/g);
        await routes_raw.map((route, index)=>{
          route = route.split("('");
          routes[route[0]].push(route[1]);
        });
      }
      web_routes = true;
    });
    api.dir(async (file) => {
      if(file.length) {
        routes_raw = api.read(api.get() + "/" + file).match(/(?<=router.)(.*)(?=',)/g);
        await routes_raw.map((route, index)=>{
          route = route.split("('");
          routes[route[0]].push("/api/:api_version"+route[1]);
        });
      }
      api_routes = true;
    });
    (function n(){
      if(api_routes && web_routes) {
        console.log(routes);
      } else {
        setTimeout(n, 1000);
      }
    })()
    break;
  default:
    console.info('Here goes the option list...');
    break;
}