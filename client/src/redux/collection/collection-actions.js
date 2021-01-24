import { convertSnapShotToArray, firestore } from "../../firebase/firebase.utils";
import { collectionTypes } from "./collection-type";

export const fetchStart = () => ({
    type:collectionTypes.FETCH_COLLECTION_START,
})
export const fetchSuccess = collections => ({
    type:collectionTypes.FETCH_COLLECTION_SUCCESS,
    payload :collections
})
export const fetchFailure = error => ({
    type:collectionTypes.FETCH_COLLECTION_FAILURE,
    payload:error
})


export const asyncFetch = () => dispatch => {
    dispatch(fetchStart())
    const collectionsRef = firestore.collection('collections')
    const collectionsSnapshot = collectionsRef.get()
    collectionsSnapshot.then(snapshot => {
        dispatch(fetchSuccess(convertSnapShotToArray(snapshot)))
    }).catch( error => fetchFailure(error.message))
}

