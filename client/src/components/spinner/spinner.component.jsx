import React from 'react'

import {SpinnerContainer,SpinnerOverlay} from './spinner.styles'


const WithSpinner = WrappedComp => ({loaded,...props}) => {
    return !loaded ?
    (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
    :
    <WrappedComp {...props} />
}

export default WithSpinner