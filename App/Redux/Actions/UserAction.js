export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_LINESTATE = "SET_LINESTATE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const PUSH_MESSAGE = "PUSH_MESSAGE";
export const REGIEST_NAME= "REGIEST_NAME";
export const UNSUBSCRIBE_NAME= "UNSUBSCRIBE_NAME";
export function LogoutUser(UserName) {
  return {
    type: LOGOUT_USER,
    payload: {
      UserName: ""
    }
  };
}
export function LoginUser(UserName) {
  return {
    type: LOGIN_USER,
    payload: {
      UserName: UserName
    }
  };
}
export function SetLineState(State) {
  return {
    type: SET_LINESTATE,
    payload: {
      LineState: State
    }
  };
}
export function ReceiveMessage(Received) {
  return {
    type: RECEIVE_MESSAGE,
    payload: {
      UserName: Received.UserName,
      DateTime: Received.DateTime,
      Message: Received.Message,
      MessageType: Received.MessageType
    }
  };
}
export function PushMessage(Pushed) {
  return {
    type: PUSH_MESSAGE,
    payload: {
      DateTime: Pushed.DateTime,
      Message: Pushed.Message,
      MessageType: 1
    }
  };
}
