import {applyMiddleware, createStore} from 'redux'
import {logger} from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './root-saga'
import {persistStore} from 'redux-persist'


const sagaMiddleWare = createSagaMiddleWare()

const middlewares = [logger,sagaMiddleWare]


export const store = createStore(rootReducer, applyMiddleware(...middlewares) )
export const persistor = persistStore(store) 
sagaMiddleWare.run(rootSaga)



