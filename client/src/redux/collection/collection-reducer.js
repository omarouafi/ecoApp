import { collectionTypes } from "./collection-type";


const INITIAL_STATE = {
    shopData : null,
    error:undefined,
    loaded:false
}

const collectionReducer = (state=INITIAL_STATE,action) => {

    switch (action.type) {    




        case collectionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                loaded:false,
            }

            
        case collectionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                loaded:false,
                error:action.payload
            }

        case collectionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                shopData:action.payload,
                loaded:true
            }

        default:
            return state
    }
}

export default collectionReducer
