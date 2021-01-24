import React, { useState } from 'react'
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component'
import Btn from '../custom-btn/btn.component'
import { signUpStart } from '../../redux/user/user-actions'
import { connect } from 'react-redux'

const Signup = ({signUpStart}) => {

    const [creds,setCreds] = useState({
            displayName:'',
            email:'',
            password:'',
            passwordConfirm:'',
    })
    

    const {email,password,passwordConfirm,displayName} = creds
    const handleSubmit = e => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            alert("passwords doesn't match")
            return;
        }

        signUpStart({email,password,displayName})
      


    }

    const handleChange = e => {
        const {name,value} = e.target
        setCreds({...creds,[name]:value})
    }

   
    return(

    <div className="sign-up">
        <h2 className="title">Sign Up</h2>
        <span className="subtitle">I don't have an account</span>

        <form onSubmit={handleSubmit} >
            <FormInput name="displayName" type="text" label="Display Name" value={displayName} onChange={handleChange}  />
            <FormInput name="email" type="email" label="Email" value={email} onChange={handleChange}  />
            <FormInput name="password" type="password" label="Password" value={password} onChange={handleChange}  />
            <FormInput name="passwordConfirm" type="password" label="Password Confirm" value={passwordConfirm} onChange={handleChange}  />
            <Btn type="submit">SIGNUP</Btn>
        </form>
    </div>


    )
    
} 


const mapDispatchToProps = dispatch => ({

    signUpStart:creds => dispatch(signUpStart(creds))

})

export default connect(null,mapDispatchToProps)(Signup) 