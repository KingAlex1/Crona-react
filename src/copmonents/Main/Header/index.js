import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import ModalButton from './ModalButton'
import {signOutRequest} from '../../../actions/auth'

import './index.scss'

import {connect} from 'react-redux'

export class Header extends Component {
    render() {

        const {signOutRequest, signedIn} = this.props

        const link = signedIn
            ? (<NavLink
                className='nav-bar__link'
                activeClassName='selected'
                to="/auth#"
                onClick={signOutRequest}
            >
                Выйти
            </NavLink>)
            :
            (<NavLink
                className='nav-bar__link'
                activeClassName='selected'
                to='/auth'
            >
                Авторизация
            </NavLink>)

        return (
            <div className='header'>
                <div className='container'>
                    <div className='menu'>
                        <div className='title'>
                            <div className='title__name'>
                                Крона групп
                            </div>
                            <div
                                className='title__description'>
                                Центр сертификации продукции
                            </div>
                        </div>
                        <nav className='nav-bar'>
                            <ul className='nav-bar__list'>
                                <li className='nav-bar__item'>
                                    <NavLink
                                        exact
                                        className='nav-bar__link'
                                        activeClassName='selected'
                                        to='/'>Главная</NavLink>
                                </li>
                                <li className='nav-bar__item'>
                                    <NavLink
                                        className='nav-bar__link'
                                        activeClassName='selected'
                                        to='/about'>
                                        О нас</NavLink></li>

                                <li className='nav-bar__item'>
                                    {link}
                                </li>
                                <li className='nav-bar__item'>
                                    <ModalButton/>

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    signedIn: !!state.auth.user
}), {signOutRequest}, null, {pure: false})(Header)

