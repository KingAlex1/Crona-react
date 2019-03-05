import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'

import './index.scss'

export class CurrentNews extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClick =(e)=>{
        e.preventDefault()
        window.history.back();
    }


    render() {
        const {news, match} = this.props
        const [currentNews] = news.filter((el) => {
            return el.hash === match.params.hash
        })

        const customDate = new Date(currentNews.date).toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        
        return (
            <div className='current-news'>
                <h2 className="news-item__title">{currentNews.title}</h2>
                <div
                    className="current-news-item__description">{currentNews.description}</div>
                <ul className="tags-list">
                    <Icon
                        name='tags' size='small'
                        className="tags-item-icon"/>
                    {currentNews.tags.map((el, i) => (
                        <li
                            className="tags-item"
                            key={i}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
                {/*<div className="news-item__link">{item.link}</div>*/}
                <Icon className="tags-item-icon"
                      name='calendar alternate outline'
                      size='small'
                />
                <div
                    className="news-item__date">{customDate}</div>
                <Link to="/news" className="current-news__link-back">Назад</Link>

            </div>
        )
    }
}

CurrentNews.defaultProps = {
    news: [],

}


const mapStateToProps = state => ({
    news: state.news.news
})

export default connect(mapStateToProps)(CurrentNews)