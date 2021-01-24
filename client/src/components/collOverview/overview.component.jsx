import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewItem from '../previewItem/previewItem.component'
import {selectShopDataList } from '../../redux/collection/collection-selector'
import './overview.styles.scss'
import { uploadCollection } from '../../firebase/firebase.utils'


class Overview extends React.Component {

    render(){
        return(
            <div className="shop-page">
                {
                  this.props.collections.map(({id,...otherProps}) => <PreviewItem key={id} {...otherProps} /> )
                    }
            </div>
    )
    }
}

const mapStateToProps = createStructuredSelector({
    collections:selectShopDataList
})

export default connect(mapStateToProps)(Overview) 