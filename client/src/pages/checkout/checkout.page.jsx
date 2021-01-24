import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector'
import './checkout.styles.scss'
import {createStructuredSelector} from 'reselect'
import StripBtn from '../../components/stripeBtn/stripe.component'


const Checkout = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item} /> )
        }


        <div className="total">Total:{total}$</div>
        <StripBtn price={total} />

    </div>


)


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout) 
