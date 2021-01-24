import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as Bag} from '../../assets/bag.svg'
import {connect} from 'react-redux'
import { toggleCart } from '../../redux/cart/cart-action'
import { createStructuredSelector } from 'reselect'
import { selectCartCount } from '../../redux/cart/cart-selector'

const CartIcon =({toggleCart,count}) => (
    <div className="cart-icon" onClick={() => toggleCart()}>
        <Bag className="shopping-icon"/>
        <span className="item-count"> {count} </span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCart())
})

const mapStateToProps = createStructuredSelector({
    count:selectCartCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) 

