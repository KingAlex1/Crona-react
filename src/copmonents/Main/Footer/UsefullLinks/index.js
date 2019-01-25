import React, {PureComponent} from 'react'

import './index.scss'

export class UsefullLinks extends PureComponent {

    render() {
        const {hrefs , children} = this.props


        console.log(hrefs)

        return (
            <div>
                <div className='footer__title '>{children}</div>
                <ul className='footer__list-left'>
                    {hrefs.map((el , i) => (
                        <li key={i} className='footer__item-left'>
                            <a className='footer__link-left' href={el.href}>{el.name}</a>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

export default UsefullLinks