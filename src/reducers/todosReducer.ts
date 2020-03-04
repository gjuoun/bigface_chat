import { USER_ACTION } from "../types";

const todos = [
  { title: "do 1", completed: true },
  { title: "do 2", completed: false }
];

const todosReducer = (state = {}, action: USER_ACTION) => {
  switch (action) {
    case USER_ACTION.GET_TODOS:
      return todos;
    default:
      return todos;
  }
};

export default todosReducer