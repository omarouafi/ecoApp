import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchStart } from '../../redux/collection/collection-actions';
import {createStructuredSelector} from 'reselect'
import './shop.styles.scss'
import { selectLoaded } from '../../redux/collection/collection-selector';
import OverviewContainer from '../../components/collOverview/overview.container';
import CollectionContainer from '../collection/collection.container';




const Shop = ({fetchStart,match}) => {


    useEffect(()=>{ 
        fetchStart()
    },[fetchStart])
    
    return(
    <div className="shop-page">
        <Switch>
            <Route exact path={match.path} component={OverviewContainer}  />
            <Route exact path={`${match.path}/:category`} component={CollectionContainer}  />
        </Switch>
    </div>
    )
    
}




const mapStateToProps = createStructuredSelector({
    loaded:selectLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchStart: () => dispatch(fetchStart()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop)  