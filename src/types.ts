export enum USER_ACTION {
  GET_USER,
  GET_TODOS,
  LOGIN ,
  LOGOUT
}

export enum FRIENDS_ACTION{
  FETCH_FRIENDS,
}

export interface Action {
  type: USER_ACTION | FRIENDS_ACTION;
  payload?: any;
}

export interface User {
  id: number
  name: string;
  age: number;
}

export interface State {
  user: User;
  friends: any[]
}
