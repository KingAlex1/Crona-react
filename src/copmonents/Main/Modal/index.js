import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

export class Modal extends Component {

    handlePreventClick = (e) =>{
        e.stopPropagation()
    }

    render () {



        const {children, onClose} = this.props;

        return ReactDOM.createPortal(
            <div className='contacts'>
                <div className='modal__background' onClick={onClose}>
                    <div className='modal__main' onClick={this.handlePreventClick}>
                        {children}

                        <div className='close' onClick={onClose}></div>
                    </div>
                </div>
            </div>,
            document.querySelector('#portal')
        )
    }
}

export default Modal