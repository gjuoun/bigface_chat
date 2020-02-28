import { ACTION_TYPE, Action, User } from "../types";

const user: User = { id: 1, name: "jun", age: 30 };

const userReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_USER:
      return user;
    case ACTION_TYPE.LOGIN:
      return user;
    case ACTION_TYPE.LOGOUT:
      return null;
    default:
      return user;
  }
};

export default userReducer;
