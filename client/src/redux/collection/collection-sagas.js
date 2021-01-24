import {takeLatest,call,all,put} from 'redux-saga/effects'
import { convertSnapShotToArray, firestore } from '../../firebase/firebase.utils'
import { fetchFailure, fetchStart, fetchSuccess } from './collection-actions'
import { collectionTypes } from './collection-type'





export function* fetchCollection() {
    try {
        put(fetchStart())
        const collectionsRef = yield firestore.collection('collections')
        const collectionsSnapshot = yield collectionsRef.get()
        yield put(fetchSuccess(convertSnapShotToArray(collectionsSnapshot)))
        
    } catch (error) {
        yield put(fetchFailure(error.message))
    }
}

export function* fetchCollectionSaga() {
    yield takeLatest(collectionTypes.FETCH_COLLECTION_START,fetchCollection)
}



export function* collectionRootSaga() {
    yield all([
        call(fetchCollectionSaga)
    ])
}

