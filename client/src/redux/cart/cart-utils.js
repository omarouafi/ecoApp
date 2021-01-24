import { cartTypes } from "./cart-type";

export const  addCart = (cartItems,itemToAdd) => {
    const exist = cartItems.find(item => item.id === itemToAdd.id)
    if (exist) {
        return cartItems.map(item => item.id === itemToAdd.id ? {...item,quantity:item.quantity + 1}:item)
    }
    console.log(itemToAdd);
    return [...cartItems, {...itemToAdd,quantity:1} ]
}


export const  removeCart = (cartItems,itemToRemove) => {
   

    if (itemToRemove.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map(item => item.id === itemToRemove.id ? {...item,quantity:item.quantity - 1}:item)
}
