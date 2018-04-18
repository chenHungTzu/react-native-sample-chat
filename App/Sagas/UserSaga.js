import { takeEvery, put, call, select, take } from "redux-saga/effects";
import chatService from "../Service/ChatService";
import * as UserAction from "../Redux/Actions/UserAction";

export function* LoginUserAsync() {
  yield takeEvery(UserAction.LOGIN_USER, function*(action) {
    console.log("[LOGIN_USER]");
    console.log("[LOGIN_USER] EXCUTE WITH PARAMETER", action);
    try {
      let userName = action.payload.UserName;

      yield put({
        type: UserAction.REGIEST_NAME,
        payload: { UserName: userName }
      });

      chatService.GetInstance().Connect(userName);
    } catch (error) {
      console.log(`[LOGIN_USER] EXCUTE ERROR - MESSAGE : `, error);

      //yield put({ type: FromLoadingActionTypes.INVISIBLE_MASK });
    }
  });
}

export function* LogoutUserAsync() {
  yield takeEvery(UserAction.LOGOUT_USER, function*(action) {
    console.log("[LOGOUT_USER]");
    console.log("[LOGOUT_USER] EXCUTE WITH PARAMETER", action);
    try {
      let userName = yield select(state => state.UserStore.UserName);

      yield put({
        type: UserAction.UNSUBSCRIBE_NAME,
        payload: { UserName: "" }
      });

      chatService.GetInstance().Close(userName);
    } catch (error) {
      console.log(`[LOGOUT_USER] EXCUTE ERROR - MESSAGE : `, error);

      //yield put({ type: FromLoadingActionTypes.INVISIBLE_MASK });
    }
  });
}

export function* PushMessageAsync() {
  yield takeEvery(UserAction.PUSH_MESSAGE, function*(action) {
    console.log("[PUSH_MESSAGE]");
    console.log("[PUSH_MESSAGE] EXCUTE WITH PARAMETER", action);
    try {
      let userName = yield select(state => state.UserStore.UserName);

      chatService
        .GetInstance()
        .Send(Object.assign({ UserName: userName }, action.payload));
        
    } catch (error) {
      console.log(`[PUSH_MESSAGE] EXCUTE ERROR - MESSAGE : `, error);

      //yield put({ type: FromLoadingActionTypes.INVISIBLE_MASK });
    }
  });
}
