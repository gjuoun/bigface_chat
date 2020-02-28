import { ACTION_TYPE } from "../types";

const todos = [
  { title: "do 1", completed: true },
  { title: "do 2", completed: false }
];

const todosReducer = (state = {}, action: ACTION_TYPE) => {
  switch (action) {
    case ACTION_TYPE.GET_TODOS:
      return todos;
    default:
      return todos;
  }
};

export default todosReducer