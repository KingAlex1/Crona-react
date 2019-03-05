import React from 'react'
import {NewsItem} from "../NewsItem";



import './index.scss'

export const NewsList = ({news}) => {

    return (
        <ul className="news-list">
            {news.map((el, i) => (
                    <NewsItem item={el} key={i}/>
                )
            )}
        </ul>

    )
}


NewsList.defaultProps = {
    news: []
}