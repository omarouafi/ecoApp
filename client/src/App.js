import './App.css';
import React, { useEffect } from 'react'
import Home from './pages/home/home.page'
import {Redirect, Route,Switch} from 'react-router-dom'
import Header from './components/Header/header.component'
import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import {connect} from 'react-redux'
import { } from './redux/user/user-actions';
import checkoutPage from './pages/checkout/checkout.page';
import { checkUser } from './redux/cart/cart-action';


const App = ({checkUser,currentUser}) =>  {

  useEffect(() => {
    checkUser();
  },[checkUser])
  
  return (
    <div className="App">
    <Header user={currentUser} />
    <Switch>
      <Route exact path='/' component={Home} /> 
      <Route  path='/shop' component={Shop} /> 
      <Route exact path='/checkout' component={checkoutPage} /> 
      <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <Auth/>} /> 
    </Switch>
  </div>
)
}


const mapDispatchToProps = dispatch => ({
  checkUser: () => dispatch(checkUser())
})

const mapStateToProps = ({user:{currentUser}}) => ({
  currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
