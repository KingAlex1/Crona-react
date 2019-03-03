import React, {Component} from 'react'
import './index.scss'

class NewsTags extends Component {


    getTagsList = () => {
        const {news} = this.props
        const tagArr = []
        news.map((el) => {
            el.tags.map((tag) => {
                if (!tagArr.includes(tag)) {
                    
                    tagArr.push(tag)
                }
            })
        })
        return tagArr
    }


    render() {
        const {news, handleTagClick} = this.props
        const tagArr = this.getTagsList()
        return (
            <div className="tags-section">
                <h2>Tags</h2>
                <ul className="tags-list-section">
                    {news.length > 1 && tagArr.map((tag, i) => (
                        <li
                            key={i}
                            className="tags-item-search"
                            onClick={handleTagClick}
                            
                        >{tag}</li>)
                    )
                    }
                </ul>
            </div>
        )
    }
}

NewsTags.defaultProps = {}

export default NewsTags