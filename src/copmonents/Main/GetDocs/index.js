import React, {Component} from 'react'

import './index.scss'

export class GetDocs extends Component {




    handleSubmit = () => {
        let btnSubmit = document.querySelector('.btn-primary')
        let btnGood = document.querySelector('#good').value
        let btnEmail = document.querySelector('#email').value
        let btnPhone = document.querySelector('#phone').value
        let emptyRow = ''
        if (btnGood !== emptyRow && (btnEmail !== emptyRow || btnPhone !== emptyRow)) {
            btnSubmit.removeAttribute('disabled');

        } else {
            btnSubmit.setAttribute('disabled', 'disabled');
        }
    }

    render() {
        return (
            <div className='getdocs'>
                <div className='main-blog-title'>Он-лайн
                    заявка
                </div>
                <form className="order__form" method="POST"
                      onInput={this.handleSubmit}>
                    <div className="form-row">
                        <div
                            className="form-group col-md-6">
                            <label htmlFor="good">Наименование
                                продукции</label>
                            <input className="form-control"
                                   id="good" name="good"
                                   type="text"
                                   placeholder="наименование продукции"
                                   required=""/>
                        </div>
                        <div
                            className="form-group col-md-6">
                            <label htmlFor="code">Код ТН ВЭД
                                продукии</label>
                            <input className="form-control"
                                   id="code" name="code"
                                   type="number"
                                   placeholder="код ТН ВЭД"
                            />
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
                    <div className="form-row">
                        <div
                            className="form-group col-md-6">
                            <label
                                htmlFor="email">E-mail</label>
                            <input className="form-control"
                                   id="email" name="email"
                                   type="email"
                                   placeholder="E-mail"
                            />
                        </div>
                        <div
                            className="form-group col-md-6">
                            <label
                                htmlFor="phone">Телефон</label>
                            <input className="form-control"
                                   id="phone" name="phone"
                                   type="tel"
                                   placeholder="номер телефон"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Ф.И.О.</label>
                        <input className="form-control"
                               id="name" name="name"
                               type="text"
                               placeholder="Ваше Имя"/>

                    </div>
                    <button className="btn btn-primary"
                            type="submit"
                            disabled="disabled">Отправить
                    </button>
                </form>
            </div>
        )
    }
}

export default GetDocs