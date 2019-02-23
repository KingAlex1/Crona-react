import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInForm from '../Auth/SingInFrom'
import SignUpForm from '../Auth/SingUpForm'
import {
    signUpRequest,
    signInRequest
} from '../../../actions/auth'
import Spinner from 'react-svg-spinner'


import './index.scss'

export class AuthPage extends Component {

    render() {
        const {loading} = this.props

        if (loading) return <Spinner
            height="50px" width="50px"/>
        return (
            <div className='auth-page'>
                <Route
                    path="/auth/signup"
                    render={() => <SignUpForm
                        onSubmit={this.handleSingUp}/>}/>
                <Route
                    exact
                    path={["/auth/signin", "/auth"]}
                    render={() => <SignInForm
                        onSubmit={this.handleSingIn}/>}/>
                <div className="auth-links-section">
                <NavLink
                    isActive={() => window.location.pathname.includes('auth') && !window.location.pathname.includes('signup')}
                    to="/auth/signin"
                    activeStyle={{color: "red"}}
                >
                    Войти/
                </NavLink>
                <NavLink
                    to="/auth/signup"
                    activeStyle={{color: "red"}}
                >
                    Зарегистрироваться
                </NavLink>
                </div>

            </div>
        )
    }

    handleSingIn = (payload) => this.props.signInRequest(payload)
    handleSingUp = (payload) => this.props.signUpRequest(payload)
}


export default connect(state => ({loading: state.auth.loading}), {
    signUpRequest,
    signInRequest
})(AuthPage)