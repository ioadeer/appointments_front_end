import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import ButtonLink from '../components/ButtonLink'


const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter,
	filter: ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	setFilter: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonLink)

