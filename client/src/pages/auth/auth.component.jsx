import React from 'react'
import './auth.styles.scss'
import SignIn from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'

const Auth = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <Signup />
    </div>
)

export default Auth