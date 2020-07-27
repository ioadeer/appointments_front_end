import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_PAST, SHOW_FUTURE } from '../constants/AppointmentFilters'
import PropTypes from 'prop-types'

const FILTER_TITLES = {
	[SHOW_ALL] : 'All',
	[SHOW_PAST]: 'Past',
	[SHOW_FUTURE]: 'Future'
}

const FilterMenu = (props) => {
	if(props.stateFilter!==props.paramsFilter){
	 props.setFilter()
	}
	return(
		<div className="middleSection">
			<ul className="filters">
				{Object.keys(FILTER_TITLES).map(filter =>
					<li key={filter}>
						<FilterLink filter={filter} paramsFilter={props.paramsFilter}>
							{FILTER_TITLES[filter]}
						</FilterLink>
					</li>
				)}
			</ul>
		</div>
	)
}

export default FilterMenu
