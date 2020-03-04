import { FRIENDS_ACTION, Action } from "../types";


export default (state = [], action: Action) => {
  switch (action.type) {
    case FRIENDS_ACTION.FETCH_FRIENDS:
      return action.payload;
    default:
      return state;
  }
};
