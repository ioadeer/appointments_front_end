import { connect } from 'react-redux'
import React from 'react'
import { setVisibilityFilter } from '../actions'
import FilterMenu from '../components/FilterMenu'


const mapStateToProps = (state, ownProps) => ({
	stateFilter: state.visibilityFilter,
	paramsFilter: ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	setFilter: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

//const FilterMenuContainer = (props) => {
//	
//	if(props.stateFilter!==props.paramsFilter){
//	 props.setFilter()
//	}
//
//	return (
//		<FilterMenu {...props} />	
//	)
//}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterMenu)

