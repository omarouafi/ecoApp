import { userTypes } from "./user-types";


const INITIAL_STATE = {
    currentUser:null,
    error:undefined
}


const userReducer = (state=INITIAL_STATE,action) => {

    switch (action.type) {
        case userTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload
            }
        case userTypes.SIGNIN_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        case userTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser:null
            }
        default:
            return state
    }

}

export default userReducer
