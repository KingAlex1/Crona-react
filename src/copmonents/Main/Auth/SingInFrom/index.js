import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import ErrorField from '../../../common/ErrorField'


import './index.scss'

export class SingInForm extends Component {



    render() {

        const {handleSubmit} = this.props
        return (
            <div className='sing-in'>
                <div
                    className="main-blog-title"
                >Вход в сервис
                </div>
                <form
                    method="POST"
                    className="sign-in-form"
                    onSubmit={handleSubmit}>
                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        label="Эл. почта"
                        name="email"
                        id="email"
                        component={ErrorField}
                    />
                    <Field
                        labelClassName="col-sm-3 col-form-label"
                        className="form-control"
                        divClassName="col-sm-9"
                        label="пароль"
                        name="password"
                        id="password"
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


export default reduxForm({
    form: 'auth'
})(SingInForm)