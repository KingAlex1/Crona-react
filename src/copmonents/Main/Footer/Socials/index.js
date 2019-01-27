import React, {PureComponent} from 'react'

import './index.scss'

export class Socials extends PureComponent {


    render() {
        const {socials} = this.props
        return (
            <div className='footer__socials'>
                <ul className='footer__socials-list'>

                    {socials.map((el, i) => (
                        <li className='footer__socials_item' key={i}>
                            <a href={el.href} className={`footer__social_link ${el.name}`}></a>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}


export default Socials
