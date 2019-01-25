import React, {Component} from 'react'
import UsefullLink from './UsefullLinks'

import './index.scss'

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
            }
        ]

    }

    render() {


        return (
            <div className='footer'>
                <div
                    className='container footer__container'>
                    <div className='footer__left'>
                        <UsefullLink hrefs={this.hrefs}>Полезные ссылки</UsefullLink>
                    </div>
                    <div className='footer__right'></div>
                </div>
                <div className='container'>
                    <div className='footer__bottom'>
                        <p className='footer__bottom-text'>2010
                            Крона Групп</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer