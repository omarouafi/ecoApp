import { cartTypes } from "./cart-type";
import { addCart, removeCart } from "./cart-utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}


const cartReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART:
            return {
                ...state,
                hidden:!state.hidden
            }

        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems:addCart(state.cartItems,action.payload)
            }
        case cartTypes.REMOVE_CART:
            return {
                ...state,
                cartItems:removeCart(state.cartItems,action.payload)
            }
        case cartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case cartTypes.CLEAR_CART:
            return {
                ...state,
                cartItems:[]
            }

        default:
            return state
    }
}

export default cartReducer