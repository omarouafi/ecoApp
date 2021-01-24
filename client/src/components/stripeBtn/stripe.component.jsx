import React from 'react'
import CheckoutBtn from 'react-stripe-checkout'


const StripBtn = ({price}) => {


    const priceStripe = price*100
    const onToken = () => alert("paid")

    return(
        <CheckoutBtn 
        label="Pay Now"
        billingAddress
        shippingAddress
        panelLabel="Pay Now"
        description={`The Price is ${price}$`}
        name="CRWN STORE"
        amount={priceStripe}
        token={onToken}
        image="https://svgshare.com/i/CUz.svg"
        stripeKey="pk_test_51H18gkGdZbvZaXo6dMkYlsIhV0xzLumSMkW7eImbbrDvYPE8jIajPS2PujzxxpN3cZF9ZstK1fspSUSPm08m2nJZ00kGdwrTbd"
        alipay
        bitcoin
        />    
    )
} 

export default StripBtn




