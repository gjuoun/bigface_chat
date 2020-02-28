import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import todosReducer from './todosReducer'

export default combineReducers({
  user: userReducer,
  todos: todosReducer
});
