import { USER_ACTION, Action, User } from "../types";

const user: User = { id: 1, name: "jun", age: 30 };

const userReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case USER_ACTION.GET_USER:
      return user;
    case USER_ACTION.LOGIN:
      return user;
    case USER_ACTION.LOGOUT:
      return null;
    default:
      return user;
  }
};

export default userReducer;
