import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getTime} from "../../../../helpers";
import {sendMessageRequest} from "../../../../actions/blog";


import './index.scss'

export class Comments extends Component {

    state = {
        messageInput: "",
        emailInput: "",
        descInput: ""
    }

    handlePreventClick = (e) => {
        e.preventDefault()
    }

    handleClick = (e) => {
        
        console.log(e)
        const newComment = {}
        newComment.name = document.querySelector('#author').value;
        newComment.email = document.querySelector('#email').value;
        newComment.description = document.querySelector('#description').value;
        newComment.time = new Date().toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        const message = {
            ...this.props.post,
            comments: [...this.props.post.comments, newComment]
        }     

        this.props.sendMessageRequest(message)
        document.querySelector('.form-comment').reset()
    }

    renderComments = () => {
        const {post: {comments}} = this.props

        return (
            <ul>
                {comments.length && comments.map((el, i) => (
                    <li className="comment-item"
                        key={i}>
                        <div className="comment-info">
                            <div
                                className="comment-name">{el.name}
                            </div>
                            <div
                                className="comment-date">{el.time}

                            </div>
                        </div>
                        <div className="comment-desc">
                        <span
                            className='comment-desc__text'>
                            {el.description}
                        </span>
                            <div
                                className="comment-avatar"/>
                        </div>
                    </li>))}
            </ul>
        )
    }

    getCurrentComments = (comments) => {
        const count = comments % 100
        const lcount = count % 10
        let response;
        if (count >= 5 && count <= 20) {
            response = "Коментариев"
        } else if (lcount === 1) {
            response = "Коментарий"
        } else if (lcount >= 2 && lcount <= 4) {
            response = "Коментария"
        } else {
            response = "Коментариев"
        }
        return response

    }

    render() {
        const {post} = this.props

        const sumComments = post.comments.length
        const correctComments = this.getCurrentComments(sumComments)

        return (
            <div className='comment'>
                <div
                    className="comment-count">{sumComments} {correctComments}
                </div>
                {this.renderComments()}

                <div className="comment-title">Оставить
                    комментарий
                </div>
                <form onClick={this.handlePreventClick}
                      className='form-comment'>
                    <div className="form-container">
                        <div
                            className='input-name-section'>

                            <input type="text"
                                   id='author'
                                   name="author"
                                   placeholder="Ваше имя ..."
                                   className='input-name'/>
                            <label htmlFor="author"
                                   className='label-name'>Имя</label>

                        </div>
                        <div
                            className='input-email-section'>

                            <input type="text"
                                   className="input-email"
                                   id='email'
                                   name="email"
                                   placeholder="Ваша эл. почта ..."
                            /><label
                            htmlFor="email"
                            className='label-email'>Эл.
                            почта</label>

                        </div>
                        <div
                            className="input-description-section">
                            <label htmlFor="description"
                                   className="description-label"/>
                            <textarea name="description"
                                      id="description"
                                      cols="30"
                                      rows="10"
                                      className='input-description'
                                      placeholder="Ваш комментарий ..."
                            />

                        </div>
                    </div>
                    <div
                        className='input-submit-section'>
                        <input type="submit"
                               className="input-submit"
                               onClick={this.handleClick}
                        />
                    </div>

                </form>
            </div>
        )
    }
}


const mapDispatchToProps = {
    sendMessageRequest
}

const mapStateToProps = (state) => ({
    posts: state.blog.posts

})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)