import { combineReducers } from "redux";
import Filter from "./Filter";
import Menu from "./Menu";
import Roll from "./Roll";
import UserData from "./UserData";
const allReducers = combineReducers({
  menu: Menu,
  filter: Filter,
  roll: Roll,
  userData: UserData
});

export default allReducers;