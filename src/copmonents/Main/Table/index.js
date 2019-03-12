import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import List from './List'
import Search from './Search'


import './index.scss'

export class Table extends Component {

    render() {
        return (
            <div>
                <Search/>
                <List/>
            </div>
        )
    }
}


export default Table