import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../../../common/ErrorField'

import './index.scss'
import axios from "axios/index";

export class SignUpForm extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    handleSingUp = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        axios.post('http://localhost:4200/auth/signup',data)
    }

    onChangeName = (e) => {
        this.setState({username: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onChangeConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value})
    }


    render() {
        const {handleSubmit} = this.props
        return (
            <div className='sign-up'>
                <div
                    className="main-blog-title">Зарегистрироваться
                </div>
                <form
                    className="sign-up-form"
                    onSubmit={this.handleSingUp}

                >
                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        type="text"
                        name="username"
                        label="Имя"
                        id="name"
                        component={ErrorField}
                        onChange={this.onChangeName}
                    />
                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        type="text"
                        name="email"
                        label="E-mail"
                        id="email"
                        placeholder="e-mail"
                        component={ErrorField}
                        onChange={this.onChangeEmail}
                    />


                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        name="password"
                        label="Пароль"
                        id="password"
                        component={ErrorField}
                        type="password"
                        onChange={this.onChangePassword}
                    />

                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        name="confirm-password"
                        id="confirm-password"
                        label="Подтвердите пароль"
                        component={ErrorField}
                        type="password"
                        onChange={this.onChangeConfirmPassword}
                    />
                    <div className="submit-section">
                        <input className="btn btn-primary"
                               type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}


const validate = ({email, password}) => {
    const errors = {}

    if (!email) errors.email = "введите email"
    else if (!emailValidator.validate(email)) errors.email = "не правильно указан пароль"

    if (!password) errors.password = "введите пароль"
    else if (password.length < 8) errors.password = " минимум 8 символов"

    return errors
}


export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)