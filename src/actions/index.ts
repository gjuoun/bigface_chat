import { Action, USER_ACTION, FRIENDS_ACTION } from "../types";
import { Dispatch } from "react";
import { AxiosResponse } from "axios";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

interface State {
  type: FRIENDS_ACTION | USER_ACTION;
  payload?: any;
}

export const getUser = (): Action => {
  return {
    type: USER_ACTION.GET_USER
  };
};

export const getTodos = (): Action => {
  return {
    type: USER_ACTION.GET_TODOS
  };
};

export const login = (): Action => {
  return {
    type: USER_ACTION.LOGIN
  };
};

export const logout = (): Action => {
  return {
    type: USER_ACTION.LOGOUT
  };
};

export const fetchFriends = () => {
  return async function(dispatch: Dispatch<State>, getState: any) {
    const response: AxiosResponse = await jsonPlaceHolder.get("/users");

    dispatch({
      type: FRIENDS_ACTION.FETCH_FRIENDS,
      payload: response.data
    });
  };
};
