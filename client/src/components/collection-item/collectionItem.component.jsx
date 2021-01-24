import React from 'react'
import { connect } from 'react-redux'
import { addCart } from '../../redux/cart/cart-action'
import Btn from '../custom-btn/btn.component'
import './collectionItem.styles.scss'

const CollectionItem = ({item,addCart}) =>{
    
    const {imageUrl,name,price} =item
    

    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url('${imageUrl}')`}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        <Btn inverted onClick={() => addCart(item)}>ADD TO CART</Btn>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addCart:item => dispatch(addCart(item))
})




export default connect(null,mapDispatchToProps)(CollectionItem) 