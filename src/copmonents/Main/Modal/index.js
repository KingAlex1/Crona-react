import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

export class Modal extends Component {
    render () {

        const {children, onClose} = this.props;

        return ReactDOM.createPortal(
            <div className='contacts'>
                <div className='modal__backlay'>
                    <div className='modal__main'>
                        {children}
                        <button onClick={onClose}>X</button>
                    </div>
                </div>
            </div>,
            document.querySelector('#portal')
        )
    }
}

export default Modal