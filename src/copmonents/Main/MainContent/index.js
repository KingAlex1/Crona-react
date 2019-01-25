import React, {Component} from 'react'
import {
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom'
import About from '../About'
import Contacts from '../Contacts'
import MainBlog from '../MainBlog'
import GetDocs from '../GetDocs'
import CheckDocs from '../CheckDocs'
import DownloadDocs from '../DownloadDocs'
import Documents from '../Documents'
import Post from '../Post'

import './index.scss'

export class MainContent extends Component {


    handleClick = () => {
        const blog = document.querySelector('.content__info')


    }

    render() {
        return (
            <div className='main'>
                <div className='main-wrapper'>
                    <div className='container'>
                        <div className='content'>
                            <aside className='side-bar'>
                                <ul className='side-bar__list'>
                                    <li className='side-bar__item'>
                                        <Link
                                            className='side-bar__link'
                                            to='/get_docs'
                                            onClick={this.handleClick}>Отправить
                                            заявку</Link>
                                    </li>
                                    <li className='side-bar__item'>
                                        <Link
                                            className='side-bar__link'
                                            to='/check_docs'
                                            onClick={this.handleClick}
                                        >Проверить
                                            подлинность</Link>
                                    </li>
                                    <li className='side-bar__item'>
                                        <Link
                                            className='side-bar__link'
                                            to='/download_docs'
                                            onClick={this.handleClick}>Бланки
                                            заявок</Link>
                                    </li>
                                    <li className='side-bar__item'>
                                        <Link
                                            className='side-bar__link'
                                            to='/documents'
                                            onClick={this.handleClick}>Тех.
                                            Регламенты</Link>
                                    </li>
                                    <li className='side-bar__item'>
                                        <Link
                                            className='side-bar__link'
                                            to='/offers'
                                            onClick={this.handleClick}>Задать вопрос</Link>
                                    </li>
                                </ul>
                            </aside>

                            <div className='content__info'>
                                <Switch>
                                    <Route exact path='/'
                                           component={MainBlog}/>
                                    <Route path='/about'
                                           component={About}/>
                                    <Route path='/contacts'
                                           component={Contacts}/>

                                    <Route path='/get_docs'
                                           component={GetDocs}/>
                                    <Route
                                        path='/check_docs'
                                        component={CheckDocs}/>
                                    <Route
                                        path='/download_docs'
                                        component={DownloadDocs}/>
                                    <Route path='/documents'
                                           component={Documents}/>
                                    <Route path='/offers' component={Post}/>
                                    <Redirect from='*'
                                              to="/"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MainContent