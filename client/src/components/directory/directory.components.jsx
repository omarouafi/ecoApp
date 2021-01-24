import React from 'react'
import MenuItem from '../menuItem/menuItem.component'
import './directory.styles.scss'
import {connect} from 'react-redux'


class Directory extends React.Component{

    render(){
        return (
            <div className="directory-menu">
                {
                    this.props.sections.map(({id,...otherProps}) => <MenuItem key={id} {...otherProps} /> )
                }  
            </div>
        )
    }
}

const mapStateToProps = ({directory:{sections}}) => ({
  sections
})

export default connect(mapStateToProps)(Directory) 





