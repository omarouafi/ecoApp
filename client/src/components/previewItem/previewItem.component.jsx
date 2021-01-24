import React from 'react';
import CollectionItem from '../collection-item/collectionItem.component';
import './preview.styles.scss'


const PreviewItem = ({title,items,routeName}) => (
    <div className="collection-preview">
        <h2 className="title"><a href={`/shop/${routeName}`}>{title}</a> </h2>

        <div className="preview">
            {
                items.filter((item,idx) => idx < 4).map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

export default PreviewItem



