import React from 'react'
import _ from 'lodash'
import { Pagination } from 'semantic-ui-react'

import './index.scss'

export const PageNumbers = ({pages, handleClick, currentPage}) => {

    return (
     <div className="news-pagination">
        <Pagination            
            onPageChange={handleClick}
            boundaryRange={0}
            defaultActivePage={currentPage}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={pages}

        />
     </div>

        // <ul className="number-list">
        //     {_.times(pages, (number) =>
        //         (<li className="number-item"
        //              key={number+1}
        //              id={number+1}
        //              onClick={handleClick}
        //         >
        //             {number+1}
        //         </li>))}
        //
        // </ul>
    )
}


PageNumbers.defaultProps = {
    pages: []
}