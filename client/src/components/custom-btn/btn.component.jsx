import React from 'react'
import { BtnContainer } from './btn.styles'


const Btn  = ({children,...otherProps}) => (
    <BtnContainer {...otherProps} >
        {children}
    </BtnContainer>
)

export default Btn