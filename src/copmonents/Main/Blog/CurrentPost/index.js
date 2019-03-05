import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import {getShortMonth} from "../../../../helpers/index";
import Comment from '../Comments'

import './index.scss'


export class CurrentPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    checkPost = () => {
        const {posts, post, match} = this.props
        let currentPost
        if (post) {
            currentPost = post
        } else {
             posts.map((el) => {
                if (el.hash === match.params.hash) {
                    currentPost = el
                }
            })
        }
        return currentPost
    }

    render() {
        const post = this.checkPost()

        const customDate = new Date(post.date).toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        const date = customDate.split(" ")
        const month = getShortMonth(date[1])
        return (
            <div>
                <div className="blog-item">
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
                            className="post-payload__type">{post.category}
                        </div>
                    </div>
                    <div className="post-info">
                        <img src={post.image}
                             className="post-info__image"/>
                        <div
                            className="post-info__title">{post.title}
                        </div>
                        <div
                            className="post-info__settings">
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
                            className="current-post-info__description">{post.description}
                        </div>
                        <Link to={`/blog`}
                              className="post-info__back">
                            Назад
                        </Link>
                    </div>
                </div>
                <Comment post={post}/>
            </div>
        )
    }
}

CurrentPage.defaultProps = {
    posts: [],

}

const mapStateToProps = state => ({
    posts: state.blog.posts,
    post: state.blog.post,

})

export default connect(mapStateToProps)(CurrentPage)