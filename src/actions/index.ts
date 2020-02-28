import { Action, ACTION_TYPE } from "../types";

export const getUsers = (): Action => {
  return {
    type: ACTION_TYPE.GET_USER
  };
};

export const getTodos = (): Action => {
  return {
    type: ACTION_TYPE.GET_TODOS
  };
};

export const login = (): Action => {
  return {
    type: ACTION_TYPE.LOGIN
  };
};

export const logout = ():Action => {
  return {
    type: ACTION_TYPE.LOGOUT
  }
}
