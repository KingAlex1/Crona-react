import React, {Component} from 'react'
import {
    Switch,
    Route,
    Redirect,
    Link,
    NavLink
} from 'react-router-dom'


import './index.scss'

export class SideBar extends Component {

    render() {
        const menu = [
            {
                title: 'Отправить заявку',
                path: '/get_docs'
            }, {
                title: 'Проверить подлинность',
                path: '/check_docs'
            }, {
                title: 'Бланки заявок',
                path: '/download_docs'
            }, {
                title: 'Тех. регламенты',
                path: '/documents'
            }, {
                title: 'Задать вопрос',
                path: '/offers'
            }, {
                title: 'Блог',
                path: '/blog'
            }, {
                title: 'Чат',
                path: '/chat'
            }, {
                title: 'Список',
                path: '/table'
            },{
                title: 'Новости',
                path: '/news'
            },
        ]



        return (
            <aside className='side-bar'>
                <ul className='side-bar__list'>
                    {menu.map((el, i) => (
                        <li key={i}><NavLink
                            className='side-bar__link'
                            activeClassName="selected"
                            to={el.path}>{el.title}</NavLink>
                        </li>
                    ))}


                </ul>
            </aside>
        )
    }
}


export default SideBar