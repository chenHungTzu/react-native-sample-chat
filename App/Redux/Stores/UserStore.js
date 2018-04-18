import * as UserAction from "../Actions/UserAction";
import * as UserSaga from "../../Sagas/UserSaga";
const initState = {
  UserName: "",
  MessageList: [],
  LineState: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UserAction.REGIEST_NAME:
    case UserAction.UNSUBSCRIBE_NAME:
      return {
        ...state,
        UserName: action.payload.UserName
      };
    case UserAction.SET_LINESTATE:
      return {
        ...state,
        LineState: action.payload.LineState
      };
    case UserAction.RECEIVE_MESSAGE:
      return {
        ...state,
        MessageList: [
          ...state.MessageList,
          {
            UserName: action.payload.UserName,
            DateTime: action.payload.DateTime,
            Message: action.payload.Message,
            MessageType: action.payload.MessageType
          }
        ]
      };

    default:
      return state;
  }
};

export default reducer;
