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
import SideBar from '../SideBar'
import AuthPage from '../AuthPage'
import ProtectedRoute from '../../common/ProtectedRoute'
import Blog from '../Blog'
import News from '../News'
import Chat from '../Chat'
import Table from '../Table'
import CurrentNews from '../News/CurrentNews'
import CurrentPost from '../Blog/CurrentPost'

import './index.scss'

export class MainContent extends Component {

    render() {

        return (
            <div className='main'>
                <div className='main-wrapper'>
                    <div className='container'>
                        <div className='content'>
                            <SideBar/>

                            <div className='content__info'>
                                <Switch>
                                    <Route
                                        exact path='/'
                                        component={MainBlog}
                                    />
                                    <Route
                                        path='/about'
                                        component={About}
                                    />
                                    <Route
                                        path='/contacts'
                                        component={Contacts}
                                    />
                                    <Route
                                        path='/get_docs'
                                        component={GetDocs}
                                    />
                                    <Route
                                        path='/check_docs'
                                        component={CheckDocs}
                                    />
                                    <Route
                                        path='/download_docs'
                                        component={DownloadDocs}
                                    />
                                    <Route
                                        path='/documents'
                                        component={Documents}
                                    />
                                    <Route
                                        path='/offers'
                                        component={Post}
                                    />
                                    <Route
                                        path="/auth"
                                        component={AuthPage}
                                    />
                                    <ProtectedRoute
                                        exact path='/blog'
                                        component={Blog}
                                    />
                                    <ProtectedRoute
                                        path='/blog/:hash'
                                        component={CurrentPost}
                                    />
                                    <ProtectedRoute
                                        path='/chat'
                                        component={Chat}
                                    />
                                    <ProtectedRoute
                                        path='/table'
                                        component={Table}
                                    />
                                    <Route
                                        exact path='/news'
                                        component={News}
                                    />
                                    <Route
                                        path='/news/:hash'
                                        component={CurrentNews}
                                    />

                                    <Redirect from='*'
                                              to="/"
                                    />
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