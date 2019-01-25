import React, {Component} from 'react'

import './index.scss'

export class About extends Component {

    showDescription = (e) => {
        let article = e.target.nextSibling
        let items = document.querySelectorAll('.about__desc')

        for (let i =0 ; i < items.length ; i++) {
            items[i].classList.remove('active_desc')
        }
        article.classList.add('active_desc')
    }

    render() {
        return (
            <div className='about'>
                <div className='about__right'>
                    <div className='main-blog-title'>О нас</div>
                    <ul className='about__list' onClick={this.showDescription}>
                        <li className='about__item'>
                            <div
                                className='about__name'>Широкий
                                спектр услуг
                            </div>
                            <div
                                className='about__desc active_desc'>Широкий
                                выбор оформляемых
                                документов. Не нужно искать
                                десятки компаний, все
                                документы можно оформить в
                                одном месте.
                            </div>
                        </li>
                        <li className='about__item'>
                            <div
                                className='about__name'>Сроки
                                оформления
                            </div>
                            <div
                                className='about__desc'>Оперативное
                                оформление и регистрация
                                документов, сжатые сроки
                                выполнения работ. При
                                необходимости возможна
                                регистрация документов в
                                день обращения.
                            </div>
                        </li>
                        <li className='about__item'>
                            <div
                                className='about__name'>Лояльный
                                подход
                            </div>
                            <div
                                className='about__desc'>Оформление
                                документов в соответствии с
                                потребностями и желаниями
                                клиента. Грамотная
                                консультация по необходимым
                                требованиям относительно
                                Вашей продукции или услуг.
                            </div>
                        </li>
                        <li className='about__item'>
                            <div
                                className='about__name'>Профессиональные
                                специалисты
                            </div>
                            <div
                                className='about__desc'>Наши
                                эксперты по сертификации
                                обладают необходимой
                                квалификацией в сфере
                                подтверждения соответствия и
                                имеют необходимое высшее
                                техническое образованием.
                            </div>
                        </li>
                        <li className='about__item'>
                            <div
                                className='about__name'>Регистрация
                                документов
                            </div>
                            <div
                                className='about__desc'>Выдаваемые
                                документы включены в реестры
                                ФСА в соответствии с
                                действующим
                                законодательством. Мы
                                являемся членом Таможенного
                                союза и включаем в себя все
                                области аккредитации.
                            </div>
                        </li>
                    </ul>

                </div>

                <div className='about__left'>
                    <div className='about__img'></div>

                </div>

            </div>
        )
    }
}

export default About