import { put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "../slices/authSlice";
import HRMStorage from "@/common/function";
import GlobalConstant, { KEY_VALUE } from "@/constants/GlobalConstant";
import { toastMessage } from "@/components/atoms/toast_message";

function* handleLogin(payload: LoginPayload) {
  try {
    if (payload.UserName === "admin" && payload.Password === "admin@123") {
      HRMStorage.set(KEY_VALUE.TOKEN, GlobalConstant.TOKEN);
    } else {
      yield put(authActions.loginFailed("Tài khoản hoặc mật khẩu không đúng")); // Dispatch action
      toastMessage("Tài khoản hoặc mật khẩu không đúng", "error");
    }
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
    toastMessage(error.message, "error");
  }
}

function* handleLogout() {
  yield put(authActions.logout());
  yield HRMStorage.clear();
  // Redirect to Login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(HRMStorage.get(KEY_VALUE.TOKEN));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    } else {
      yield take(authActions.logout.type);
      yield call(handleLogout);
    }
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
