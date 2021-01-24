import {createSelector} from 'reselect'


const selectCollection = state => state.collection


export const selectShopData = createSelector(
    selectCollection,
    collection => collection.shopData
)



export const selectShopDataList = createSelector(
    selectShopData,
    collections => collections? Object.keys(collections).map(el => collections[el]):[]
)

export const selectCat = cat => createSelector(
    selectShopData,
    collections => (collections ? collections[cat] :null)
)

export const selectLoaded = createSelector(
    selectCollection,
    collection => collection.loaded
)
