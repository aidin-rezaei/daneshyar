import { combineReducers } from "redux";
import AdminData from "./AdminData";
import Filter from "./Filter";
import Menu from "./Menu";
import Modal from "./Modal";
import Roll from "./Roll";
import UserData from "./UserData";
const allReducers = combineReducers({
  menu: Menu,
  filter: Filter,
  roll: Roll,
  userData: UserData,
  AdminData: AdminData,
  Modal: Modal
});

export default allReducers;