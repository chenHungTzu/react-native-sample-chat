import { all } from "redux-saga/effects";

import * as UserSaga from "./UserSaga";


export default function*() {
  yield all([
    UserSaga.LoginUserAsync(),
    UserSaga.LogoutUserAsync(),
    UserSaga.PushMessageAsync()
  ]);
}
