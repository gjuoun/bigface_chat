import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import todosReducer from './todosReducer'
import friendsReducer from './friendsReducer'

export default combineReducers({
  user: userReducer,
  todos: todosReducer,
  friends: friendsReducer
});
