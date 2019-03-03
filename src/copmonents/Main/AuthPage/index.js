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
import axios from "axios/index";

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
                        onSubmit={this.handleSingUp}

                    />}/>
                <Route
                    exact
                    path={["/auth/signin", "/auth"]}
                    render={() => <SignInForm
                        onSubmit={this.handleSingIn}
                        user={this.props.user}/>}/>
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

    handleSingIn = ({email, password}) => {
        this.props.signInRequest({
            email, password
        })

    }
    handleSingUp = ({username, email, password}) => {
        this.props.signUpRequest({
            username,
            email,
            password
        })
    }
}


const mapStateToProps = state => ({
    loading: state.auth.loading,
    user: state.auth.user
})

const mapDispatchTProps = {
    signUpRequest,
    signInRequest
}

export default connect(mapStateToProps, mapDispatchTProps)(AuthPage)