import React, {Component} from 'react'
import dstrts from '../../../image/dstrts.jpg'
import sstrts from '../../../image/sstrts.jpg'
import ssgost from '../../../image/ssgost.jpg'
import tu from '../../../image/tu.png'

import './index.scss'

export class DownloadDocs extends Component {
    render() {
        return (
            <div className='download-docs'>
                <div className='main-blog-title'>Скачать
                    бланк заявки
                </div>
                <ul className='docs__list'>

                    <li className='docs__item'>
                        <a href={dstrts} download
                           className='docs__link'>
                            <div
                                className='docs__img docs__img-1'></div>
                            <div
                                className='docs__desc'>Заявление
                                на оформления декларации
                                соответствия ТР ТС / ГОСТ Р
                            </div>
                        </a>
                    </li>
                    <li className='docs__item'>
                        <a href={sstrts} download
                           className='docs__link'>
                            <div
                                className='docs__img docs__img-2'></div>
                            <div
                                className='docs__desc'>Заявление
                                на оформления сертификата
                                соответствия ТР ТС
                            </div>
                        </a>
                    </li>
                    <li className='docs__item'>
                        <a href={ssgost} download
                           className='docs__link'>
                            <div
                                className='docs__img docs__img-3'></div>
                            <div
                                className='docs__desc'>Заявление
                                на оформления добровольного
                                сертификата ГОСТ Р
                            </div>
                        </a>
                    </li>
                    <li className='docs__item'>
                        <a href={tu} download
                           className='docs__link'>
                            <div
                                className='docs__img docs__img-4'></div>
                            <div
                                className='docs__desc'>Опросный
                                лист на оформление
                                Технического условия
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DownloadDocs