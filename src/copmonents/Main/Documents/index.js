import React, {Component} from 'react'
import Trts004 from '../../Docs/Trts004'

import './index.scss'

export class Documents extends Component {

    showDescription = (e) => {
        let article = e.target.nextSibling
        let items = document.querySelectorAll('.documents-desc')

        for (let i =0 ; i < items.length ; i++) {
                items[i].classList.remove('active_desc')
        }
        article.classList.toggle('active_desc')
    }


    render() {
        return (
            <div className='documents'>
                <div className='main-blog-title'>Технические
                    регламенты ТС
                </div>
                <ul className='documents__list'>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            004/2011 О безопасности
                            низковольтного оборудования
                        </div>
                        <div className='documents-desc active_desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            010/2011 О безопасности машин и
                            оборудования
                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            020/2011 Электромагнитная совместимость технических средств                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            005/2011 О безопасности упаковки
                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            022/2011 Пищевая продукция в части ее маркировки
                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            017/2011 О безопасности продукции легкой
                            промышленности
                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>
                    <li className='documents__item'>
                        <div
                            className='documents__name'
                            onClick={this.showDescription}>ТР
                            ТС
                            025/2012 О безопасности мебельной продукции
                        </div>
                        <div className='documents-desc'>
                            <Trts004/>
                        </div>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Documents