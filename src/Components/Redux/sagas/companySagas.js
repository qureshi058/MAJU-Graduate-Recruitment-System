//"3rd step" after coming from user.actions.js file WE make here fucntion onSignUpStart and then as we are passing
//signUp in our onSignUpStart's 2nd parameter we make this generator signUp after that we get rid f all the code
//from sign-up.component.jsx file and now import user actions which is signUpStart action  from user action file in sign-up.component file

import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  firestore,
  getCurrentUser,
  createUserProfileDocumentForUsers,
} from "../../firebase/firebase";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "../actions/companyActions";
import UserActionTypes from "../userActionTypes";

//called our auth,googleProvider and createUserProfileDocument from firebase by exporting it all from firebase.util.js file
//this auth.SignInWithPopup we were running the same thing in firebase.util.js file

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocumentForUsers,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({
  payload: { email, password, displayName, role , companyName ,programName  },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({ user, additionalData: { displayName , role , companyName , email ,programName} }),
      
    
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* oncheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
//making onSignOutStart function first then making signOut generator above "function* signOut()"
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
//now in order for all this to work we need to export this out then import it in our root saga file

export function* companySagas() {
  yield all([
    call(onEmailSignInStart),
    call(oncheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
