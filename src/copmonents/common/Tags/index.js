import React, {Component} from 'react'
import './index.scss'

class Tags extends Component {


    render() {
        const {handleTagClick, tags} = this.props

        console.log(tags)
        return (
            <div className="tags-section">
                <h2>Тэги</h2>
                <ul className="tags-list-section">
                    {tags && tags.map((tag, i) => (
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

Tags.defaultProps = {
    tags: []
}

export default Tags