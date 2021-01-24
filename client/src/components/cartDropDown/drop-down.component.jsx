import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selector'
import CartItem from '../cart-item/cart-item.component'
import Btn from '../custom-btn/btn.component'
import {createStructuredSelector} from 'reselect'
import './drop-down.styles.scss'


const DropDown = ({cartItems,history}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(({id,...otherProps}) => <CartItem key={id} {...otherProps} /> )
            }
        </div>

        <Btn onClick={()=>history.push('/checkout')}>GO TO CHECKOUT</Btn>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(DropDown)) 
