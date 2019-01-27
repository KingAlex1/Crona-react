import React, {Component} from 'react'
import UsefullLink from './UsefullLinks'
import Contacts from './Contacts'
import Socials from './Socials'

import './index.scss'
import ModalButton from "./ModalButton";

export class Footer extends Component {
    constructor(props) {
        super(props)

        this.hrefs = [
            {
                name: 'Подобрать код ТН ВЭД',
                href: 'ddddd'
            },
            {
                name: 'Подобрать код ОКПД 2',
                href: "ssss"
            },
            {
                name: 'Росаккредитация',
                href: 'http://fsa.gov.ru'

            }, {
                name: 'Росстандарт',
                href: 'https://www.gost.ru'
            }
        ]

        this.contacts = [
            '8(926)639-46-84',
            '8(985)172-21-09',
            'alex-sert2015@mail.ru',
            'etihonov91@gmail.com'
        ]

        this.socials = [
            {
                name: 'twitter',
                href: 'https://twitter.com/'
            },
            {
                name: 'instagram',
                href: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                href: 'https://www.facebook.com/'
            },
            {
                name: 'google',
                href: 'https://plus.google.com/discover'
            }
        ]

    }

    render() {


        return (
            <div className='footer'>
                <div
                    className='container footer__container'>

                    <div className='footer__left'>
                        <UsefullLink hrefs={this.hrefs}>Полезные
                            ссылки</UsefullLink>
                        <Contacts
                            contacts={this.contacts}>Контакты</Contacts>
                    </div>
                    <div className='footer__right'>
                        <div
                            className='footer__title'>Подпишитесь
                            на рассылку
                        </div>
                        <form action=""
                              className='footer__form'>
                            <div className='form-row'>

                                <div className='col-md-8'>
                                    <input type="email"
                                           className='form-control'
                                           placeholder="Введите email"/>
                                </div>
                                <div className='col-md-3'>
                                    <button type="submit"
                                            className='btn btn-primary btn-submit'>Подписаться
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div
                            className='footer__right_desc'>Никакого
                            спама! Только крайне важные
                            рекламные рассылки
                        </div>
                        <Socials socials={this.socials}/>
                    </div>
                </div>
                <div className='container'>

                    <div className='footer__bottom'>
                        <div
                            className='footer__bottom-left'>&#169; 2010
                            Крона Групп
                        </div>
                        <div
                            className='footer__bottom-rigth'>
                            <ul className='footer__bottom_list'>
                                <li className='footer__bottom_item'>
                                    <ModalButton/>
                                </li>
                                <li className='footer__bottom_item'>
                                    <a className='footer__bottom_link'
                                       href='#'>Условия
                                        использования</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer