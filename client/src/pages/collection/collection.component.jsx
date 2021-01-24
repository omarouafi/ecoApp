import React from 'react'
import { connect } from 'react-redux'
import CollectionItemComponent from '../../components/collection-item/collectionItem.component'
import { selectCat } from '../../redux/collection/collection-selector'
import './collection.styles.scss'


const Collection = ({collection}) => {
    
    return(
        <div className="collection-page">

            <h2 className="title">{collection.title}</h2>

            <div className="items">
                {
                    collection.items.map(item => <CollectionItemComponent key={item.id} item={item} />)
                }
            </div>

        </div>
    )
}



const mapStateToProps = (state,ownProps) => ({
    collection : selectCat(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Collection) 
