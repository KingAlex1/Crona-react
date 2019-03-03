import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../../../common/ErrorField'

import './index.scss'
import axios from "axios/index";

export class SignUpForm extends Component {
    
    

    render() {
        const {handleSubmit} = this.props
        return (
            <div className='sign-up'>
                <div
                    className="main-blog-title">Зарегистрироваться
                </div>
                <form
                    className="sign-up-form"
                    onSubmit={handleSubmit}

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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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