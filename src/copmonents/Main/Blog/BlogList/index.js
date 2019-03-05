import React from 'react'
import {BlogItem} from "../BlogItem";
import './index.scss'

export const BlogList = ({posts}) => {

    console.log(posts)
    return (
        
        
        <ul className="blog-list">
            {posts.map((el, i) => (
                    <BlogItem post={el} key={i}/>
                )
            )}
        </ul>
    )
}

BlogList.defaultProps = {
    posts: []
}