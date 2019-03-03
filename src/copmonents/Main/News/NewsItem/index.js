import React from 'react'
import {Link, Route} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'

import './index.scss'

export const NewsItem = ({item}) => {

    const customDate = new Date(item.date).toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (

        <li className="news-item">
            <h2 className="news-item__title">{item.title}</h2>
            <div
                className="news-item__description">{item.description}</div>
            <div className="news-item__tags-section">
                <ul className="tags-list">
                    <Icon
                        name='tags' size='small'
                        className="tags-item-icon"/>
                    {item.tags.map((el, i) => (
                        <li
                            className="tags-item"
                            key={i}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            {/*<div className="news-item__link">{item.link}</div>*/}
            
                <Icon className="tags-item-icon"
                    name='calendar alternate outline'
                    size='small'
                />
            <div
                className="news-item__date">{customDate}</div>
            <Link to={`/news/${item.hash}`}
                  className="news__continue">
                Читать дальше
            </Link>
        </li>
    )
}