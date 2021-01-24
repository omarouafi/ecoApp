import { cartTypes } from "./cart-type";

export const toggleCart = () => ({
    type:cartTypes.TOGGLE_CART
})


export const addCart = item => ({
    type:cartTypes.ADD_TO_CART,
    payload:item
})

export const removeCart = item => ({
    type:cartTypes.REMOVE_CART,
    payload:item
})

export const clearCart = item => ({
    type:cartTypes.CLEAR_ITEM,
    payload:item
})

export const clearCartAll =() => ({
    type:cartTypes.CLEAR_CART,
})

export const checkUser =() => ({
    type:cartTypes.CHECK_USER,
})