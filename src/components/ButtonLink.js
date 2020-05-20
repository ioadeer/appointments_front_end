import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

const ButtonLink = ({ active, filter,children, setFilter }) => 
	(
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'line-through',
    }}
  >
		<button
			className={ classnames({ selected : active })}
			style={{ cursor: 'pointer', textDecoration:'inherit' }}
			onClick= {() => setFilter()}
		>
			{children}
		</button>
  </NavLink>
	)

ButtonLink.propTypes = {

	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	setFilter: PropTypes.func.isRequired
}

export default ButtonLink
