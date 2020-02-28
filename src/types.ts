export enum ACTION_TYPE {
  GET_USER,
  GET_TODOS,
  LOGIN ,
  LOGOUT
}

export interface Action {
  type: ACTION_TYPE;
  payload?: any;
}

export interface User {
  id: number
  name: string;
  age: number;
}

export interface State {
  user: User;
}
