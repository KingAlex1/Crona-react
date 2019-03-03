import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    fetchNewsRequest,
    fetchNewsByTagsRequest
} from "../../../actions/news";
import {NewsList} from "./NewsList";
import {PageNumbers} from './PageNumbers'
import {
    getPages,
    getNews,
    getCount,
    getFilter,

} from "../../../reducers/news";
import Spinner from "react-svg-spinner";
import {
    Switch,
    Route,
    Link
} from 'react-router-dom'


import './index.scss'
import NewsTags from "./NewsTags";


export class News extends Component {

    state = {currentPage: "1", tag: null}

    componentDidMount() {
        this.props.fetchNewsRequest()
    }

    handleClick = (e) => {
        const currentPage = e.target.getAttribute('value')
        this.setState({currentPage: currentPage})
        window.scrollTo(0, 0)
        if (this.state.tag) {
            const {tag} = this.state
            this.props.fetchNewsByTagsRequest({
                tag,
                currentPage
            })
        } else {
            this.props.fetchNewsRequest(currentPage)
        }
    }

    handleTagClick = (e) => {
        const tag = e.target.textContent
        const currentPage = e.target.getAttribute('value')
        this.setState({currentPage: currentPage, tag: tag})
        window.scrollTo(0, 0)
        this.props.fetchNewsByTagsRequest({
            tag,
            currentPage
        })
    }

    render() {
        const {news, pages, loading} = this.props

        console.log(loading)
        if (loading) {
            return <Spinner size="64px" color={'#3ec6ff'} />
        }
        return (

            <div className="news-section">
                <div className="news-main">
                    <NewsList news={news}/>
                    <NewsTags news={news}
                              handleTagClick={this.handleTagClick}/>
                </div>
                {pages > 1 && <PageNumbers pages={pages}
                                           handleClick={this.handleClick}
                                           currentPage={this.state.currentPage}
                />}
            </div>

        )
    }
}


const mapStateToProps = state => ({
    news: state.news.news,
    loading: state.news.loading,
    pages: getPages(state)
})

const mapDispatchToProps = {
    fetchNewsRequest,
    fetchNewsByTagsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(News)