import React from 'react'
import { connect } from 'react-redux'
import { addCart, clearCart, removeCart } from '../../redux/cart/cart-action'
import './checkout-item.styles.scss'


const CheckoutItem = ({item,addCart,removeCart,clearCart}) => {
    
    const {name,imageUrl,price,quantity} = item

    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>

        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeCart(item)}>&#10094;</div>
            <span className="value">
                {quantity}
            </span>
            <div className="arrow" onClick={() => addCart(item)}>
                &#10095;
            </div>
        </span>

        <span className="price">{price}$</span>
        <div className="remove-button" onClick={() => clearCart(item)} >&#10005;</div>

    </div>
)}


const mapDispatchToProps =  dispatch => ({

    addCart:item => dispatch(addCart(item)),
    removeCart:item => dispatch(removeCart(item)),
    clearCart:item => dispatch(clearCart(item)),

})

export default connect(null,mapDispatchToProps)(CheckoutItem) 