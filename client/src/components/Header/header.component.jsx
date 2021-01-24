import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {withRouter} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import DropDown from '../cartDropDown/drop-down.component'
import {connect} from 'react-redux'
import { HeaderContainer, LogoContainerStyles, OptionsContainer, OptionStyles } from './header.styles'
import { signoutStart } from '../../redux/user/user-actions'

const Header = ({user,signout,hidden, history}) => {
    return (
        <HeaderContainer>
            <LogoContainerStyles onClick={() => history.push('/')} >
                <Logo />
            </LogoContainerStyles>

            <OptionsContainer>
                {
                    user?<OptionStyles as="div" onClick={ () => signout()} >SIGNOUT</OptionStyles>:<OptionStyles to='/signin' >SIGNIN</OptionStyles>
                }
                
                <OptionStyles to='/shop' >SHOP</OptionStyles>
                <OptionStyles to='' >CONTACT</OptionStyles>
                <CartIcon />
            </OptionsContainer>
            {
                !hidden?<DropDown />:null
            }
                

        </HeaderContainer>
    )
}

const mapStateToProps = ({cart:{hidden}}) => ({
    hidden
})
const mapDispatchToProps = dispatch => ({
    signout:() => dispatch(signoutStart())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))  







