import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  auth,
  createUserDocument,
  getCurrentUser,
  provider,
} from "../../firebase/firebase.utils";
import { signinFailure, signinSuccess, signoutSuccess } from "./user-actions";
import { userTypes } from "./user-types";

function* getUser(user, data) {
  try {
    const userRef = yield createUserDocument(user, data);
    const snapshot = yield userRef.get();
    yield put(signinSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getUser(user);
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUser(user);
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getUser(user, { displayName });
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* checkUser() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield put(signinSuccess(user));
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* signInSaga() {
  yield takeLatest(userTypes.SIGNIN_START, signIn);
}

function* signUpSaga() {
  yield takeLatest(userTypes.SIGNUP_START, signUp);
}

function* googleSignInSaga() {
  yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

function* signoutSaga() {
  yield takeLatest(userTypes.SIGNOUT_START, signout);
}
function* checkUserSaga() {
  yield takeLatest(userTypes.CHECK_USER, checkUser);
}

export default function* userRootSaga() {
  yield all([
    call(googleSignInSaga),
    call(signInSaga),
    call(signUpSaga),
    call(signoutSaga),
    call(checkUserSaga),
  ]);
}
