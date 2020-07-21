import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ username, logout }) => (
	<nav>
		<ul>
			<li>
				You are logged as { username }
			</li>
			<li>
				<button
					onClick={ () => logout() }
				>
				Logout
				</button>
			</li>
		</ul>
	</nav>
)

Navbar.propTypes = {
	username: PropTypes.string.isRequired,
	logOut: PropTypes.func
}

export default Navbar
