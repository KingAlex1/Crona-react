import React, {Component} from 'react'
import './index.scss'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export class Main extends Component {

    render() {

        return (
            <div className='wrapper'>
                <div className='main-content'>
                    <Header/>
                    <MainContent/>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Main