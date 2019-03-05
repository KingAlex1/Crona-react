import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCategories} from "../../../../reducers/blog";
import {Icon} from 'semantic-ui-react'
import './index.scss'

class BlogCategory extends Component {

    render() {
        const {categories, handleCategoryClick} = this.props

        return (
            <div className='category-section'>
                <h2 className="category-title">
                    Категории
                </h2>
                <ul className="category-list">
                    {categories && categories.map((el, i) => (
                        <li className="category-item">
                            <Icon name='arrow circle right'
                                  size='small'
                                  className="category-icon"/>
                            <div className="category-name"
                                 onClick={handleCategoryClick}
                                 key={i}>{el}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

BlogCategory.defaultProps = {
    categories: []
}


export default BlogCategory