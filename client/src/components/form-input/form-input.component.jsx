import React from 'react'
import './form-input.styles.scss'


const FormInput = ({label,...otherProps}) => (

    <div className="group">
        <input {...otherProps} className='form-input' />

        {
            label ? <label className={`form-input-label ${!otherProps.value?null:'shrink'}`}>{label}</label>:null
        }

    </div>

)


export default FormInput