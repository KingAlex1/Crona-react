import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

export class Modal extends Component {

    handlePreventClick = e => {
        e.stopPropagation()
    }

    render() {
        const {onClose} = this.props;

        return ReactDOM.createPortal(
            <div
                className='footer_privacy'>
                <div className='modal__background'
                     onClick={onClose}>
                    <div className='modal__main-footer'
                         onClick={this.handlePreventClick}>
                        <div className='privacy__info'>
                            <div
                                className='privacy__title'>Пользовательское
                                соглашение
                            </div>
                            <div className='privacy__desc'>
                                Копирование и использование
                                любых информационных
                                материалов
                                размещенных на сайте
                                разрешается
                                только с письменного
                                согласия
                                руководства компании.
                                Обращаясь к нам за услугами,
                                вы
                                даете согласие на обработку
                                ваших персональных данных.
                            </div>
                        </div>
                        <div className='close' onClick={onClose}></div>
                    </div>
                </div>
            </div>,
            document.querySelector('#privacy')
        )
    }
}


export default Modal