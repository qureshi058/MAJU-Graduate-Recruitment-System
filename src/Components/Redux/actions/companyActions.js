// "2ND STEP after making user types in user.types.js file" WE MALE HERE ACTIONS BY USING THOSE TYPES GIVING A USER ON SUCCESS AND ERROR IN FAILURE

//"2ND STEP" after coming from user.types.js file we make signUpStart passing userCredentials in parameters and we also made signUpSuccess and signUpFailure
//now we go to user.saga.js file

import UserActionTypes from "../userActionTypes";
import { toast } from 'react-toastify'

import firebase from "firebase"
//an action created which will be now used in user.reducer.js file which the 2nd value in parameter (state,actions)

//......................................................redux-3............................................

//doing this for sign-in.component.jsx
//for google
toast.configure();

export const signInSuccess = (user) => (

  {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,

  });

export const signInFailure = (error) => (
  toast.error(error.message),
  {
  type: UserActionTypes.SIGN_IN_FAILURE,
}

);

//for simple email
//emailAndPassword put here as in sign-in.component.jsx file we are passing email and password as states which
//we will pass here as emailAndPassword
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => (
  toast.success("Signed Out"),
  firebase.auth().signOut().then(() => {
    localStorage.clear()
  }).catch((error) => {
    // An error happened.
  })
  );

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
//userCredentials is email,password and displayName
export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
//user is what we always pass and the additional data is coming from firebase.utils.js file
export const signUpSuccess = ({ user, additionalData }) => (
  toast.success("Sign Up Successful"),
  {
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
  
});

export const signUpFailure = (error) => (
  toast.error(error.message),
  {
  type: UserActionTypes.SIGN_UP_FAILURE,
});

// export const emailSignInSuccess = (user) =>({
//     type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload:user
// })

// export const emailSignInFailure = error => ({
//     type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload:error
// })
