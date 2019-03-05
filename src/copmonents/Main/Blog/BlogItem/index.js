import React from 'react'
import {getShortMonth} from "../../../../helpers";
import './index.scss'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

export const BlogItem = ({post, key}) => {

    const customDate = new Date(post.date).toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const date = customDate.split(" ")

    const month = getShortMonth(date[1])
    
    const shortCat = post.category.slice(0,3) 

    return (
        <li className="blog-item" key={key}>
            <div className="post-payload">
                <div className="post-payload__date">
                    <div
                        className="post-payload__date-month">
                        {month}
                    </div>
                    <div
                        className="post-payload__date-number">
                        {date[0]}
                    </div>
                </div>
                <div
                    className="post-payload__type">{shortCat}
                </div>
            </div>
            <div className="post-info">
                <img src={post.image}
                     className="post-info__image"/>
                <div
                    className="post-info__title">{post.title}
                </div>
                <div className="post-info__settings">
                        <span
                            className="post-info__author">{post.author}</span>

                    <ul className="post-info__tags">
                        <Icon
                            name='tags' size='small'
                            className="tags-item-icon-blog"/>
                        {post.tags.map((el, i) => (
                            <li className="post-info__tags-item"
                                key={i}>{el}</li>
                        ))}

                    </ul>
                    <div className="tag-section">
                        <Icon
                            name='comments outline'
                            size='small'
                            className="tags-item-icon-blog"
                        />
                        <span
                            className="post-info__comments">{post.comments.length}</span>
                    </div>
                </div>
                <div
                    className="post-info__description">{post.description}
                </div>
                <Link to={`/blog/${post.hash}`}
                      className="post-info__continue">Читать
                    дальше
                </Link>
            </div>
        </li>
    )

}