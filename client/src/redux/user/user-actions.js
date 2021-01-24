import { userTypes } from "./user-types"

export const googleSigninStart = () => ({
    type:userTypes.GOOGLE_SIGNIN_START,    
})

export const signinSuccess = user => ({
    type:userTypes.SIGNIN_SUCCESS,
    payload:user
})


export const signinStart = creds => ({
    type:userTypes.SIGNIN_START,
    payload:creds
})


export const signUpStart = creds => ({
    type:userTypes.SIGNUP_START,
    payload:creds
})



export const signinFailure = error => ({
    type:userTypes.SIGNIN_FAILURE,
    payload:error
})


export const signoutStart = () => ({
    type:userTypes.SIGNOUT_START,
})

export const signoutSuccess = () => ({
    type:userTypes.SIGNOUT_SUCCESS,
    
})

