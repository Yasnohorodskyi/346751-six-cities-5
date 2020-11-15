import {combineReducers} from "redux";
import {data} from "./data/data";
import {process} from "./process/process";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
});
