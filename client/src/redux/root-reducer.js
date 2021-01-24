import {combineReducers} from 'redux'
import cartReducer from './cart/cart-reducer'
import collectionReducer from './collection/collection-reducer'
import directoryReducer from './directory/directory-reducer'
import userReducer from './user/user-reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const config = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    collection:collectionReducer,
    directory:directoryReducer
})


export default persistReducer(config,rootReducer)