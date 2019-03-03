import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'

import './index.scss'

export class Table extends Component {

    render() {
        return (
            <div>
                <Icon bordered name='users' />
                <Icon bordered color='teal' name='users' />
                <Icon bordered inverted color='black' name='users' />
                <Icon bordered inverted color='teal' name='users' />
            </div>
        )
    }
}


export default Table