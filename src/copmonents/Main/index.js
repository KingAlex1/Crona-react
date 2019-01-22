import React, {Component} from 'react'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export class Main extends Component {

    render() {

        return (
            <div className='wrapper'>
                <div className='main-content'>
                    <div className='content'>
                        <Header/>
                        <MainContent/>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main