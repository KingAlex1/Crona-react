import React, {Component} from 'react'
import './index.scss'

export class Footer extends Component {
    render() {

        return (
            <div className='footer'>
                <div
                    className='container footer__container'>
                    <div className='footer__left'></div>
                    <div className='footer__middle'></div>
                    <div className='footer__right'></div>
                </div>
                <div className='container'>
                    <div className='footer__bottom'>
                        <p className='footer__bottom-text'>2010 Крона Групп</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer