import {takeLatest,all,call,put} from 'redux-saga/effects'
import { userTypes } from '../user/user-types'
import { clearCartAll } from './cart-action'






function* signoutClearCart(){
    yield put(clearCartAll())
}

function* signoutClearCartSaga(){
    yield takeLatest(userTypes.SIGNOUT_SUCCESS,signoutClearCart)
}



function* cartRootSaga(){
    yield all([
        call(signoutClearCartSaga)
    ]) 
}

export default cartRootSaga


