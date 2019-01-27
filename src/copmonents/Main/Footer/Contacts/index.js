import React, {PureComponent} from 'react'

import './index.scss'

export class Contacts extends PureComponent {

    render() {
        const {contacts , children} = this.props


        return (
            <div className='footer__contacts'>
                <div className='footer__title '>{children}</div>
                <ul className='footer__list-left'>
                    {contacts.map((el)  => (
                        <li key={el} className='footer__item-left'>
                            <div className='footer__paragraph-left'>{el}</div>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

export default Contacts