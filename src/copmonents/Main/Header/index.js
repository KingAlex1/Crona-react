import React, {Component} from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='menu'>
                        <div className='title'>
                            <div
                                className='title__name'>Крона
                                групп
                            </div>
                            <div className='title__description
                            '>Крона групп
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header