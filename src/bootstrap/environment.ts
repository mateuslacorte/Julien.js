import {config, DotenvConfigOutput} from "dotenv";

export default (() : DotenvConfigOutput => {
  return config();
});