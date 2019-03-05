import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInForm from '../Auth/SignInFrom'
import SignUpForm from '../Auth/SignUpForm'
import {
    signUpRequest,
    signInRequest,
    signOutRequest
} from '../../../actions/auth'
import Spinner from 'react-svg-spinner'
import Welcome from '../Auth/Welcome'

import './index.scss'

export class AuthPage extends Component {  

    render() {
        const {loading, isAuthorized, user} = this.props

        if (loading) {
            return <Spinner
                height="50px" width="50px"/>
        }
        if (isAuthorized) {
            return <Welcome user={user}/>
            
        }

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
                        />}/>
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
        setTimeout(()=>{
            this.props.history.push("/blog")
        },6000)
        
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
    user: state.auth.user,
    isAuthorized: state.auth.isAuthorized,
})

const mapDispatchTProps = {
    signUpRequest,
    signInRequest,
    signOutRequest
}

export default connect(mapStateToProps, mapDispatchTProps)(AuthPage)