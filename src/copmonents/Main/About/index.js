import React, {Component} from 'react'


import './index.scss'

export class About extends Component {

    showDescription = (e) => {
        let article = e.target.nextSibling
        let items = document.querySelectorAll('.about__desc')

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active_desc')
        }
        article.classList.add('active_desc')
    }


    render() {
        return (
            <div className='about'>
                <div className='about-top'>
                    <div className='about__right'>
                        <div className='main-blog-title'>О
                            нас
                        </div>
                        <ul className='about__list'
                            onClick={this.showDescription}>
                            <li className='about__item'>
                                <div
                                    className='about__name'>Широкий
                                    спектр услуг
                                </div>
                                <div
                                    className='about__desc active_desc'>Широкий
                                    выбор оформляемых
                                    документов. Не нужно
                                    искать
                                    десятки компаний, все
                                    документы можно оформить
                                    в
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
                                    документов в
                                    соответствии с
                                    потребностями и
                                    желаниями
                                    клиента. Грамотная
                                    консультация по
                                    необходимым
                                    требованиям относительно
                                    Вашей продукции или
                                    услуг.
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
                                    подтверждения
                                    соответствия и
                                    имеют необходимое высшее
                                    техническое
                                    образованием.
                                </div>
                            </li>
                            <li className='about__item'>
                                <div
                                    className='about__name'>Регистрация
                                    документов
                                </div>
                                <div
                                    className='about__desc'>Выдаваемые
                                    документы включены в
                                    реестры
                                    ФСА в соответствии с
                                    действующим
                                    законодательством. Мы
                                    являемся членом
                                    Таможенного
                                    союза и включаем в себя
                                    все
                                    области аккредитации.
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className='about__left'>
                        <div className='about__img'></div>

                    </div>
                </div>
                <div className='about-bottom'>
                    <div className='main-page__title'> Наши
                        гарантии
                    </div>
                </div>
                <div className='guarantees'>
                    <ul className='guarantees-list'>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_1'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Профессианализм
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    У нас работают только
                                    высококвалифицированные
                                    специалисты
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_2'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Результат
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Работаем на конечный
                                    результат
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_3'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Сроки
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Минимальные сроки
                                    изготовления
                                    документации
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_4'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Контроль
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Контроль прохождения
                                    всех этапов сертификации
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_5'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Сопровождение
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    В течении всего периода
                                    действия документации
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_6'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Возврат
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Вернем все деньги при не
                                    выполнении обязательств
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_7'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Легальность
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Все декларации /
                                    сертификаты
                                    регистрируются в гос.
                                    реестре
                                </div>
                            </div>
                        </li>
                        <li className='guarantee-item'>
                            <div
                                className='guarantee-item__pic item-pic_8'></div>
                            <div
                                className='guarantee-item__desc'>
                                <div
                                    className='guarantee-item__title'>
                                    Анализ
                                </div>
                                <div
                                    className='guarantee-item__info'>
                                    Прохождение лабораторных
                                    испытаний
                                </div>
                            </div>
                        </li>


                    </ul>


                </div>

            </div>
        )
    }
}

export default About