import {all,call} from 'redux-saga/effects'
import cartRootSaga from './cart/cart-saga'
import { collectionRootSaga } from './collection/collection-sagas'
import userRootSaga from './user/user-saga'


export default function* rootSaga(){
    yield all([
        call(collectionRootSaga),
        call(userRootSaga),
        call(cartRootSaga),
    ])
}




