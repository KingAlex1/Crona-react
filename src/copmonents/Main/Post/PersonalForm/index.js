import React, {Component} from 'react'
import Title from '../Title'

import './index.scss'

export class PersonalForm extends Component {

    handleChangeForm = e => {
        this.props.onChangeForm(
            e.target.name,
            e.target.value
        )
    }

    render() {
        const {title} = this.props
        return (
            <div>
                <Title>{title}</Title>
                <div className='personal-from'>
                    <form action="">
                        <div className="form-group">
                            <label
                                htmlFor="firstName">Имя</label>
                            <input
                                id='firstName'
                                className='form-control'
                                name='firstName'
                                placeholder='Имя'
                                value={this.props.firstName}
                                type="text"
                                onChange={this.handleChangeForm}
                            />
                        </div>
                        <div className='form-group'>
                            <label
                                htmlFor="lastName">Фамилия</label>
                            <input
                                id='lastName'
                                className='form-control'
                                name='lastName'
                                placeholder='Фамилия'
                                value={this.props.lastName}
                                type="text"
                                onChange={this.handleChangeForm}/>
                        </div>
                        <div className='form-group'>
                            <label
                                htmlFor="inputEmail">E-mail</label>
                            <input
                                id='inputEmail'
                                className='form-control'
                                name='email'
                                placeholder='Email'
                                value={this.props.email}
                                type="email"
                                onChange={this.handleChangeForm}/>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default PersonalForm