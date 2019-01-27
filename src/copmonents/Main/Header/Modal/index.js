import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

export class Modal extends Component {

    handlePreventClick = (e) =>{
        e.stopPropagation()
    }

    render () {



        const { onClose} = this.props;

        return ReactDOM.createPortal(
            <div className='contacts'>
                <div className='modal__background' onClick={onClose}>
                    <div className='modal__main' onClick={this.handlePreventClick}>
                        <div className='contacts__blog'>
                            <div
                                className='contacts__title'>Контакты
                            </div>
                            <div>
                                <p className='contacts__address'>г.
                                    Москва ул.Коминтерна
                                    д.7к.2</p>
                                <p>тел.:
                                    8(926)639-46-84</p>
                                <p>тел.:
                                    8(985)177-28-21</p>
                                <p>e-mail:
                                    etihonov91@gmail.com</p>
                                <p>e-mail:
                                    alex-sert2015@mail.ru</p>
                            </div>
                        </div>

                        <div className='contacts__desc'>
                            <div className='contacts__title-desc'>
                                Написать нам
                            </div>
                            <form className='contacts__form'>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Краткое
                                        описание продукции</label>
                                    <textarea className="form-control"
                                              id="description" rows="4"
                                              name="description"
                                              type="text"
                                              placeholder="описание продукции"></textarea>
                                </div>
                                <button className="btn btn-primary"
                                        type="submit"
                                        disabled="disabled">Отправить
                                </button>
                            </form>
                        </div>
                        <div className='close' onClick={onClose}></div>
                    </div>
                </div>
            </div>,
            document.querySelector('#portal')
        )
    }
}

export default Modal