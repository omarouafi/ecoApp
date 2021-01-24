import React from 'react'
import './menuItem.styles.scss'


const MenuItem = ({imageUrl,title}) => (
    <div className="menu-item">
        <div className="background-image" style={{backgroundImage:`url('${imageUrl}')`}} />
        <div className="content">
            <span className="title">{title}</span>
            <span className="subtitle">SHOPNOW</span>
        </div>
    </div>
)




export default MenuItem

