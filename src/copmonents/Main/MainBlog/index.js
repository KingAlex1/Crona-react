import React, {Component} from 'react'

import './index.scss'

export class MainBlog extends Component {
    render() {
        return (
            <div>
                <div className='main-page__title'>Крона
                    Групп
                </div>
                <div className='main-page__desc'>
                    Крона Групп – центр сертификации
                    продукции,
                    профессиональный,надежный партнер для
                    участников ВЭД, имеющий опыт
                    сертификации
                    любых видов продукции. Рады предложить
                    Вам
                    полный комплекс услуг по сертификации,
                    декларированию и испытанию продукции и
                    оборудования любой отрасли. Если Вам
                    нужен
                    эффективный результат, комплексное
                    решение и
                    оперативность выполнения – позвоните в
                    наш
                    Центр Сертификации. На нашем сайте Вы
                    можете
                    Вы можете заполнить предварительную
                    заявку
                    для просчета стоимости. Не забудьте
                    указать
                    обратную информацию для получения
                    ответа.
                </div>
                <p className='line-1 anim-typewriter presentation__desc'> Узнайте
                    стоимость on-line или позвоните нам.</p>

                <div className='main-page__title'> Как мы работаем
                </div>
                <div className='process'>
                    <div className='process-row process-up'>
                        <div
                            className='process-item process-item-up process-item-odd'>
                            <div
                                className='process-item-desc'>Ваш
                                звонок / Заявка .
                                Согласование
                                цены, сроков оформления
                            </div>
                        </div>
                        <div
                            className='process-item process-item-up process-item-even'>
                        </div>
                        <div
                            className='process-item process-item-up process-item-odd'>
                            <div
                                className='process-item-desc'>Проверка
                                , согласование макета
                            </div>
                        </div>
                        <div
                            className='process-item process-item-up process-item-even'>
                        </div>
                        <div
                            className='process-item process-item-up process-item-odd'>
                            <div
                                className='process-item-desc'>Отправка
                                скана готового документа на
                                эл.почту и отправка
                                оригинала
                                документа
                            </div>
                        </div>
                    </div>
                    <div
                        className='process-row process-down'>
                        <div
                            className='process-item process-item-down process-item-even'>
                        </div>
                        <div
                            className='process-item process-item-down process-item-odd'>
                            <div
                                className='process-item-desc'>Оформление
                                макета декларации /
                                сертификта
                            </div>
                        </div>
                        <div
                            className='process-item process-item-down process-item-even'>
                        </div>
                        <div
                            className='process-item process-item-down process-item-odd'>
                            <div
                                className='process-item-desc'>Заключение
                                Договора / отправка макета в
                                печать и на регистрацию
                            </div>
                        </div>
                        <div
                            className='process-item process-item-down process-item-even'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBlog

