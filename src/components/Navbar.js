import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ username, logout }) => (
	<nav>
		<div className="nav-wrapper red accent-2">
			<a className="brand-logo">Appointments app</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					You are logged as { username }
				</li>
				<li>
          <button
						onClick={ () => logout() }
             style={{
				 			textAlign: "center",
               borderRadius: "3px",
               letterSpacing: "1.5px",
               marginLeft: "1rem",
               marginRight: "0.25rem"
             }}
             type="submit"
             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
           >
           	Logout 
           </button>
				</li>
			</ul>
		</div>
	</nav>
)

Navbar.propTypes = {
	username: PropTypes.string.isRequired,
	logOut: PropTypes.func
}

export default Navbar
