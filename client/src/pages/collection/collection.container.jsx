import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import WithSpinner from "../../components/spinner/spinner.component"
import { selectLoaded } from "../../redux/collection/collection-selector"
import collectionComponent from "./collection.component"



const mapStateToProps = createStructuredSelector({
    loaded:selectLoaded
})

export default connect(mapStateToProps)(WithSpinner(collectionComponent)) 


