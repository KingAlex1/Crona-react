import React, {Component} from 'react'
import './index.scss'
export class CheckDocs extends Component {
    render() {
        return(
           <div className='check-docs'>
               <div className='main-blog-title'>Проверить подлинность</div>
                <ul className='check-docs__list'>
                    <li className='check-docs__item'>
                        <a href="https://pub.fsa.gov.ru/ral" className='check-docs__link'>Реестр аккредитованных лиц</a>
                    </li>
                     <li className='check-docs__item'>
                        <a href="https://pub.fsa.gov.ru/rds/declaration" className='check-docs__link'>Реестр деклараций соответствия</a>
                    </li>
                     <li className='check-docs__item'>
                        <a href="https://pub.fsa.gov.ru/rss/certificate" className='check-docs__link'>Реестр сертификатов сооветствия</a>
                    </li>
                    <li className='check-docs__item'>
                        <a href="https://portal.eaeunion.org/sites/odata/_layouts/15/Portal.EEC.Registry.Ui/DirectoryForm.aspx?ListId=0e3ead06-5475-466a-a340-6f69c01b5687&ItemId=231#" className='check-docs__link'>Реестр СГР</a>
                    </li>
                </ul>
           </div>
        )
    }
}

export default CheckDocs