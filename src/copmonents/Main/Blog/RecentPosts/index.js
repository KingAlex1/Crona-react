import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

export const RecentPosts = ({recentPosts}) => {

    return (
        <div className='recent-post-section'>
            <h2
                className='recent-post-title'>
                Последние сообшения 
            </h2>
            <ul className='recent-post-list'>
                {recentPosts.map((el, i) => {
                    return (
                        <li className='recent-post-item'
                            key={i}>
                            
                            <Link to={`/blog/${el.hash}`}
                                  className='recent-post-item__name'>{el.title}
                            </Link>
                            <div
                                className='recent-post-item__time'>{el.date}
                            </div>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}

export default RecentPosts