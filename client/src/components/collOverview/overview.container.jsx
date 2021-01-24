import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectLoaded } from '../../redux/collection/collection-selector';
import WithSpinner from '../spinner/spinner.component';
import OverviewComponent from './overview.component';


const mapStateToProps = createStructuredSelector({
    loaded : selectLoaded
})


export default connect(mapStateToProps)(WithSpinner(OverviewComponent))





