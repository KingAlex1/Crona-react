import React, {Component} from 'react'
import {
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import ModalButton from '../ModalButton'

import './index.scss'

export class Header extends Component {
    render() {
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
                                    <Link
                                        className='nav-bar__link'
                                        to='/'>Главная</Link>
                                </li>
                                <li className='nav-bar__item'>
                                    <Link
                                        className='nav-bar__link'
                                        to='/about'>
                                        О нас</Link></li>
                                <li className='nav-bar__item'>
                                        <ModalButton />
                                    {/*<Link*/}
                                        {/*className='nav-bar__link'*/}
                                        {/*to='/contacts'>Контакты</Link>*/}
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header