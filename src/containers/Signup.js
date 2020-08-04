import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import SignupForm from '../components/SignupForm'
import { signup, signupSuccessRedirect } from '../actions/signup'
import { authErrors, isAuthenticated } from '../reducers'
import { push } from 'connected-react-router'


const Signup = (props) => {

	return(
		<div>
			{ props.success  
			? 
				<div>
			  <p>Sign up successful!</p>
				<button onClick={() => { props.resetSignupState();props.loginPage(); }}>
				Return to log in page 
				</button>
				</div>
			: <SignupForm {...props}/>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
 errors: state.signup.errors,
 success: state.signup.success
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (data) => {
		dispatch(signup(data)) 
	},
	resetSignupState: () => { dispatch(signupSuccessRedirect()) },
	loginPage: () => {dispatch(push('/login')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
