import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BlogList} from "./BlogList";
import Spinner from "react-svg-spinner";
import {
    fetchBlogRequest,
    fetchBlogByTagsRequest, fetchBlogByCategoryRequest
} from "../../../actions/blog";

import './index.scss'
import {
    getCategories,
    getPages, getRecentPosts, getTags
} from "../../../reducers/blog";
import {PageNumbers} from "./PageNumbers";
import Tags from '../../common/Tags'
import BlogCategory from "./BlogCategoris";
import RecentPosts from "./RecentPosts";

export class Blog extends Component {

    state = {currentPage: "1", tag: null, category: null}

    componentDidMount() {
        this.props.fetchBlogRequest()
    }

    handleClick = (e) => {
        const currentPage = e.target.getAttribute('value')
        this.setState({currentPage: currentPage})
        window.scrollTo(0, 0)
        if (this.state.tag) {
            const {tag} = this.state
            this.props.fetchBlogByTagsRequest({
                tag,
                currentPage
            })
        } else if (this.state.category) {
            const {category} = this.state
            this.props.fetchBlogByCategoryRequest({
                category,
                currentPage
            })
        } else {
            this.props.fetchBlogRequest(currentPage)
        }
    }

    handleTagClick = (e) => {
        const tag = e.target.textContent
        const {currentPage} = this.state
        this.setState({tag: tag})
        window.scrollTo(0, 0)
        this.props.fetchBlogByTagsRequest({
            tag,
            currentPage
        })
    }

    handleCategoryClick = (e) => {
        const category = e.target.textContent
        const {currentPage} = this.state
        this.setState({category: category})
        window.scrollTo(0, 0)
        this.props.fetchBlogByCategoryRequest({
            category,
            currentPage
        })
    }


    render() {

        const {posts, pages, loading, categories, tags, recentPosts} = this.props

        if (loading) {
            return <Spinner size="64px" color={'#3ec6ff'}/>
        }
        return (
            <div className='blog-section'>
                <div className="blog-main">
                    <BlogList posts={posts}/>
                    <div className="options">
                        <RecentPosts
                            recentPosts={recentPosts}/>
                        <Tags
                            list={posts}
                            tags={tags}
                            handleTagClick={this.handleTagClick}/>
                        <BlogCategory
                            categories={categories}
                            handleCategoryClick={this.handleCategoryClick}
                        />
                    </div>
                </div>
                {pages > 1 && <PageNumbers pages={pages}
                                           handleClick={this.handleClick}
                                           currentPage={this.state.currentPage}
                />}
            </div>
        )
    }
}

Blog.defaultProps = {
    posts: [],
    tags:[]
}


const mapStateToProps = state => ({
    posts: state.blog.posts,
    loading: state.blog.loading,
    pages: getPages(state),
    categories: getCategories(state),
    tags: getTags(state),
    recentPosts: getRecentPosts(state)
})

const mapDispatchToProps = {
    fetchBlogRequest,
    fetchBlogByTagsRequest,
    fetchBlogByCategoryRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog)