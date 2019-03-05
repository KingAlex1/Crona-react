import React from 'react'
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
    )
}


PageNumbers.defaultProps = {
    pages: []
}