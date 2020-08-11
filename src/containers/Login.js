import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'
import { push } from 'connected-react-router'

const Login = (props) => {
	if(props.isAuthenticated) {
		return(
			<Redirect to='/' />
		)
	} else {
		return(
			<div className="login-page">
				<LoginForm {...props} />
				<div className="SignupLink">
				{ props.errors &&
					<p class="login-error"> { props.errors.detail } </p>
				}
				<p>Please register if you don't have an account yet </p>
			  <button onClick={() => { props.signup() }}>Sign up</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: authErrors(state),
	isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = ( dispatch ) => ({
	onSubmit: (username, password) => {
		dispatch(login(username,password))
	},
	signup: () => {dispatch(push('/sign-up'))}
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
